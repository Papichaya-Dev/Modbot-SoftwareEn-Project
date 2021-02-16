<template>
  <div id="app">
    <!-- <button id="btn" type="button" class="btn btn-outline-primary">
            <router-link to="/chat/trainbot" class="btn"
              ><i class="fas fa-caret-left fa-lg"></i>&nbsp;BACK</router-link
            >
    </button> -->
    <div class="container">
      <h2 id="texttopic" class="subtitle has-text-centered">
        Create Bus route
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
                <tr>
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
                </tr>
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
        <table id="tabletran" class="table">
            <colgroup>
                <col style="width: 10%" />
                <col style="width: 30%" />
                <col style="width: 20%" />
                <col style="width: 20%" />
                <col style="width: 10%" />
            </colgroup>
            <thead>
                <tr>
                <th scope="col">No.</th>
                <th scope="col">Bus Stop No.</th>
                <th scope="col">Bus Stop Name</th>
                <th scope="col">Edit</th>
                </tr>
            </thead>
            <tbody>
                
            </tbody>
        </table>
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
            <router-link to="/transport/bus">
              <button
                id="btncrete"
                type="submit"
                class="btn btn-success"
                @click="saveItem"
              >
                Save Changes
              </button></router-link
            >
          </div>
        </div>
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
            bus_no: "",
            starting_point: "",
            destination_point: "",
            type: "",
            stations_no: [],
            items:[]
        }
    };
  },
  async mounted() {
    const response = await axios.get("api/busroutes/" + this.id, {
      bus_no: this.details.bus_no,
      starting_point: this.details.starting_point,
      destination_point: this.details.destination_point,
      type: this.details.type,
      stations_no: this.details.stations_no
    });
    this.details = response.data;
    console.log(this.details.station_name);
  },
  methods: {
    async saveItem() {
      let newdata = {
        bus_no: this.details.bus_no,
        starting_point: this.details.starting_point,
        destination_point: this.details.destination_point,
        type: this.details.type,
        stations_no: this.details.stations_no
      };
      const response = await axios.post("api/busroutes/" + this._id, newdata);
      this.newdata = response.data;
      location.reload();
      const res = await axios.delete("api/busroutes/" + this.id);
      console.log(res);
      location.reload();
    },
    async deleteBtn() {
      const res = await axios.delete("api/busroutes/" + this.id);
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
