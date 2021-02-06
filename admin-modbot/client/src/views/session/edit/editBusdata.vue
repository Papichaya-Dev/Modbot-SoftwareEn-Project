<template>
  <div id="app">
    <div class="container">
      <h2 id="texttopic" class="subtitle has-text-centered">
        Edit Bus route
      </h2>
      <hr />
      <br />

      <div class="field has-addons">
        <div id="inputword" class="input-group mb-3">
            <table>
                <tr>
                    <th id="textlocation" class="texttitle text-left">Bus no.</th>
                    <td>
                        <input
                            type="text"
                            class="form-control"
                            placeholder=""
                            aria-label="insert word"
                            v-model="details.bus_no"
                            aria-describedby="basic-addon2"
                        />
                    </td>
                </tr>
                <tr>
                    <th class="texttitle text-left">Startingpoint</th>
                    <td>
                        <input
                            type="text"
                            class="form-control"
                            placeholder=""
                            aria-label="insert word"
                            v-model="details.startingpoint"
                            aria-describedby="basic-addon2"
                        />
                    </td>
                </tr>
                <tr>
                    <th class="texttitle text-left">Destination</th>
                    <td>
                        <input
                            type="text"
                            class="form-control"
                            placeholder=""
                            aria-label="insert word"
                            v-model="details.destination"
                            aria-describedby="basic-addon2"
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
                            v-model="details.color"
                            aria-describedby="basic-addon2"
                        />
                    </td>
                </tr>
                 <tr>
                    <th class="texttitle text-left"></th>
                    <td>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="one-way" v-model="details.running_type">
                            <label class="form-check-label" for="exampleRadios1">
                                One-way
                            </label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="return" v-model="details.running_type">
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
                            <input class="form-check-input" type="radio" name="exampleRadios2" id="exampleRadios1" value="รถธรรมดา" v-model="details.bus_type">
                            <label class="form-check-label" for="exampleRadios1">
                                รถธรรมดา
                            </label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="exampleRadios2" id="exampleRadios2" value="รถปรับอากาศ" v-model="details.bus_type">
                            <label class="form-check-label" for="exampleRadios1">
                                รถปรับอากาศ
                            </label>
                        </div>
                    </td>
                </tr>
                <tr>
                    <th class="texttitle text-left">Bus stop name</th>
                    <td>
                        <input
                            type="text"
                            class="form-control"
                            placeholder=""
                            aria-label="insert word"
                            v-model="details.bus_stop_name"
                            aria-describedby="basic-addon2"
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
                            v-model="details.latitude"
                            aria-describedby="basic-addon2"
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
      </div>
    </div>
    <br />
    
    <br />
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
              @click="saveItem"
            >
              Save
            </button></router-link>
            <router-link to="/dashboard/user">
            <button
              id="btncrete"
              type="submit"
              class="btn btn-success"
              @click="addParamtoAPI"
            >
              Create bus stop
            </button></router-link>

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
        startingponit:"",
        destination:"",
        color:"",
        bus_type:"",
        running_type:"",
        bus_stop: [],
        bus_stop_name: "",
        latitude: "",
        longitude:"",

      },
    };
  },
  async mounted() {
    const response = await axios.get("api/Busdata/" + this.id, {
      bus_no: this.details.bus_no,
      startingpoint: this.details.startingpoint,
      destination: this.details.destination,
      color: this.details.color,
      bus_type: this.details.bus_type,
      running_type: this.details.running_type,
      bus_stop: this.details.bus_stop,
      bus_stop_name: this.details.bus_stop_name,
      latitude: this.details.latitude,
      longitude: this.details.longitude,
    });
    this.details = response.data;
    console.log(this.details.station_name);
  },
  methods: {
    async addItem() {
      this.details.bus_stop.push(this.details.bus_stop_name);
      console.log(this.bus_stop);
      this.details.bus_stop_name = "";
    },
    async addParamtoAPI() {
      let newdata = {
        bus_no: this.details.bus_no,
        startingpoint: this.details.startingpoint,
        destination: this.details.destination,
        color: this.details.color,
        bus_type: this.details.bus_type,
        running_type: this.details.running_type,
        bus_stop: [{bus_stop_name: this.bus_stop_name}],
        bus_stop_name : this.details.bus_stop_name,
        latitude: this.details.latitude,
        longitude: this.details.longitude
      };
      const response = await axios.post("api/Busdata/", newdata);
      this.newdata = response.data;
      console.log(newdata);
      location.reload();
    },
    async saveItem() {
      let newdata = {
        bus_no: this.details.bus_no,
        startingpoint: this.details.startingpoint,
        destination: this.details.destination,
        color: this.details.color,
        bus_type: this.details.bus_type,
        running_type: this.details.running_type,
        bus_stop: this.details.bus_stop,
        bus_stop_name: this.details.bus_stop_name,
        latitude: this.details.latitude,
        longitude: this.details.longitude,
      };
      const response = await axios.post("api/Busdata/" + this._id, newdata);
      this.newdata = response.data;
      location.reload();
      const res = await axios.delete("api/Busdata/" + this.id);
      console.log(res);
      location.reload();
    },
    async deleteBtn() {
      const res = await axios.delete("api/Busdata/" + this.id);
      console.log(res);
      location.reload();
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
#textlocation{
    margin-left: -500px;
}
</style>