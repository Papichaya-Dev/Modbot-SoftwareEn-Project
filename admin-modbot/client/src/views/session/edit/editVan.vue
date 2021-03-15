<template>
  <div id="app">
    <div class="container">
      <h2 id="texttopic" class="subtitle has-text-centered">
        <i class="fas fa-edit"></i>Edit Van Details
      </h2>
      <hr/>
      <br/>
      <div class="field has-addons">
        <div id="inputword" class="input-group mb-3">
          <table>
            <tr>
              <th class="texttitle text-left">Van No.</th>
              <td>
                <input
                    type="text"
                    class="form-control"
                    placeholder=""
                    aria-label="insert word"
                    v-model="details.van_no"
                    aria-describedby="basic-addon2"
                />
              </td>
            </tr>
            <tr>
              <th class="texttitle text-left">Starting Point</th>
              <td>
                <input
                  type="text"
                  class="form-control"
                  placeholder=""
                  aria-label="insert word"
                  v-model="details.starting_point"
                  aria-describedby="basic-addon2"
                />
              </td>
            </tr>
            <tr>
              <th class="texttitle text-left">Destination Point</th>
              <td>
                <input
                  type="text"
                  class="form-control"
                  placeholder=""
                  aria-label="insert word"
                  v-model="details.destination_point"
                  aria-describedby="basic-addon2"
                />
              </td>
            </tr>
            <!-- <tr>
              <th class="texttitle text-left">No. of Station</th>
              <td>
                <input
                  type="text"
                  class="form-control"
                  placeholder=""
                  aria-label="insert word"
                  aria-describedby="basic-addon2"
                />
              </td>
            </tr> -->
            <tr>
              <th class="texttitle text-left"></th>
              <td>
                <div class="form-check form-check-inline">
                  <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="one-way" v-model="details.type" checked>
                  <label class="form-check-label" for="exampleRadios1">
                      One-way
                  </label>
                </div>
                <div class="form-check form-check-inline">
                  <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="return" v-model="details.type">
                  <label class="form-check-label" for="exampleRadios2">
                      Return
                  </label>
                </div>
              </td>
            </tr>
          </table>
          <div></div>
        </div>
        <div class="card" @click="StoFocus" :class="SisFocus ? 'border-primary':''">
          <div class="card-body">
            <h4>Station</h4><br>
            <table id="tabletran" class="table">
              <colgroup>
                <col style="width: 5%">
                <col style="width: 10%">
                <col style="width: 20%">
                <col style="width: 10%">
              </colgroup>
              <thead>
                <tr>
                <th scope="col">No.</th>
                <th scope="col">Station No.</th>
                <th scope="col">Station Name</th>
                <th scope="col">Edit</th>
                </tr>
              </thead>
              <tbody v-for="(station, index) in details.stations" :key="station">
                <tr v-if="index <= details.stations.length">
                  <th scope="row">{{index + 1}}</th>
                  <th>
                    <input type="text" class="form-control bg-light" v-model="search[index]" :placeholder="station.station_no" :v-if="search[index] != 0 ? placeholder='station.station_no' : ''" >
                  </th>
                  <th>
                    <input type="text" class="form-control bg-light" v-model="station.station_name" :placeholder="searchResult(index)" disabled>
                  </th>
                  <th class="text-center mx-sm-3">
                    <p v-if="search[index] == null">1</p>
                    <p v-if="search[index] != null">{{ getResultNum() }}</p>
                  </th>
                  <th>
                    <button class="btn btn-danger" @click="removeItem(index)">
                      <i class="fas fa-eraser"></i>
                    </button>
                  </th>
                </tr>
              </tbody>
              <tbody>
                <tr v-for="(num, index) in number" :key="num">
                  <th scope="row">
                    <input type="text" class="form-control bg-light text-center" :placeholder="index + 1 + details.stations.length" readonly>
                  </th>
                  <th>
                    <input type="text" class="form-control bg-light" v-model="searchTwo[index]">
                  </th>
                  <th>
                    <select class="custom-select mdb-select md-form mx-sm-3 bg-light" searchable="Search here.." data-live-search="true" disabled>
                      <option  >{{ searchResultTwo(index) }}</option>
                    </select>
                  </th>
                  <th>
                    <button class="btn btn-danger" @click="removeItemTwo(index)">
                      <i class="fas fa-eraser"></i>
                    </button>
                  </th>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="btn-group">
            <button class="btn btn-danger" @click="removeAllstation">Remove All</button>
            <button class="btn btn-info" @click="addNum">Add row</button>
          </div>
        </div>
        <div class="card" @click="FtoFocus" :class="FisFocus ? 'border-primary':''">
          <div class="card-body">
            <h4>Fare</h4><br>
            <table id="tabletran" class="table">
              <colgroup>
                <col style="width: 5%">
                <col style="width: 10%">
                <col style="width: 20%">
                <col style="width: 10%">
              </colgroup>
              <thead>
                <tr>
                  <th scope="col">No.</th>
                  <th scope="col">Distance</th>
                  <th scope="col">Fare</th>
                  <th scope="col">Edit</th>
                </tr>
              </thead>
              <tbody v-for="(fare, index) in details.fares" :key="fare">
                <tr>
                  <th scope="row">{{index + 1}}</th>
                  <th>
                    <div class="col input-group mb-3">
                      <input type="number" min="0" max="100" class="form-control bg-light" v-model="fare.distance" @input="Distance[index]">
                      <div class="input-group-append">
                        <span class="input-group-text">Km.</span>
                      </div>
                    </div>
                  </th>
                  <th>
                    <div class="col input-group mb-3">
                      <input type="number" class="form-control bg-light" v-model="fare.fare" @input="Fare[index]">
                      <div class="input-group-append">
                        <span class="input-group-text">Baht</span>
                      </div>
                    </div>
                  </th>
                  <th>
                    <button class="btn btn-warning">
                      <i class="fas fa-edit"></i>
                      <p hidden>{{ getFareData(index) }}</p> 
                    </button>
                  </th>
                </tr>
              </tbody>
            </table>
          </div>
          <button class="btn btn-info" @click="addPrice">Add row</button>
        </div>
      </div>
    </div>
    <br/>
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
            <h5 class="modal-title" id="deleteModalLabel">Are you sure?</h5>
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
            <p>Do you want to delete this van : <span>{{details.van_no}} ( {{details.starting_point}}-{{details.destination_point}} )</span></p>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
            <router-link to="/transport/van">
              <button
                id="btnreset"
                type="reset"
                class="btn btn-danger"
                @click="deleteRoutes(details._id)"
              >
                Delete
              </button>
            </router-link>
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
      Save
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
            <router-link to="/transport/van">
              <button
                id="btncrete"
                type="submit"
                class="btn btn-success"
                @click="updateRoutes(details._id)"
              >
                Save Changes
              </button>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import { ref } from "vue";
