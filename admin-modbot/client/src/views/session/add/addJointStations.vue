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
          <div></div>
        </div> 
        <div class="card" @click="StoFocus" :class="SisFocus ? 'border-primary':''">
            <div class="card-body">
              <h4>Add Bus</h4><br>
                <table id="tabletran" class="table text-center">
                  <colgroup>
                        <col style="width: 8%" />
                        <col style="width: 35%" />
                        <col style="width: 35%" />
                        <col style="width: 10%" />
                        <col style="width: 5%" />
                    </colgroup>
                    
                    <thead>
                        <tr>
                            <th scope="col">No.</th>
                            <th scope="col">1st parked bus</th>
                            <th scope="col">2nd parked bus</th>
                            <th scope="col">Edit</th>
                        </tr>
                    </thead>
                    <tbody v-for="(num, index) in number" :key="num">
                      <tr>
                         <th scope="row">{{index+1}}</th>
                         <td>
                          <input 
                          type="text" class="form-control bg-light" 
                          v-model="first_parked_bus">
                        </td>
                        <td>
                          <input type="text" 
                          class="form-control bg-light" 
                          v-model="second_parked_bus">
                    </td>
                        
                          <button class="btn btn-warning">
                            <i class="fas fa-edit"></i>
                          </button>
                      </tr>
                    </tbody>
                </table>
            </div>
          <button class="btn btn-info" @click="addItem">Add row</button>
        </div>
  
      </div>
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
      bus_no:[],
      first_parked_bus:"",
      second_parked_bus:"",
      number: 1,
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
    console.log(newdata);
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
        first_parked_bus: this.first_parked_bus,
        second_parked_bus: this.second_parked_bus
      };
        const response = await axios.post("api/jointstation/", newdata);
        this.newdata = response.data;
        console.log(newdata);
        location.reload();
    },
    addNum() {
      this.number = this.number + 1;
    },
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
