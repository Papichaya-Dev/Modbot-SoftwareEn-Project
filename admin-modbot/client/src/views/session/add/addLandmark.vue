<template>
  <div id="app">
    <!-- <button id="btn" type="button" class="btn btn-outline-primary">
            <router-link to="/chat/trainbot" class="btn"
              ><i class="fas fa-caret-left fa-lg"></i>&nbsp;BACK</router-link
            >
    </button> -->
    <div class="container">
      <h2 id="texttopic" class="subtitle has-text-centered">
        Create Landmark detail
      </h2>
      <hr />
      <br />

      <div class="field has-addons">
        <div id="inputword" class="input-group mb-3">
            <table>
                <tr>
                    <th class="texttitle text-left">Landmark Number</th>
                    <td>
                        <input
                            type="text"
                            class="form-control"
                            placeholder=""
                            aria-label="insert word"
                            v-model="location_no"
                            aria-describedby="basic-addon2"
                        />
                    </td>
                </tr>
                <tr>
                    <th class="texttitle text-left">Landmark Name</th>
                    <td>
                        <input
                            type="text"
                            class="form-control"
                            placeholder=""
                            aria-label="insert word"
                            v-model="location_name"
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
                            v-model="latitude"
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
                            v-model="longitude"
                            aria-describedby="basic-addon2"
                        />
                    </td>
                </tr>
                <tr>
                    <th class="texttitle text-left">Area</th>
                    <td>
                        <input
                            type="text"
                            class="form-control"
                            placeholder=""
                            aria-label="insert word"
                            v-model="area"
                            aria-describedby="basic-addon2"
                        />
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
                <th scope="col">Number</th>
                <th scope="col">Station No.</th>
                <th scope="col">Station Name</th>
                <th scope="col">Edit</th>
                </tr>
            </thead>
            <tbody>
                
            </tbody>
        </table>
      </div>
    </div>
    <br />
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
            <router-link to="/locations/locationmark">
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
      location_no:"",
      location_name:"",
      latitude:"",
      longitude:"",
      area:"",
    };
  },
  async mounted() {
    let newdata = {
      location_no: this.location_no,
      location_name: this.location_name,
      latitude: this.latitude,
      longitude: this.longitude,
      area: this.area
    };
    const response = await axios.get("api/locationmarks/", newdata);
    this.newdata = response.data;
    console.log(newdata);
  },
  methods: {
    async addParamtoAPI() {
      let newdata = {
        location_no: this.location_no,
        location_name: this.location_name,
        latitude: this.latitude,
        longitude: this.longitude,
        area: this.area
      };
      const response = await axios.post("api/locationmarks/", newdata);
      this.newdata = response.data;
      console.log(newdata);
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