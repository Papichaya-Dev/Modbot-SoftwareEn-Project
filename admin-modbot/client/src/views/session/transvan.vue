<template>
  <div class="container">
    <div id="texttitle">VAN ROUTE</div>   
    <button id="btnadd" type="button" class="btn btn-success">Add new route</button>
    <input id="searchbtn" class="form-control" type="text" placeholder="Search" aria-label="Search">
    <form id="btnbusnum" class="form-inline">
      <label class="my-1 mr-2" for="inlineFormCustomSelectPref">By</label>
        <select class="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref">
          <option selected>Van number</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
    </form>
    <div id="select">Show <div class="btn-group">
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
      <table id="tabletran" class="table">
     <thead  class="thead-dark">
      <tr>
        <th scope="col">Van</th>
        <th scope="col">Start. point</th>
        <th scope="col">Des. point</th>
        <th scope="col">Edit</th>
      </tr>
     </thead>
    <tbody>
    <tr>
        <th scope="row">138</th>
        <td>12.52252525</td>
        <td>!!!!!!!!!!!</td>
        <td>@twitter</td>
    </tr>
    <tr>
        <th scope="row">21</th>
        <td>453.221221</td>
        <td>!1@323121</td>
        <td>@@@@@#!$@#$#</td>
    </tr>
    <tr>
        <th scope="row">140</th>
        <td>51.22422</td>
        <td>@@@@@#!$@#$#</td>
        <td>@@@@@#!$@#$#</td>
    </tr>
     <tr>
        <th scope="row">75</th>
        <td>51.22422</td>
        <td>@@@@@#!$@#$#</td>
        <td>@@@@@#!$@#$#</td>
    </tr>
    <tr>
        <th scope="row">142</th>
        <td>51.22422</td>
        <td>@@@@@#!$@#$#</td>
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
}
</script>

<style scoped>
.container{
  margin-left: 50px;
}
#texttitle {
  color: rgb(0, 0, 0);
  font-size: 35px;
  font-weight: bolder;
  margin-left: -910px;
  margin-top: 20px;
}
#btnadd{
  margin-left: 700px;
  margin-top: -70px;
}
#searchbtn{
  width: 300px;
}
#btnbusnum {
   margin-left: 350px;
   margin-top: -40px;
}
#select {
   margin-left: -930px;
   margin-top: 30px;
}
#tabletran{
  color: rgb(0, 0, 0);
  margin-top: 30px;
  width: 1000px;
  margin-left: -100px;
}
#navtran{
  color: #000;;
  margin-left: 650px;
}
</style>