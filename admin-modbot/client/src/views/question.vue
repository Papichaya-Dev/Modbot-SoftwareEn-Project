<template>
  <div>
    <h1>Q/A FROM USER</h1>
    <div>Show <div class="btn-group">
    <button type="button" class="btn btn-success dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    5
    </button>
      <div class="dropdown-menu">
        <a class="dropdown-item" href="#">1</a>
        <a class="dropdown-item" href="#">2</a>
        <a class="dropdown-item" href="#">3</a>
        <a class="dropdown-item" href="#">4</a>
      <div class="dropdown-divider"></div> 
      </div> 
      </div> entries </div>
   <table id="table" class="table">
     <thead  class="thead-dark">
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
<nav id="navtab" aria-label="Page navigation example">
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

}
</script>

<style>

#table{
  color: rgb(0, 0, 0);
  margin-top: 30px;
  width: 1000px;
  margin-left: 250px;
}

#navtab{
  color: #000;;
  margin-left: 990px;
}

</style>