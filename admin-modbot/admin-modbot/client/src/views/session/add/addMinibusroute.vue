<template>
  <div id="app">
    <div class="container">
      <h2 id="texttopic" class="subtitle has-text-centered">
        Create Mini-Bus route
      </h2>
      <hr/>
      <br/>
      <div class="field has-addons">
        <div id="inputword" class="input-group mb-3">
          <table>
            <tr>
              <th class="texttitle text-left">Mini-Bus No.</th>
              <td>
                <input
                  type="text"
                  class="form-control"
                  placeholder=""
                  aria-label="insert word"
                  v-model="minibus_no"
                  aria-describedby="basic-addon2"
                >
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
                  v-model="color"
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
                  <col style="width: 25%">
                  <col style="width: 35%">
                  <col style="width: 5%">
                </colgroup>
                <thead>
                  <tr>
                    <th scope="col">No.</th>
                    <th scope="col">Station Number</th>
                    <th scope="col">Station Name</th>
                    <th scope="col">Edit</th>
                  </tr>
                </thead>
                <tbody v-for="(num, index) in number" :key="num">
                  <tr>
                      <!-- v-for="(station, i) in stations" :key="station._id"  {{ e.station_no }}-->
                    <!-- <th scope="row"><input type="text" class="form-control bg-light text-center" :placeholder="num">{{index+1}}</th> -->
                    <th scope="row">{{index+1}}</th>
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
                    <th>
                      <button class="btn btn-warning">
                        <i class="fas fa-edit"></i>
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
                <colgroup>
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
                    <th scope="row">{{index+1}}</th>
                    <th>
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
    <br />
    <div class="wordtrain" v-for="(item, i) in items" :key="item._id">
      <div class="list-group-item">
        <p class="column">
          <span class="tag is-primary"></span>
          {{ item }}
        </p>
        <div class="edit">
          <!-- <button
            id="btnedit"
            class="btn btn-success"
            @click="isSelected(item) ? unselect() : select(item)"
          >
            <i class="material-icons">{{
              isSelected(item) ? "close" : "edit"
            }}</i>
          </button> -->
          <button
            id="btndelete"
            class="btn btn-danger"
            @click="removeItem(item, i)"
          >
            <!-- isSelected(item) ? updateItem(item, i) :  -->
            <i class="material-icons"><i class="fas fa-minus-circle"></i></i>
          </button>
        </div>
      </div>
    </div>
    <br />
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

    <!--<router-link to="/chat/trainbot"> <button
      id="btncrete"
      type="submit"
      class="btn btn-success"
      @click="addParamtoAPI"
    >
      Create
    </button></router-link> -->
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
            <router-link to="/transport/minibus">
              <button
                id="btncrete"
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
      minibus_no: "",
      color: "",
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
    const response = await axios.get("api/Minibusroutes/", Data);
    this.Data = response.data;
    const getRes = await axios.get("api/stations/", )
    this.getStations = getRes.data;
  },
  methods: {
    async createRoutes() {
      let newdata = {
        minibus_no: this.minibus_no,
        color: this.color,
        starting_point: this.starting_point,
        destination_point: this.destination_point,
        stations: this.stations,
        fares: this.Fares
      };
        const response = await axios.post("api/Minibusroutes/", newdata);
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
        this.Fares[index] = getFare
        console.log(this.Fares)
      }
      return this.Fares[index]
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
