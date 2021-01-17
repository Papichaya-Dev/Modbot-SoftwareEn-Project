<template>
  <div class="res">
    <table>
      <tr>
        <th><h2>Error Word Phase</h2></th>
        <th>
          <button type="button" class="btn btn-outline-warning">
            <router-link to="/chat/startRes" class="btn"
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
      <thead class="thead-dark">
        <tr>
          <th scope="col">ID user</th>
          <th scope="col">Error Word</th>
          <th scope="col">Detect Word</th>
          <th scope="col">Response Messages</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">138</th>
          <th>45</th>
          <td>12.52252525</td>
          <td>@@@@@#!$@#$#</td>
        </tr>
        <tr>
          <th scope="row">21</th>
          <th>789</th>
          <td>453.221221</td>
          <td>@@@@@#!$@#$#</td>
        </tr>
        <tr>
          <th scope="row">140</th>
          <th>79852</th>
          <td>@@@@@#!$@#$#</td>
          <td>@@@@@#!$@#$#</td>
        </tr>
        <tr>
          <th scope="row">75</th>
          <th>asdiuah</th>
          <td>51.22422</td>
          <td>@@@@@#!$@#$#</td>
        </tr>
        <tr>
          <th scope="row">142</th>
          <th>qjwoiemls</th>
          <td>51.22422</td>
          <td>@@@@@#!$@#$#</td>
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
export default {
  name: "Responses",
  created() {
    document.title = "ModBot | " + this.$options.name;
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