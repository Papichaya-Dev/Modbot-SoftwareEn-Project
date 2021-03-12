<template>
  <div id="app">
    <div class="container">
      <h2 id="texttopic" class="subtitle has-text-centered">
        <i class="fas fa-edit"></i> Edit Joint Stations
      </h2>
      <hr />
      <br />
      <div class="field has-addons">
        <div id="inputword" class="input-group mb-3">
            <table>
              <tr>
                    <th class="texttitle text-left">Joint Station name</th>
                    <td>
                        <input
                          type="text"
                          class="form-control"
                          placeholder=""
                          aria-label="insert word"
                          v-model="details.joint_station"
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
                            min="1" max="30"
                            v-model="details.latitude"
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
                            v-model="details.longitude"
                            aria-describedby="basic-addon2"
                        />
                    </td>
                </tr>
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
                            <th scope="col">Delete</th>
                        </tr>
                    </thead>
                    <tbody v-for="(bus, index) in details.bus_no" :key="bus">
                      <tr v-if="index <= details.bus_no.length">
                         <th scope="row">{{index+1}}</th>
                        <th>
                          <input type="text" class="form-control bg-light" v-model="bus.first_parked_bus" @input="first_parked_bus[index]" >
                        </th>
                        <th>
                          <input type="text" class="form-control bg-light" v-model="bus.second_parked_bus" @input="second_parked_bus[index]" >
                        </th>
                        <th>
                          <button class="btn btn-danger" @click="removeItem(index)">
                            <i class="fas fa-eraser"></i>
                          </button>
                        </th>
                         <th>
                            <p hidden>{{ getBusData(index) }}</p> 
                        </th>
                      </tr>
                    </tbody>
                   <!-- <tbody v-for="(num, index) in number" :key="num">
                      <tr>
                         <th scope="row">{{index+1}}</th>
                         <td>
                          <input 
                          type="text" class="form-control bg-light" 
                          v-model="first_parked_bus_two[index]">
                        </td>
                        <td>
                          <input type="text" 
                          class="form-control bg-light" 
                          v-model="second_parked_bus_two[index]">
                    </td>
                        
                          <button class="btn btn-warning">
                            <i class="fas fa-edit"></i>
                          </button>
                          
                            <p hidden>{{ getBusDataTwo(index) }}</p> 
                      </tr>
                    </tbody> -->
                </table>
            </div>
                      <button class="btn btn-info" @click="addNum">Add row</button>

            <!-- <div class="btn-group">
              <button class="btn btn-danger" @click="removeAllstation">Remove All</button>
              <button class="btn btn-info" @click="addNum">Add row</button>
            </div> -->
        </div>
      </div>
    </div>
    
    <br><br><br>
    <button
      type="button"
      class="btn btn-danger"
      data-toggle="modal"
      data-target="#deleteModal"
    >
      Delete
    </button>
    <div
      class="modal fade"
      id="deleteModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="deleteModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="deleteModalLabel">Delete Bus</h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <p>Do you want to delete this Joint Station : <span>{{details.joint_station}}</span></p>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
            <router-link to="/transport/bus">
              <button
                id="btnreset"
                type="reset"
                class="btn btn-danger"
                @click="deleteBtn"
              >
                Delete
              </button></router-link
            >
          </div>
        </div>
      </div>
    </div>

    &nbsp;
    <button
      type="button"
      class="btn btn-primary"
      data-toggle="modal"
      data-target="#exampleModal"
    >
      Save Changes
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
            <h5 class="modal-title" id="exampleModalLabel">Save Changes</h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <p>Do you want save your changes ?</p>
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
                class="btn btn-primary"
                @click="updateParamtoAPI"
              >
                Save Changes
              </button></router-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import axios from "axios";
