<template>
  <div class="res">
    <table>
      <tr>
        <th><h2>Training Phase</h2></th>
        <th>
          <button type="button" class="btn btn-outline-warning">
            <router-link to="/chat/startTrain" class="btn"
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
      />
      <label class="my-1 mr-2" for="inlineFormCustomSelectPref"> By </label>
      <select
        class="custom-select my-1 mr-sm-2"
        id="inlineFormCustomSelectPref"
      >
        <option selected>Params A-Z</option>
        <option value="1">Params Z-A</option>
        <option value="2">...</option>
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
        <col style="width: 50%" />
        <col style="width: 20%" />
        <col style="width: 10%" />
        <col style="width: 10%" />
      </colgroup>
      <thead class="thead-dark">
        <tr>
          <th scope="col">Parameter</th>
          <th scope="col">Amount words</th>
          <th scope="col">Edit</th>
          <th scope="col">Delete</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="detail in details" :key="detail._id">
          <th scope="row">{{ detail.keyword }}</th>
          <td>{{ detail.items.length }}</td>
          <td><button class="btn btn-warning"><router-link :to="{ path: '/chat/editTrain/'+ detail._id }"><i class="fas fa-edit"></i></router-link></button></td>
          <td><button class="btn btn-danger"><i class="fas fa-trash-alt"></i></button></td>
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
  async mounted() {
    let details = {
      keyword: "",
      items: []
    }
    const response = await axios.get("api/Trainbotwords/", details);
    this.details = response.data;
    console.log(this.details);
    //console.log(kw.data);
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