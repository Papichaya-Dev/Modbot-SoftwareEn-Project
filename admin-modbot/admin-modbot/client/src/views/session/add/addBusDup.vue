<template>
  <div id="app">
    <div class="container">
      <h2 id="texttopic" class="subtitle has-text-centered">
        <i class="fas fa-copy"></i> Duplicate Bus Details
      </h2>
      <hr />
      <br />
      <div class="field has-addons">
        <div id="inputword" class="input-group mb-3">
            <table>
              <tr>
                    <th class="texttitle text-left">Bus Number</th>
                    <td>
                        <input
                          type="text"
                          class="form-control"
                          placeholder=""
                          aria-label="insert word"
                          v-model="details.bus_no"
                          aria-describedby="basic-addon1"
                        />
                    </td>
                </tr>
                <tr>
                    <th class="texttitle text-left">Color</th>
                    <td>
                        <input
                            type="text"
                            class="form-control"
                            placeholder=""
                            aria-label="insert word"
                            aria-describedby="basic-addon2"
                            min="1" max="30"
                            v-model="details.color"
                        />
                    </td>
                </tr>
                <tr>
                    <th class="texttitle text-left" for="inputGroupSelect01">Way</th>
                    <td>
                        <select class="custom-select" id="inputGroupSelect01" v-model="details.way">
                          <option selected>Choose</option>
                          <option value="normal">Normal (เส้นทางธรรมดา)</option>
                          <option value="express">Express way (ทางด่วน)</option>
                          <option value="special">Special Express (ทางด่วนพิเศษ)</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <th class="texttitle text-left"></th>
                    <td>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="radio_air" id="exampleRadios1" value="air-conditioner" v-model="details.aircon">
                            <label class="form-check-label" for="exampleRadios1">
                                Air-conditioner
                            </label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="radio_air" id="exampleRadios2" value="non air-conditioner" v-model="details.aircon">
                            <label class="form-check-label" for="exampleRadios2">
                                Non Air-conditioner
                            </label>
                        </div>
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
                            type="number"
                            class="form-control"
                            placeholder=""
                            aria-label="insert word"
                            aria-describedby="basic-addon2"
                            min="1" max="30"
                            v-model.number="number"
                        />
                    </td>
                </tr> -->
                <tr>
                    <th class="texttitle text-left"></th>
                    <td>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="one-way" v-model="details.type">
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
                <!-- <tr>
                  <th class="texttitle text-left">Add Station Number</th>
                    <td>
                        <input type="text" class="form-control bg-light" v-model="search">
                        <div class="col" v-for="(e, i) in searchResult" :key="i._id">
                            <input type="text" readonly class="form-control-plaintext bg-light" v-model="e.station_name">
                        </div>
                        <button type="submit" @click="addItem">add</button>
                    </td>
                </tr> -->
            </table>
          <div></div>
        </div> 
        <div class="card" @click="StoFocus" :class="SisFocus ? 'border-primary':''">
            <div class="card-body">
              <h4>Station</h4><br>
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
                            <th scope="col">Station Number</th>
                            <th scope="col">Station Name</th>
                            <th scope="col">Result</th>
                            <th scope="col">Edit</th>
                        </tr>
                    </thead>
                    <tbody v-for="(station, index) in details.stations" :key="station">
                      <tr v-if="index <= details.stations.length">
                        <th scope="row"><input type="text" class="form-control bg-light text-center" :placeholder="index+1" readonly></th>
                        <th>
                          <input type="text" class="form-control bg-light" v-model="search[index]" :placeholder="station.station_no" :v-if="search[index] != 0 ? placeholder='station.station_no' : ''" >
                        </th>
                        <th>
                          <input type="text" class="form-control bg-light" v-model="station.station_name" :placeholder="searchResult(index)" disabled>
                          <!-- <select class="custom-select mdb-select md-form mx-sm-3 bg-light" searchable="Search here.." data-live-search="true" disabled>
                            <option  >{{ searchResult(index) }}</option>
                          </select> -->
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
                        <th scope="row"><input type="text" class="form-control bg-light text-center" :placeholder="index + 1 + details.stations.length" readonly></th>
                        <th>
                          <input type="text" class="form-control bg-light" v-model="search[index + details.stations.length]" placeholder="">
                        </th>
                        <th>
                          
                          <select class="custom-select mdb-select md-form mx-sm-3 bg-light" searchable="Search here.." data-live-search="true" disabled>
                            <option  >{{ searchResult(index + details.stations.length) }}</option>
                          </select>
                        </th>
                        <th class="text-center mx-sm-3">
                          <p v-if="searchResult !== null">{{ getResultNum() }}</p>
                        </th>
                        <th>
                          <button class="btn btn-danger" @click="removeItem(index + details.stations.length)">
                            <i class="fas fa-eraser"></i>
                          </button>
                        </th>
                      </tr>
                    </tbody>
                </table>
            </div>
            <div class="btn-group">
              <button class="btn btn-danger" @click="removeAllstation">Remove All</button>
              <button class="btn btn-info btn-inline" @click="addNum(index)">Add row</button>
            </div>
        </div>
        <div class="card" @click="FtoFocus" :class="FisFocus ? 'border-primary':''">
            <div class="card-body">
              <h4>Fare</h4><br>
                <table id="tabletran" class="table">
                    <colgroup>
                        <col style="width: 10%" />
                        <col style="width: 40%" />
                        <col style="width: 40%" />
                        <col style="width: 10%" />
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
                        <th scope="row"><input type="text" class="form-control bg-light text-center" :placeholder="index+1" readonly></th>
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
            <router-link to="/transport/bus">
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
        bus_no: "",
        color: "",
        way: "",
        aircon: "",
        starting_point: "",
        destination_point: "",
        type: "",
        stations: [],
        fares: [],
      },
      getStations: [],
      number: 1,
      numPrice: 1,
      Distance: [],
      Fare: [],
      search: [],
      selectSearchStationName: [],
      searchResultNum: 0
    };
  },
  async mounted() {
    const response = await axios.get("api/busroutes/" + this.id);
    this.details = response.data;

    const getRes = await axios.get("api/stations/")
    this.getStations = getRes.data;
    // console.log(this.getStations)
  },
  methods: {
    // update(index) {
    //   this.search[index] = event.target.value
    //   console.log(this.search[index])
    // },
    async updateParamtoAPI() {
      let newdata = {
        bus_no: this.details.bus_no,
        color: this.details.color,
        way: this.details.way,
        aircon: this.details.aircon,
        starting_point: this.details.starting_point,
        destination_point: this.details.destination_point,
        type: this.details.type,
        stations: this.details.stations,
        fares: this.details.fares
      };
        const response = await axios.put("api/Busroutes/" + this.id, newdata);
        this.newdata = response.data;
        // console.log(response.data);
        location.reload();
    },
    async deleteBtn() {
      const res = await axios.delete("api/Busroutes/" + this.id);
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
            tempStation = tempStation.filter((item) => {
              console.log(this.search[index])
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
            console.log(this.details.stations)
            
            this.selectSearchStationName[index] = buffArray
            this.searchResultNum = tempStation.length

          } else {
            this.searchResultNum = 0
            return null
          }
          
        // เพื่อเอาไปใส่ option 
        // if(this.selectSearchStationName[index].length > 1){
        //   return this.selectSearchStationName[index]
        // } else {
        //   return this.selectSearchStationName[index][0]
        // }
        return this.selectSearchStationName[index][0].station_name
    },
    getResultNum() {
      return this.searchResultNum.toString()
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
