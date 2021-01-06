<template>
  <div id= "trans" class="container">
    <div id="navtrans">
   <ul id ="navdash" class="nav nav-pills nav-fill">
  <li class="nav-item">
    <a class="nav-link active " href="/transport">Bus</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="/transvan">Van</a>
  </li>
   <li class="nav-item">
    <a class="nav-link" href="/transminibus">Mini-bus</a>
  </li>
    </ul>
    </div>
    <div id="texttitle">BUS ROUTE</div>   
    <button id="btnadd" type="button" class="btn btn-success">Add new route</button>
    <input id="searchbtn" class="form-control" type="text" placeholder="Search" aria-label="Search">
    <form id="btnbusnum" class="form-inline">
      <label class="my-1 mr-2" for="inlineFormCustomSelectPref">By</label>
        <select class="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref">
          <option selected>Bus number</option>
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
        <th scope="col">Bus number</th>
        <th scope="col">Type</th>
        <th scope="col">Start. point</th>
        <th scope="col">Des. point</th>
        <th scope="col">Detail</th>
        <th scope="col">Edit</th>
      </tr>
     </thead>
    <tbody>
    <tr>
        <th scope="row">138</th>
        <td>return</td>
        <td>12.52252525</td>
        <td>!!!!!!!!!!!</td>
        <td>@twitter</td>
        <td>@twitter</td>
    </tr>
    <tr>
        <th scope="row">21</th>
        <td>on-way</td>
        <td>453.221221</td>
        <td>!1@323121</td>
        <td>@@@@@#!$@#$#</td>
        <td>@@@@@#!$@#$#</td>
    </tr>
    <tr>
        <th scope="row">140</th>
        <td>on-way</td>
        <td>51.22422</td>
        <td>@@@@@#!$@#$#</td>
        <td>@@@@@#!$@#$#</td>
        <td>@@@@@#!$@#$#</td>
    </tr>
     <tr>
        <th scope="row">75</th>
        <td>on-way</td>
        <td>51.22422</td>
        <td>@@@@@#!$@#$#</td>
        <td>@@@@@#!$@#$#</td>
        <td>@@@@@#!$@#$#</td>
    </tr>
    <tr>
        <th scope="row">142</th>
        <td>on-way</td>
        <td>51.22422</td>
        <td>@@@@@#!$@#$#</td>
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

<style>

#texttitle {
  color: rgb(0, 0, 0);
  font-size: 35px;
  font-weight: bolder;
  margin-left: -910px;
  margin-top: 20px;
}

#btnadd{
  margin-left: 900px;
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
}

#navtrans{
  /* color: #000;
  font-size: 30px; */
 
}

</style>