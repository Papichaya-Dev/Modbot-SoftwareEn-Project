<template>
  <div id="app">
    <div class="container">
      <h2 id="texttopic" class="subtitle has-text-centered">
        Create Van route
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
                  v-model="van_no"
                  aria-describedby="basic-addon1"
                >
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
                  v-model="starting_point"
                  aria-describedby="basic-addon2"
                >
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
                  v-model="destination_point"
                  aria-describedby="basic-addon2"
                >
              </td>
            </tr>
            <tr>
              <th class="texttitle text-left"></th>
              <td>
                <div class="form-check form-check-inline">
                  <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="one-way" v-model="type">
                  <label class="form-check-label" for="exampleRadios1">
                      One-way
                  </label>
                </div>
                <div class="form-check form-check-inline">
                  <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="return" v-model="type">
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
            <table id="tabletran" class="table text-center">
              <colgroup>
                <col style="width: 8%">
                <col style="width: 35%">
                <col style="width: 35%">
                <col style="width: 5%">
              </colgroup>
              <thead>
                <tr>
                  <th scope="col">No.</th>
                  <th scope="col">Station No.</th>
                  <th scope="col">Station Name</th>
                  <th scope="col">Remove</th>
                </tr>
              </thead>
              <tbody v-for="(num, index) in number" :key="num">
                <tr>   
                  <!-- v-for="(station, i) in stations" :key="station._id"  {{ e.station_no }}-->
                  <!-- <th scope="row"><input type="text" class="form-control bg-light text-center" :placeholder="num">{{index+1}}</th> -->
                  <th scope="row">{{index + 1}}</th>
                  <th>
                    <input 
                      type="text" 
                      class="form-control bg-light" 
                      v-model="search[index]"
                    >
                  </th>
                  <th>
                    <select class="custom-select mdb-select md-form mx-sm-3 bg-light" searchable="Search here.." data-live-search="true" disabled>
                      <option>{{ searchResult(index) }}</option>
                    </select>
                  </th>
                  <!-- <th class="text-center mx-sm-3">
                    <p v-if="searchResult !== null">{{ getResultNum() }}</p>
                  </th> -->
                  <th>
                    <button class="btn btn-outline-danger" @click="removeItem(index)">
                      <i class="fas fa-eraser"></i>
                    </button>
                  </th>
                </tr>
              </tbody>
            </table>
          </div>
          <button class="btn btn-info" @click="addNum">Add row</button>
        </div>
        <div class="card" @click="FtoFocus" :class="FisFocus ? 'border-primary':''">
          <div class="card-body">
            <h4>Fare</h4><br>
            <table id="tabletran" class="table">
              <colgroup width="100">
                <col style="width: 10%">
                <col style="width: 20%">
                <col style="width: 40%">
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
              <tbody v-for="(num, index) in numPrice" :key="num">
                <tr>
                  <th scope="row">{{index + 1}}</th>
                  <th scope="row">
                    <div class="col input-group mb-3">
                      <input 
                        type="number" 
                        min="0" 
                        max="100" 
                        class="form-control bg-light" 
                        v-model="Distance[index]"
                      >
                      <div class="input-group-append">
                        <span class="input-group-text">Km.</span>
                      </div>
                    </div>
                  </th>
                  <th>
                    <div class="col input-group mb-3">
                      <input 
                        type="number" 
                        class="form-control bg-light" 
                        v-model="Fare[index]"
                      >
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
            <router-link to="/transport/van">
              <button
                id="btncreate"
                type="submit"
                class="btn btn-success"
                @click="createRoutes"
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
      van_no: "",
      starting_point: "",
      destination_point: "",
      stations: [],
      getStations: [],
      number: 1,
      numPrice: 1,
      Fares: [],
      Distance: [],
      Fare: [],
      search: [],
      selectSearchStationName: [],
      searchResultNum: 0,
      startIndex : 0,
			endIndex : 100,
    };
  },
  async mounted() {
    const Data = {
      _id: this.getStations._id,
      station_no: this.getStations.station_no,
      station_name: this.getStations.station_name
    }; 
    const response = await axios.get("api/Vanroutes/", Data);
    this.Data = response.data;
    const getRes = await axios.get("api/stations/", )
    this.getStations = getRes.data;
  },
  methods: {
    async createRoutes() {
      let newdata = {
        van_no: this.van_no,
        starting_point: this.starting_point,
        destination_point: this.destination_point,
        stations: this.stations,
        fares: this.Fares
      };
        const response = await axios.post("api/Vanroutes/", newdata);
        this.newdata = response.data;
        // console.log(newdata);
        location.reload();
    },
    addNum() {
      this.number = this.number + 1;
    },
    addPrice() {
      this.numPrice = this.numPrice + 1;
    },
    addItem() {
      console.log(this.searchResult[0])
      this.items = this.searchResult[0]
    },
    StoFocus() {
      this.SisFocus = true;
      this.FisFocus = false;
    },
    FtoFocus() {
      this.SisFocus = false;
      this.FisFocus = true;
    },
    searchResult(index) {
      let tempStation = this.getStations
      if (this.search[index] != '' && this.search[index]) {
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
          
        this.stations[index] = tempStation[0]
        this.selectSearchStationName[index] = buffArray
        this.searchResultNum = tempStation.length
      } else {
        this.searchResultNum = 0
        return null
      }
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
        this.Fares[index] = getFare
        console.log(this.Fares)
      }
      return this.Fares[index]
    },
    removeItem(index) {
      this.search.splice(index, 1);
      return this.stations.splice(index, 1);
    },
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