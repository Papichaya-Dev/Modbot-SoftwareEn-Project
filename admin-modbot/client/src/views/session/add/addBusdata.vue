<template>
  <div id="app">
    <div class="container">
      <h2 id="texttopic" class="subtitle has-text-centered">
        Create Bus stop
      </h2>
      <hr />
      <br />

      <div class="field has-addons">
        <div id="inputword" class="input-group mb-3">
          <div class="texttitle">Bus.no</div>
          <input
            type="text"
            class="form-control"
            placeholder="insert bus.no"
            aria-label="insert word"
            v-model="bus_no"
            aria-describedby="basic-addon2"
          />
        </div>
        <div id="inputword" class="input-group mb-3">
          <div class="texttitle">Startingpoint</div>
          <input
            type="text"
            class="form-control"
            placeholder="insert startingpoint"
            aria-label="insert word"
            v-model="startingpoint"
            aria-describedby="basic-addon2"
          />
        </div>
        <div id="inputword" class="input-group mb-3">
             <div class="texttitle">Destination</div>
          <div class="texttitle">Destination</div>
          <input
            type="text"
            class="form-control"
            placeholder="insert Destination"
            aria-label="insert word"
            v-model="destination"
            aria-describedby="basic-addon2"
          />
        </div>
        <div id="inputword" class="input-group mb-3">
             <div class="texttitle">Color</div>
          <input
            type="text"
            class="form-control"
            placeholder="insert bus color"
            aria-label="insert word"
            v-model="color"
            aria-describedby="basic-addon2"
          />
        </div>
        <tr>
                    <th class="texttitle text-left"></th>
                    <td>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="one-way" v-model="running_type">
                            <label class="form-check-label" for="exampleRadios1">
                                One-way
                            </label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="return" v-model="running_type">
                            <label class="form-check-label" for="exampleRadios2">
                                Return
                            </label>
                        </div>
                    </td>
                </tr>
                <tr>
                    <th class="texttitle text-left"></th>
                    <td>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="exampleRadios2" id="exampleRadios1" value="รถธรรมดา" v-model="bus_type">
                            <label class="form-check-label" for="exampleRadios1">
                                รถธรรมดา
                            </label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="exampleRadios2" id="exampleRadios2" value="รถปรับอากาศ" v-model="bus_type">
                            <label class="form-check-label" for="exampleRadios1">
                                รถปรับอากาศ
                            </label>
                        </div>
                    </td>
                </tr>
        <br/>
        <div id="inputword" class="input-group mb-3">
             <div class="texttitle">Bus stop</div>
          <input
            type="text"
            class="form-control"
            placeholder="insert bus_stop_name"
            aria-label="insert word"
            v-model="bus_stop_name"
            aria-describedby="basic-addon2"
          />
        </div>
         <div id="inputword" class="input-group mb-3">
             <div class="texttitle">How to go</div>
          <input
            type="text"
            class="form-control"
            placeholder="insert How to go"
            aria-label="insert word"
            v-model="how_to_go"
            aria-describedby="basic-addon2"
          />
        </div>
        <div id="inputword" class="input-group mb-3">
             <div class="texttitle">Latitude</div>
          <input
            type="text"
            class="form-control"
            placeholder="insert latitude"
            aria-label="insert word"
            v-model="latitude"
            aria-describedby="basic-addon2"
          />
        </div>
        <div id="inputword" class="input-group mb-3">
             <div class="texttitle">Longitude</div>
          <input
            type="text"
            class="form-control"
            placeholder="insert longitude"
            aria-label="insert word"
            v-model="longitude"
            aria-describedby="basic-addon2"
          />
        </div>
      </div>
    </div>
    <br />
    <div class="wordtrain" v-for="(item, i) in bus_stop" :key="item._id">
      <div class="list-group-item">
        <p class="column">
          <span class="tag is-primary"></span>
          {{ item }}
        </p>
        <div class="edit">
          <button
            id="btndelete"
            class="btn btn-danger"
            @click="removeItem(item, i)"
          >
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
            <router-link to="/dashboard/user">
            <button
              id="btncrete"
              type="submit"
              class="btn btn-success"
              @click="addParamtoAPI"
            >
              Create
            </button></router-link>
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
      bus_no: "",
      startingpoint:"",
      destination:"",
      color:"",
      bus_type:"",
      running_type:"",
      how_to_go:"",
      bus_stop: [],
      bus_stop_name: "",
      latitude: "",
      longitude:"",
    };
  },
  async mounted() {
    let newdata = {
      bus_no: this.bus_no,
      startingpoint: this.startingpoint,
      destination: this.destination,
      color: this.color,
      bus_type: this.bus_type,
      running_type: this.running_type,
      how_to_go: this.how_to_go,
      bus_stop: this.bus_stop,
      bus_stop_name: this.bus_stop_name,
      latitude: this.latitude,
      longitude: this.longtitude
    };
    const response = await axios.get("api/Busdata/", newdata);
    this.newdata = response.data;
    console.log(newdata);
  },
  methods: {
    async addItem() {
      this.bus_stop.push(this.bus_stop_name);
      console.log(this.bus_stop);
      this.bus_stop_name = "";
    },
    async addParamtoAPI() {
      let newdata = {
        bus_no: this.bus_no,
        startingpoint: this.startingpoint,
        destination: this.destination,
        color: this.color,
        bus_type: this.bus_type,
        running_type: this.running_type,
        how_to_go: this.how_to_go,
        // bus_stop: [{bus_stop_name: this.bus_stop_name}],
        bus_stop_name : this.bus_stop_name,
        latitude: this.latitude,
        longitude: this.longitude
      };
      const response = await axios.post("api/Busdata/", newdata);
      this.newdata = response.data;
      console.log(newdata);
      location.reload();
    },
    async removeItem(item, i) {
      console.log(item);
      this.items.splice(i, 1);
    },
    async resetItem() {
      this.items = "";
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
  width: 480px;
}
#inputtrainword {
  width: 450px;
}
.wordtrain {
  width: 450px;
}
.texttitle {
  color: rgb(0, 0, 0);
  margin-left: -100px;
  font-weight: bolder;
  width: 100px;
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