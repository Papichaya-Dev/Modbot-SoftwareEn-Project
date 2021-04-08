<template>
  <div id="app">
    <div class="container">
      <h2 id="texttopic" class="subtitle has-text-centered">
        <i class="fa fa-map-pin"></i> Create Joint Stations  <i class="fa fa-map-pin"></i>
      </h2>
      <hr />
      <br />
      <div class="field has-addons">
        <div id="inputword" class="input-group mb-3">
            <table>
              <tr>
                    <th class="texttitle text-left">Joint station name</th>
                    <td>
                        <input
                          type="text"
                          class="form-control"
                          placeholder=""
                          aria-label="insert word"
                          v-model="joint_station"
                          aria-describedby="basic-addon1"
                        />
                    </td>
                </tr>
                <tr>
                    <th class="texttitle text-left">Latitude</th>
                    <td>
                        <input
                            type="text"
                            class="form-control"
                            placeholder=""
                            aria-label="insert word"
                            aria-describedby="basic-addon2"
                            v-model="latitude"
                        />
                    </td>
                </tr>
                <tr>
                    <th class="texttitle text-left">Longitude</th>
                    <td>
                        <input
                            type="text"
                            class="form-control"
                            placeholder=""
                            aria-label="insert word"
                            v-model="longitude"
                            aria-describedby="basic-addon2"
                        />
                    </td>
                </tr>
                <br/>
            </table>
          
        </div> 
        
        <div v-for="(num, index) in number_joint" :key="num">
          <div class="card" @click="StoFocus" :class="SisFocus ? 'border-primary':''">
              <div class="card-body">
                <h4>{{num}} Joint Bus</h4><br>
                  <table id="tabletran" class="table text-center">
                      
                      <thead>
                          <tr>
                              <th scope="col" v-for="(col, i) in number_col[index]" :key="col">{{ items[i].title }}</th>
                          </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td v-for="(col, id) in number_col[index]" :key="col">
                            {{parked_bus[index][id]}}
                            <input 
                            type="text" class="form-control bg-light"
                            v-model="parked_bus[id]"
                            @input="addParked(index, id)">
                            <p hidden>{{ getBusData(index, id) }}</p> 
                          </td>
                          <!-- <td>
                            <input type="text" 
                            class="form-control bg-light" 
                            v-model="second_parked_bus[index]">
                      </td> -->
                         </tr>     
                      </tbody>
                  </table>
              </div>
              <div class="btn-group" role="group" aria-label="Basic example">
                <button class="btn btn-secondary" @click="removeCol(index)">Remove Column</button>
                <button class="btn btn-success" @click="addCol(index)">Add Column</button>
              </div>
            </div>
        </div>
      </div>
      <button class="btn btn-info btn-lg btn-block" @click="addNumJoint">Add Joint</button>
    </div>
    
    <br><br><br>
    <button
      id="btnreset"
      type="reset"
      class="btn btn-danger"
      @click="resetItem"
    >
      Reset
    </button>
    &nbsp;
    <button
      type="button"
      class="btn btn-primary"
      data-toggle="modal"
      data-target="#exampleModal"
    >
      Create
    </button>

    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Are you sure?</h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
            <router-link to="/design/jointstation">
              <button
                id="btncrete"
                type="submit"
                class="btn btn-success"
                @click="addParamtoAPI"
              >
                Create
              </button>
            </router-link>
          </div>
        </div>
      </div>
    </div> 

    <!-- <div>
      search: <input type="text" v-model="search">
      <div v-for="i in searchResult" :key="i._id">{{ i.station_name }}</div>
    </div> -->
  </div>

</template>

