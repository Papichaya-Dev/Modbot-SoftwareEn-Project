<template>
  <div class="app">
    <table>
      <tr>
        <h2 id="texttopic" class="subtitle has-text-centered">
        <i class="fa fa-user" aria-hidden="true"></i> Suggestion and Problem from User
        </h2>
      </tr>
      <colgroup>
        <col style="width: 90%" />
        <col style="width: 10%" />
      </colgroup>
    </table>
    <!-- Function search -->
    <form>
  
       <div class="form-group mb-2 text-center text-black form-center" style="width:35%">
      <search-3-component/>
      
        </div>
    </form>
    <!-- <form id="btnbusnum" class="form-inline">
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
        <option selected>Lastest</option>
        <option value="1">Bus No.</option>
        <option value="2">Type</option>
        <option value="3">Start point</option>
        <option value="3">Des. point</option>
      </select>
    </form> -->

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
        <col style="width: 5%" />
        <col style="width: 10%" />
        <col style="width: 15%" />
        <col style="width: 15%" />
        <col style="width: 10%" />
        <col style="width: 5%" />
        <col style="width: 5%" />
        <col style="width: 5%" />
      </colgroup>
      <thead class="thead-dark text-center">
        <tr>
          <!-- <th scope="col">No.</th> -->
          <th scope="col">Date</th>
          <th scope="col">UserId</th>
          <th scope="col">Suggestion</th>
          <th scope="col"  style="width: 15%">Problem</th>
          <th scope="col">Check box</th>
          <th scope="col">Delete</th>
        </tr>
      </thead>
      <tbody class="text-center">
        <tr v-for="(detail) in details" :key="detail._id">
          <!-- <th scope="row" class="text-center">{{ num + 1  }}</th> -->
          <td scope="row">{{ detail.date }}</td>
          <td id="userId">{{ detail.userId }}</td>
           <td>
               <div id= "suggest" style="width: 157%" :class="{ completed : detail.completed }" v-for="(suggestion, index) in detail.suggestion" :key="suggestion._id">
                <p v-if="index <= 5">{{ suggestion.text }}</p>
              </div>
            </td>
          <td>
              <div id="problem" style="width: 130%" :class="{ completed : detail.completed }" v-for="(problem, index) in detail.problem" :key="problem._id">
                <p v-if="index <= 5">{{ problem.text }}</p>
              </div>
            </td>
          <td>
              <label class="material-checkbox">
                <input type="checkbox" v-model="detail.completed">
                <span></span>
              </label>
            </td>
          <td>
            <button
              type="button"
              class="btn btn-danger"
              data-toggle="modal"
              data-target="#deleteModal"
              @click="sendInfo(detail)"
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
                    <h5 class="modal-title" id="deleteModalLabel">Are you sure</h5>
                    <button
                      type="button"
                      class="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                 
                  <div class="modal-footer">
                    <button
                      type="button"
                      class="btn btn-secondary"
                      data-dismiss="modal"
                    >
                      Close
                    </button>
                    <router-link to="/question">
                      <button
                        id="btnreset"
                        type="reset"
                        class="btn btn-danger"
                        @click="deleteBtn(selectedQuestion._id)">
                        Delete
                      </button></router-link
                    >
                  </div>
                </div>
              </div>
            </div>
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
import Search3Component from '@/components/Search3Component.vue'
export default {
  components: {
      Search3Component,
  },
  name: "Bus Table",
  created() {
    document.title = "ModBot | " + this.$options.name;
  },
  data() {
    return {
      details: {
        date: "",
        userId: "",
        suggestion: "",
        problem: "",
      },
      selectedQuestion: ""
    };
  },
  async mounted() {
    const response = await axios.get("api/Question/");
    this.details = response.data;
    console.log(this.details);
  },
  methods: {
    async deleteBtn(selectedQuestion) {
      console.log(selectedQuestion)
      const res = await axios.delete("api/Question/"+ selectedQuestion);
      console.log(res);
      location.reload();
    },
    sendInfo(info) {
      return this.selectedQuestion = info
    }
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
#userId {
  margin-left:-25px;
  font-size: 13.5px;
  font-weight: bolder;
}
#suggest {
  margin-left:-25px;
}
#problem {
  margin-left:-15px;
}
.md-checkbox {
  display: flex;
}
.btn-blue {
  color: white;
  background: #7e7dec;
  border: 1px solid #7e7dec;
  border-radius: 2px;
}
.material-checkbox {
  position: relative;
  display: inline-block;
  color: rgba(0, 0, 0, 0.87);
  cursor: pointer;
  font-size: 20px;
  line-height: 18px;
  margin-left: 50px;
}
.material-checkbox > input {
  appearance: none;
  -moz-appearance: none;
  -webkit-appearance: none;
  position: absolute;
  z-index: -1;
  left: -5px;
  top: -5px;
  display: block;
  margin: 0;
  border-radius: 50%;
  width: 18px;
  height: 18px;
  background-color: rgba(0, 0, 0, 0.42);
  outline: none;
  opacity: 0;
  transform: scale(1);
  -ms-transform: scale(0); /* Graceful degradation for IE */
  transition: opacity 0.5s, transform 0.5s;
}
.material-checkbox > input:checked {
  background-color: #2196f3;
}
.material-checkbox > input:disabled {
  opacity: 0;
}
.material-checkbox > input:disabled + span {
  cursor: initial;
}
.material-checkbox > span::before {
  content: "";
  display: inline-block;
  margin: 10px;
  border: solid 2px rgba(0, 0, 0, 0.42);
  border-radius: 2px;
  width: 24px;
  height: 24px;
  vertical-align: -4px;
  transition: border-color 0.5s, background-color 0.5s;
}
.material-checkbox > input:checked + span::before {
  border-color: #7e7dec;
  background-color: #7e7dec;
}
.material-checkbox > input:active + span::before {
  border-color: #7e7dec;
}
.material-checkbox > input:checked:active + span::before {
  border-color: transparent;
  background-color: rgba(0, 0, 0, 0.42);
}
.material-checkbox > span::after {
  content: "";
  display: inline-block;
  position: absolute;
  top: 13px;
  left: 13px;
  width: 7px;
  height: 13px;
  border: solid 2px transparent;
  border-left: none;
  border-top: none;
  transform: translate(5.5px, 1px) rotate(45deg);
  -ms-transform: translate(5.5px, 2px) rotate(45deg);
}
.material-checkbox > input:checked + span::after {
  border-color: #fff;
}
.completed {
  text-decoration: line-through;
  color: #7e7dec;
}
</style>