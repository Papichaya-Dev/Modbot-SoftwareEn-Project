<template>
  <div class="res">
    <table>
      <tr>
        <th><h2>Station</h2></th>
        <th>
          <button type="button" class="btn btn-outline-warning">
            <router-link to="/locations/addStation" class="btn"
              ><i class="fas fa-plus-circle fa-lg"></i>&nbsp;New</router-link
            >
          </button>
        </th>
      </tr>
      <colgroup>
        <col style="width: 90%" />
        <col style="width: 10%" />
      </colgroup>
    </table>
          
      <!-- <form class="form-inline">
        <div class="form-group">
          <label for="files">Upload a CSV formatted file:</label>
          <input type="file" id="files"  class="form-control" accept=".csv" required />
        </div>
        <div class="form-group">
        <button type="submit" id="submit-file" class="btn btn-primary">Upload File</button>
        </div>
      </form> -->
    <form id="btnbusnum" class="form-inline">
      <input
        id="searchbtn"
        class="form-control my-1 mr-sm-2"
        type="text"
        placeholder="Search"
        aria-label="Search"
        v-model="search"
      />
      <label class="my-1 mr-2" for="inlineFormCustomSelectPref"> By </label>
      <select
        class="custom-select my-1 mr-sm-2"
        id="inlineFormCustomSelectPref"
      >
        <option selected>Lastest</option>
        <option value="1">Station No.</option>
        <option value="2">Station Name</option>
      </select>
    </form>

    <div id="select" class="showNum text-left">
      Show
      <div class="btn-group">
        <button
          type="button"
          class="btn btn-success dropdown-toggle"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          5
        </button>
        <div class="dropdown-menu">
          <a class="dropdown-item" href="#">1</a>
          <a class="dropdown-item" href="#">2</a>
          <a class="dropdown-item" href="#">3</a>
          <a class="dropdown-item" href="#">4</a>
          <div class="dropdown-divider"></div>
        </div>
      </div>
      entries
    </div>
    {{ id }}
    <table id="tabletran" class="table">
      <colgroup>
        <col style="width: 10%" />
        <col style="width: 30%" />
        <col style="width: 20%" />
        <col style="width: 20%" />
        <col style="width: 10%" />
      </colgroup>
      <thead class="thead-dark">
        <tr>
          <th scope="col">Station No.</th>
          <th scope="col">Station Name</th>
          <th scope="col">Latitude</th>
          <th scope="col">Longitude</th>
          <th scope="col">Edit</th>
          <th scope="col">Delete</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="detail in details" :key="detail._id">
          <th scope="row">{{ detail.station_no}}</th>
          <td>{{ detail.station_name }}</td>
          <td>{{ detail.latitude }}</td>
          <td>{{ detail.longitude }}</td>
          <td>
            <router-link :to="{ path: '/locations/editStation/' + detail._id }"
              ><button class="btn btn-warning">
                <i class="fas fa-edit"></i></button
            ></router-link>
          </td>
          <td>
            <button
              type="button"
              class="btn btn-danger"
              data-toggle="modal"
              data-target="#deleteModal"
              @click="sendInfo(detail)"
            >
              <i class="fas fa-trash"></i>
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
                    <h5 class="modal-title" id="deleteModalLabel">Delete</h5>
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
                    <p>Do you want to delete this station name : <span>{{selectedStation.station_name}}</span> ?</p>
                  </div>
                  <div class="modal-footer">
                    <button
                      type="button"
                      class="btn btn-secondary"
                      data-dismiss="modal"
                    >
                      Close
                    </button>
                    <router-link to="/locations/station">
                      <button
                        id="btnreset"
                        type="reset"
                        class="btn btn-danger"
                        @click="deleteBtn(selectedStation._id)">
                        Delete
                      </button></router-link
                    >
                  </div>
                </div>
              </div>
            </div>
          </td>
          <!-- <td>
            <router-link to="/chat/trainbot">
              <button
                class="btn btn-danger"
                @click="deleteItem(detail._id)"
                :data-id="detail._id"
                data-dismiss="modal"
              >
                <i class="fas fa-trash-alt"></i></button
            ></router-link>
          </td> -->
        </tr>
      </tbody>
    </table>
    <nav id="navtran" aria-label="Page navigation example">
      <ul class="pagination">
        <li class="page-item"><a class="page-link" href="#">Previous</a></li>
        <li class="page-item"><a class="page-link" href="#">1 </a></li>
        <li class="page-item"><a class="page-link" href="#">2</a></li>
        <li class="page-item"><a class="page-link" href="#">3</a></li>
        <li class="page-item"><a class="page-link" href="#">Next</a></li>
      </ul>
    </nav>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Station Table",
  created() {
    document.title = "ModBot | " + this.$options.name;
  },
  data() {
    return {
      details: {
        station_no: "",
        station_name: "",
        latitude: "",
        longitude: ""
      },
      selectedStation: ""
    };
  },
  async mounted() {
    const response = await axios.get("api/stations/", {
      station_no: this.station_no,
      station_name: this.station_name,
      latitude: this.latitude,
      longitude: this.longitude
    });
    this.details = response.data;
    console.log(this.details);
  },
  methods: {
    async deleteBtn(selectedStation) {
      console.log(selectedStation)
      const res = await axios.delete("api/stations/"+ selectedStation);
      console.log(res);
      location.reload();
    },
    sendInfo(info) {
      return this.selectedStation = info
    }
  }
  
};
</script>


<style scoped>
h2 {
  padding: 4% 2%;
  text-align: left;
}
.showNum {
  padding: 3% 2%;
}
</style>