<script>
import axios from "axios";
export default {
  name: "App",
  data() {
    return {
      joint_station:"",
      latitude:"",
      longitude:"",
      bus_no:[
        {
          first_parked_bus:'',
          second_parked_bus:'',
          third_parked_bus:'',
          fourth_parked_bus:'',
          fifth_parked_bus:''
        }
      ],
      tempBus: [],
      parked_bus:[[]],
      first_parked_bus:'',
      second_parked_bus:'',
      number_joint: 1,
      number_col: [1,1,1,1,1],
      items: [
        { 
          title : '1st parked bus',
          num: 'first',
          value: 'first_parked_bus'
        },
        { 
          title : '2nd parked bus',
          num: 'second',
          value: 'second_parked_bus'
        },
        { 
          title : '3rd parked bus',
          num: 'third',
          value: 'third_parked_bus'
        },
        { 
          title : '4th parked bus',
          num: 'fourth',
          value: 'fourth_parked_bus'
        },
        { 
          title : '5th parked bus',
          num: 'fifth',
          value: 'fifth_parked_bus'
        },
      ]
    };
  },
  async mounted() {
    let newdata = {
      joint_station: this.joint_station,
      latitude: this.latitude,
      longitude: this.longitude,
      bus_no: this.bus_no,
      first_parked_bus: this.first_parked_bus,
      second_parked_bus: this.second_parked_bus
    };
    const response = await axios.get("api/jointstation/", newdata);
    this.newdata = response.data;
    // console.log(newdata);
  },
  methods: {
    async addItem() {
      this.number = this.number + 1;
      this.bus_no.push(this.first_parked_bus);
      this.bus_no.push(this.second_parked_bus);
      console.log(this.bus_no);
      this.first_parked_bus = "";
      this.second_parked_bus = "";
    },
    async addParamtoAPI() {
      
      let newdata = {
        joint_station: this.joint_station,
        latitude: this.latitude,
        longitude: this.longitude,
        bus_no: this.bus_no,
        parked_bus: this.parked_bus
      };
        const response = await axios.post("api/jointstation/", newdata);
        this.newdata = response.data;
        console.log(newdata);
        location.reload();
    },
    addNumJoint() {
      this.number_joint = this.number_joint + 1;
    },
    addCol(index) {
      if(this.number_col[index] === 5){
        alert('MAX : 5')
        return this.number_col[index]
      } 
      return this.number_col[index] = this.number_col[index] + 1
    },
    removeCol(index) {
      console.log(this.number_col)
      if(this.number_col[index] === 1)
        return this.number_col[index]
      return this.number_col[index] = this.number_col[index] - 1
    },
    // addParked(index, id) {
    //   console.log(this.parked_bus[id])
    //   console.log(this.bus_no)
    // },
    // addItem() {
    //   console.log(this.searchResult[0])
    //   this.items = this.searchResult[0]
    // },
    StoFocus() {
      this.SisFocus = true;
      this.FisFocus = false;
    },
    FtoFocus() {
      this.SisFocus = false;
      this.FisFocus = true;
    },
    getBusData(index, id) {
      console.log(this.parked_bus[index][id])
      if (this.parked_bus[id] != '' && this.parked_bus[id]) {
        this.bus_no = { 
          first_parked_bus: this.parked_bus[index][0],
          second_parked_bus: this.parked_bus[index][1],
          third_parked_bus: this.parked_bus[index][2],
          fourth_parked_bus: this.parked_bus[index][3],
          fifth_parked_bus: this.parked_bus[index][4]
        }
        console.log(this.bus_no)
      }
      return this.bus_no
    }
  },
};
</script>

<style lang="scss" scoped>
#app {
  margin: auto;
  margin-top: 3rem;
  width: 90%;
}
.icon {
  cursor: pointer;
}
.texttitle {
  color: rgb(0, 0, 0);
  font-weight: bolder;
  width: 180px;
  line-height: 3rem;
}
.edit {
  margin-left: 300px;
  margin-top: -35px;
}
#btnedit {
  margin-left: 150px;
  font-family: "DM Serif Display", serif;
  border: 2px solid white;
  padding: 0.2rem;
  color: white;
  width: 80px;
  height: 50px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 300ms ease-in-out;
  opacity: 0.8;
  letter-spacing: 0.1rem;
  &:hover {
    background-color: white;
    color: black;
    cursor: pointer;
  }
}
#btndelete {
  font-family: "DM Serif Display", serif;
  border: 2px solid white;
  padding: 0.2rem;
  color: white;
  width: 100px;
  height: 50px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 300ms ease-in-out;
  margin-top: -50px;
  margin-left: 250px;
  opacity: 0.8;
  letter-spacing: 0.1rem;
  &:hover {
    background-color: white;
    color: black;
    cursor: pointer;
  }
}
</style>
