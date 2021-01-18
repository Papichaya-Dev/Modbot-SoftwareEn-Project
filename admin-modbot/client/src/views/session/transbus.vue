<template>
  <div class="container">
    <div id="texttitle">BUS ROUTE</div>
   <button id="btnadd" type="button" class="btn btn-outline-warning">
            <router-link to="/transport/addtransbus" class="btn"
              ><i class="fas fa-plus-circle fa-lg"></i>&nbsp;Add New route</router-link
            >
          </button>
    <input
      id="searchbtn"
      class="form-control"
      type="text"
      placeholder="Search"
      aria-label="Search"
    />
    <form id="btnbusnum" class="form-inline">
      <label class="my-1 mr-2" for="inlineFormCustomSelectPref">By</label>
      <select
        class="custom-select my-1 mr-sm-2"
        id="inlineFormCustomSelectPref"
      >
        <option selected>Bus number</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
    </form>
    <v-main>
      <v-container
      class="scroll-y"
      fluid>
      <v-row
      align="center"
      justify="center"
      >
      <v-col cols="8" md="8">
        <v-card class="ml-5 mr-5">
          <v-app-bar
          dark
          color="black"
          >
      <v-toolbar-title>Posts</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-dialog v-model="dialog" presistent max-with="800px">
          <button v-on="on" >Add
          </button>
       <v-card>
         <v-form @submit.prevent="savePost" ref="postData" lazy-validation enctype="multipart/form-data">
          <v-card-title>
            <span class="headline">Posts</span>
          </v-card-title>
          <v-card-text>
            <v-container grid-list-md>
              <v-layout wrap>
                <v-flex xs12 sm12 md12>
                  <v-text-filed lable="Name" v-model="postData.name">

                  </v-text-filed>
                </v-flex>
                <v-flex xs12 sm12 ms12>
                  <v-text-field label="Description" v-model="postData.description">
                  </v-text-field>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-spacer>
              <button @click="close">close</button>
               <button type="submit">save</button>
            </v-spacer>
          </v-card-actions>
         </v-form>

       </v-card>

      </v-dialog>
          </v-app-bar>
        </v-card>
      </v-col>
      </v-row>
      </v-container>
    </v-main>
    <!-- <div id="select">
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
          <th scope="col">Bus</th>
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
    </nav> -->
  </div>
</template>

<script>
export default {
  props:{
    // source: string
  },
  data: () => ({
    mini: false,
    dialog: false,
    fab: false,
    postData: {
      name: '',
      description:''
    },
    default: {
      name: '',
      description:''
    },
    editedIndex: -1,
  }),
  methods: {
    close(){
      this.dialog = false
      setTimeout(()=> {
        this.postData = Object.assign({}, this.default)
        this.editedIndex = -1
      }, 300)
    }
  }
};
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