// import { mapActions } from "vuex";
import axios from "axios";
export default {
  name: "App",
  data() {
    return {
      id: this.$route.params.id,
      details: {
        van_no: "",
        starting_point: "",
        destination_point: "",
        stations: [],
        fares:[],
      },
      tempVan: [],
      getStations: [],
      number: '',
      numPrice: '',
      Distance: [],
      Fare: [],
      search: [],
      selectSearchStationName: [],
      searchResultNum: 0,

      searchTwo:[],
      selectSearchStationNameTwo:[],
      searchResultNumTwo:0
    };
  },
  async mounted() {
    const response = await axios.get("api/Vanroutes/" + this.id);
    this.details = response.data;
    const supportRes = await axios.get("api/Vanroutes/" + this.id);
    this.tempVan = supportRes.data;
    console.log(supportRes.data)
    const getRes = await axios.get("api/stations/")
    this.getStations = getRes.data;
  },
  methods: {
    removeAllstation() {
      this.details.stations = []
      return this.details.stations
    },
    removeItem(index) {
      this.search.splice(index, 1);
      return this.details.stations.splice(index, 1);
    },
    removeItemTwo(index) {
      this.searchTwo.splice(index);
      return this.details.stations.splice(index, 1);
    },
    async updateRoutes(vanID) {
      let newdata = {
        van_no: this.details.van_no,
        starting_point: this.details.starting_point,
        destination_point: this.details.destination_point,
        stations: this.details.stations,
        fares: this.details.fares
      };
        const response = await axios.put("api/Vanroutes/" + vanID, newdata);
        this.newdata = response.data;
        // console.log(response.data);
        location.reload();
    },
    async deleteRoutes(vanID) {
      const res = await axios.delete("api/Vanroutes/" + vanID);
      console.log(res);
      location.reload();
    },
    addNum() {
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
      let tempStation = this.getStations
      if (this.searchTwo[index] != '' && this.searchTwo[index]) {
        console.log(index)
            tempStation = tempStation.filter((item) => {
              return item.station_no.includes(this.searchTwo[index])
            })
            
            if(tempStation[0] == undefined){
              this.searchResultNumTwo = 0
              return null
            }
              let buffArray = []
              tempStation.map((station) => {
                buffArray.push(station)
              })
            // this.details.stations[index] = tempStation[0]
            this.selectSearchStationNameTwo[index] = buffArray
            this.searchResultNumTwo = tempStation.length
          } else {
            this.searchResultNumTwo = 0
            return null
          }
        return this.selectSearchStationNameTwo[index][0].station_name
    },

    getResultNum() {
      return this.searchResultNum.toString()
    },
    getResultNumtwo() {
      return this.searchResultNumTwo.toString()
    },
    getFareData(index) {
      if (this.Distance[index] != '' && this.Fare[index] != '' 
          && this.Distance[index] && this.Fare[index]) {
        let getFare = { 
          distance: this.Distance[index],
          fare: this.Fare[index]
        }
        this.details.fares[index] = getFare
        console.log(this.details.fares)
      }
      return this.details.fares[index]
    }
  },
};
</script>

<style lang="scss" scoped>
#app {
  margin: auto;
  margin-top: 3rem;
  max-width: 700px;
}
.icon {
  cursor: pointer;
}
#inputword {
  width: 70%;
}
#inputtrainword {
  width: 70%;
}
.wordtrain {
  width: 70%;
}
.texttitle {
  color: rgb(0, 0, 0);
  font-weight: bolder;
  width: 180px;
  line-height: 3rem;
}
.form-control {
    width: 300px;
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