<template>
  <div class="res">
    <table>
      <tr>
        <th><h2>Bus route for Check bus stop</h2></th>
        <th>
          <button type="button" class="btn btn-outline-warning">
            <router-link to="/dashboard/addBusdata" class="btn"
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
        <option value="1">Parameter</option>
        <option value="2">Word</option>
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
        <col style="width: 15%" />
        <col style="width: 15%" />
        <col style="width: 15%" />
        <col style="width: 15%" />
        <col style="width: 10%" />
        <col style="width: 15%" />
        <col style="width: 50%" />
      </colgroup>
      <thead class="thead-dark">
        <tr>
          <th scope="col">Bus no.</th>
          <th scope="col">Startingpoint</th>
          <th scope="col">Destination</th>
          <th scope="col">Color</th>
          <th scope="col">Bus type</th>
          <th scope="col">Running type</th>
          <th scope="col">Edit</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(detail) in details" :key="detail._id">
         
          <th scope="row">{{ detail.bus_no }}</th>
           <th scope="row">{{ detail.startingpoint }}</th>
            <th scope="row">{{ detail.destination }}</th>
            <th scope="row">{{ detail.color }}</th>
            <th scope="row">{{ detail.bus_type }}</th>
            <th scope="row">{{ detail.running_type }}</th>
           <!-- <td>
            <div v-for="(bus_stop, index) in detail.bus_stop" :key="bus_stop._id">
              <p v-if="index <= 4">{{ bus_stop.bus_stop_name }}</p>
            </div>
          </td>  
          <td>
            <div v-for="(item, index) in detail.items" :key="item._id">
              <p v-if="index <= 4">{{ item }}</p>
            </div>
          </td>
          <td >
            <div v-for="(bus_stop, index) in detail.bus_stop" :key="bus_stop._id">
              <p v-if="index <= 4">{{ bus_stop.longitude }}</p>
            </div>
          </td>  
           <td>
            <div v-for="(bus_stop, index) in detail.bus_stop" :key="bus_stop._id">
              <p v-if="index <= 4">{{ bus_stop.latitude }}</p>
            </div>
           </td>  -->
          <td>
            <router-link :to="{ path: '/dashboard/editBusdata/' + detail._id }"
              ><button class="btn btn-warning">
                <i class="fas fa-edit"></i></button
            ></router-link>
          </td>
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
  name: "Training",
  created() {
    document.title = "ModBot | " + this.$options.name;
  },
  data() {
    return {
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
        type:""
      },
    };
  },
  async mounted() {
    const response = await axios.get("api/Busdata/", {
      bus_no: this.bus_no,
      startingponit: this.startingponit,
      destination: this.destination,
      color: this.color,
      bus_type: this.bus_type,
      running_type: this.running_type,
      bus_stop: this.bus_stop,
      bus_stop_name: this.bus_stop_name,
      latitude: this.latitude,
      longitude: this.longitude,
      type:""
    });
    this.details = response.data;
    console.log(this.details);
  },
  methods: {
    async deleteItem() {
      var id = event.target.getAttribute("data-id");
      console.log(id);
      const response = await axios.delete("api/Busdata/" + id);
      console.log(response.data);
      alert("Deleted! : " + response.data.bus_no)
      location.reload();
    },
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
