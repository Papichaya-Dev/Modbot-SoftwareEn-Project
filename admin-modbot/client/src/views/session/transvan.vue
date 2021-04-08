<template>
  <div class="res">
    <table>
      <tr>
        <th><h2>Van Routes</h2></th>
        <th>
          <button type="button" class="btn btn-outline-warning">
            <router-link to="/transport/addVan" class="btn"
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
    <table id="tabletran" class="table">
      <colgroup>
        <col style="width: 20%" />
        <col style="width: 20%" />
        <col style="width: 30%" />
        <col style="width: 30%" />
        <col style="width: 10%" />
      </colgroup>
      <thead class="thead-dark">
        <tr>
          <th scope="col">Van No.</th>
          <th scope="col">Type</th>
          <th scope="col">Start</th>
          <th scope="col">Destination</th>
          <th scope="col">Edit</th>
        </tr>
      </thead>
      <!-- <tbody>
        <tr v-for="detail in details" :key="detail._id">
          <th scope="row">{{ detail.keyword }}</th>
          <td>
            <div v-for="(item, index) in detail.items" :key="item._id">
              <p v-if="index <= 0">{{ item }}</p>
            </div>
          </td>
          <td></td>
          <td></td>
          <td>
            <router-link :to="{ path: '/chat/editTrain/' + detail._id }"
              ><button class="btn btn-warning">
                <i class="fas fa-edit"></i></button
            ></router-link>
          </td> -->
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
        <!-- </tr>
      </tbody> -->
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
        keyword: "",
        items: [],
      },
    };
  },
  async mounted() {
    const response = await axios.get("api/Trainbotwords/", {
      keyword: this.details.keyword,
      items: this.details.items,
    });
    this.details = response.data;
    console.log(this.details);
  },
  methods: {
    async deleteItem() {
      var id = event.target.getAttribute("data-id");
      console.log(id);
      const response = await axios.delete("api/Trainbotwords/" + id);
      console.log(response.data);
      alert("Deleted! : " + response.data.keyword)
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