export default {
  name: "App",
  data() {
    return {
      id: this.$route.params.id,
      details: {
        joint_station:"",
        latitude:"",
        longitude:"",
        bus_no:[],
        // first_parked_bus:"",
        // second_parked_bus:"",
        // first_parked_bus_two:"",
        // second_parked_bus_two:"",
      },
      tempBus: [],
      getStations: [],
      getStationsTwo: [],
      number: 1,
      numPrice: 1,
      first_parked_bus: [],
      second_parked_bus: [],
      search: [],
      selectSearchStationName: [],
      searchResultNum: 0,

      first_parked_bus_two:[],
      second_parked_bus_two:[],
      searchTwo:[],
      selectSearchStationNameTwo:[],
      searchResultNumTwo:0,
      searchingBuff : {}
    };
  },
  async mounted() {
    const response = await axios.get("api/jointstation/" + this.id);
    this.details = response.data;
    const supportRes = await axios.get("api/jointstation/" + this.id);
    this.tempBus = supportRes.data;
    console.log(supportRes.data)
    const getRes = await axios.get("api/jointstation/")
    this.getStations = getRes.data;
    // console.log(this.getStations)
  },
  methods: {
    removeAllstation() {
      this.details.bus_no = []
      return this.details.bus_no
    },
    removeItem(index) {
      this.search.splice(index, 1);
      return this.details.bus_no.splice(index, 1);
    },
    removeItemTwo(index) {
      this.searchTwo.splice(index);
      return this.details.bus_no.splice(index, 1);
    },
    async updateParamtoAPI() {
      let newdata = {
      joint_station: this.details.joint_station,
      latitude: this.details.latitude,
      longitude: this.details.longitude,
      bus_no: this.details.bus_no,
      first_parked_bus: this.details.first_parked_bus,
      second_parked_bus: this.details.second_parked_bus,
      };
        const response = await axios.put("api/jointstation/" + this.id, newdata);
        this.newdata = response.data;
        // console.log(response.data);
        location.reload();
    },
    async deleteBtn() {
      const res = await axios.delete("api/jointstation/" + this.id);
      console.log(res);
      location.reload();
    },
    addNum() {
    //  console.log(this.searchingBuff)
    //   if(this.searchingBuff.bus_no) {
    //     console.log("trueee")
    //     this.details.bus_no[this.details.bus_no.length] = this.searchingBuff
    //   }
    //   console.log(this.number)
      // this.number = this.number + 1;
      this.number = this.number + 1;
    },
    addPrice() {
      this.numPrice = this.numPrice + 1;
    },
    StoFocus() {
      this.SisFocus = true;
      this.FisFocus = false;
    },
    FtoFocus() {
      this.SisFocus = false;
      this.FisFocus = true;
    },
    searchResult(index)  {
       let tempStation = this.getStations
      if (this.search[index] != '' && this.search[index]) {
        console.log(index)
            tempStation = tempStation.filter((item) => {
              return item.station_no.includes(this.search[index])
            })
            
            if(tempStation[0] == undefined){
              this.searchResultNum = 0
              return null
            }
              let buffArray = []
              tempStation.map((station) => {
                buffArray.push(station)
              })
              
            this.details.stations[index] = tempStation[0]
            this.selectSearchStationName[index] = buffArray
            this.searchResultNum = tempStation.length
          } else {
            this.searchResultNum = 0
            return null
          }
        return this.selectSearchStationName[index][0].station_name
    },

    searchResultTwo(index)  {
      let tempBus = this.getBus
      if (this.searchTwo[index] != '' && this.searchTwo[index]) {
            tempBus = tempBus.filter((item) => {
              return item.bus_no.includes(this.searchTwo[index])
            })
            
            if(tempBus[0] == undefined){
              this.searchResultNumTwo = 0
              return null
            }
              let buffArray = []
              tempBus.map((bus_no) => {
                buffArray.push(bus_no)
              })
              console.log(buffArray)
            // console.log(index)
            // console.log(this.details.stations.length)
            // let testNum = index + this.details.stations.length
            // if(this.details.stations[(index + this.details.stations.length) -1 ].bus_no !== tempStation[0].bus_no){
            //   this.details.stations[index + this.details.stations.length] = tempStation[0]
            // }
            // console.log(this.details.stations[(index + this.details.stations.length) -1 ])
            
            this.selectSearchStationNameTwo[index] = buffArray
            this.searchResultNumTwo = tempBus.length
            this.searchingBuff = this.selectSearchStationNameTwo[index][0]
          } else {
            this.searchResultNumTwo = 0
            return null
          }
        return this.selectSearchStationNameTwo[index][0].bus_no
    },

    getResultNum() {
      return this.searchResultNum.toString()
    },
    getResultNumtwo() {
      return this.searchResultNumTwo.toString()
    },
    getBusData(index) {
      if (this.first_parked_bus[index] != '' && this.second_parked_bus[index] != '' 
          && this.second_parked_bus[index] && this.first_parked_bus[index]) {
        let getBus = { 
          first_parked_bus: this.first_parked_bus[index],
          second_parked_bus: this.second_parked_bus[index]
        }
        this.details.bus_no[index] = getBus
        console.log(this.details.bus_no)
      }
      return this.details.bus_no[index]
    },
    getBusDataTwo(index) {
      if (this.first_parked_bus_two[index] != '' && this.second_parked_bus_two[index] != '' 
          && this.second_parked_bus_two[index] && this.first_parked_bus_two[index]) {
        let getBus = { 
          first_parked_bus: this.first_parked_bus_two[index],
          second_parked_bus: this.second_parked_bus_two[index]
        }
        this.details.bus_no[index] = getBus
        console.log(this.details.bus_no)
      }
      return this.details.bus_no[index]
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