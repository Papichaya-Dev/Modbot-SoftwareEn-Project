<template>
  <div id="question">
    <p>Question from user</p>
    <div>
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
    <div class="container">
      <table id="table" class="table">
        <thead class="thead-dark">
          <tr>
            <th scope="col">Date</th>
            <th scope="col">Time</th>
            <th scope="col">Username</th>
            <th scope="col">Case</th>
            <th scope="col">More</th>
            <th scope="col">Check</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>11.50</td>
            <td>Otto</td>
            <td>!!!!!!!!!!!</td>
            <td>@twitter</td>
            <td>@twitter</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>7.20</td>
            <td>Thornton</td>
            <td>!1@323121</td>
            <td>@twitter</td>
            <td>@twitter</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>19.20</td>
            <td>the Bird</td>
            <td>@@@@@#!$@#$#</td>
            <td>@twitter</td>
            <td>@twitter</td>
          </tr>
          <tr>
            <th scope="row">4</th>
            <td>19.20</td>
            <td>the Bird</td>
            <td>@@@@@#!$@#$#</td>
            <td>@twitter</td>
            <td>@twitter</td>
          </tr>
          <tr>
            <th scope="row">5</th>
            <td>19.20</td>
            <td>the Bird</td>
            <td>@@@@@#!$@#$#</td>
            <td>@twitter</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </table>
      <div class="pagination">
        <a href="#" class="previous"><i class="fa fa-angle-left"></i></a>
        <a href="#" class="btn active">1</a>
        <a href="#" class="btn">2</a>
        <a href="#" class="btn">3</a>
        <a href="#" class="btn">4</a>
        <a href="#" class="btn">5</a>
        <a href="#" class="next"><i class="fa fa-angle-right"></i></a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Q&A",
  created() {
    document.title = "ModBot | " + this.$options.name;
  },
};
</script>

<style scoped>
#table {
  color: rgb(0, 0, 0);
  margin-top: 3%;
  width: 100%;
}
.pagination {
  right: 0;
}
<<<<<<< HEAD

=======
>>>>>>> fd9a68df76624a32521806ba20d6db07f1011e41
.pagination a {
  font-family: "Open Sans", sans-serif;
  background: #91b3b949;
  padding: 1% 2%;
  margin: 1.5%;
  text-decoration: none;
  color: #203c419c;
  font-weight: 600;
  position: relative;
  border-radius: 20%;
  transition: 0.3s;
}
<<<<<<< HEAD

=======
>>>>>>> fd9a68df76624a32521806ba20d6db07f1011e41
.pagination a:hover {
  background: #c3f5ffbb;
  transition-duration: 0.3s;
}
<<<<<<< HEAD

=======
>>>>>>> fd9a68df76624a32521806ba20d6db07f1011e41
.active {
  background: #4ccee8 !important;
  transition-duration: 0.3s;
}
</style>