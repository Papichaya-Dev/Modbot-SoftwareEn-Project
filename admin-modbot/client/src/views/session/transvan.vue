<template>
  <div class="res">
    <table>
      <tr>
        <th><h2>Van Routes</h2></th>
        <th>
          <button type="button" class="btn btn-outline-warning">
            <router-link to="/transport/addVan" class="btn">
              <i class="fas fa-plus-circle fa-lg"></i>&nbsp;New
            </router-link>
          </button>
        </th>
      </tr>
      <colgroup>
        <col style="width: 90%">
        <col style="width: 10%">
      </colgroup>
    </table>
    <form id="btnbusnum" class="form-inline">
      <input
        id="searchbtn"
        class="form-control my-1 mr-sm-2"
        type="text"
        placeholder="Search"
        aria-label="Search"
        v-model="search"
      >
      <label class="my-1 mr-2" for="inlineFormCustomSelectPref"> By </label>
      <select
        class="custom-select my-1 mr-sm-2"
        id="inlineFormCustomSelectPref"
      >
        <option selected>Lastest</option>
        <option value="1">Van No.</option>
        <option value="2">Type</option>
        <option value="3">Start point</option>
        <option value="3">Des. point</option>
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
    <div class="table-responsive">
      <table id="tabletran" class="table table-striped align-middle">
        <colgroup>
          <col style="width: 20%">
          <col style="width: 35%">
          <col style="width: 35%">
          <col style="width: 10%">
          <col style="width: 10%">
        </colgroup>
        <thead class="thead-dark">
          <tr>
            <th scope="col">Van No.</th>
            <th scope="col">Start</th>
            <th scope="col">Destination</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="detail in details" :key="detail._id">
            <th scope="row">{{ detail.van_no }}</th>
            <td>{{ detail.starting_point }}</td>
            <td>{{ detail.destination_point }}</td>
            <td>
              <router-link :to="{ path: '/transport/editVan/' + detail._id }">
                <button type="button" class="btn btn-warning btn-md">
                  <i class="fas fa-edit"></i>
                </button>
              </router-link>
            </td>
            <td>
              <button
                type="button" 
                class="btn btn-outline-danger"
                data-toggle="modal"
                data-target="#deleteModal"
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
                    <!-- <div class="modal-body">
                      <p>Do you want to delete this bus : <span>{{detail.van_no}} ( {{detail.starting_point}}-{{detail.destination_point}} )</span></p>
                    </div> -->
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
                          @click="deleteRoutes(detail._id)"
                        >
                          Delete
                        </button>
                      </router-link>
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
    </div>
    
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
  name: "Van",
  created() {
    document.title = "ModBot | " + this.$options.name;
  },
  data() {
    return {
      details: {
        van_no: "",
        starting_point: "",
        destination_point: "",
      },
    };
  },
  async mounted() {
    const response = await axios.get("api/Vanroutes/", {
      van_no: this.details.van_no,
      starting_point: this.details.starting_point,
      destination_point: this.details.destination_point,
    });
    this.details = response.data;
    console.log(this.details);
  },
  methods: {
    async deleteRoutes(vanID) {
      const res = await axios.delete("api/Vanroutes/" + vanID);
      console.log(res);
      location.reload();
    }
  },
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