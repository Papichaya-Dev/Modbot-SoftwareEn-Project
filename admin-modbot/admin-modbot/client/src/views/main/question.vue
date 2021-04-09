<template>
  <div class="app container">
    <table>
      <tr>
        <h2 id="texttopic" class="subtitle has-text-centered">
        <i class="fa fa-user" aria-hidden="true"></i> Suggestions and Problems from User
        </h2>
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
    <table id="tabletran" class="table table-hover text-center">
      <thead class="thead-dark">
        <tr>
          <!-- <th scope="col">No.</th> -->
          <th scope="col">Date</th>
          <th scope="col">UserId</th>
          <th scope="col">Suggestion</th>
          <th scope="col">Problem</th>
          <th scope="col">Check All</th>
          <th scope="col">Check By</th>
          <th scope="col">Detail</th>
        </tr>
      </thead>
      <tbody class="text-center">
        <tr v-for="(detail, index) in details" :key="detail._id">
          <!-- <th scope="row" class="text-center">{{ num + 1  }}</th> -->
          <td scope="row">{{ format_date(detail.date) }}</td>
          <td id="userId">{{ detail.userId }}</td>
          <td>
                <p :class="{ completed : detail.completed }" 
               v-for="(suggestion, index) in detail.suggestion" 
               :key="suggestion._id" :v-if="index <= 5">{{ suggestion.text }}</p>
          </td>
          <td>
                <p :class="{ completed : detail.completed }" 
              v-for="(problem, index) in detail.problem" 
              :key="problem._id" :v-if="index <= 5">{{ problem.text }}</p>
          </td>
          <td class="align-center">
              <label class="material-checkbox">
                <input type="checkbox" v-model="detail.completed">
                <span></span>
              </label>
          </td>
          <td style="width:15%">
                <p v-if="detail.completed">{{ user }}</p>
          </td>
          <td>
            <button
              type="button"
              class="btn btn-outline-warning"
              data-toggle="modal" 
              data-target=".bd-example-modal-lg"
              data-whatever="@detail"
              @click="sendInfo(index)"
            >
              <i class="fas fa-edit"></i>
            </button>
            <div class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
              <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">

                  <div class="modal-header">
                      <button type="button" class="btn btn-outline-light model-header-btn" @click="prevInfo(pageIndex)">
                        <i class="fas fa-caret-left"></i>
                      </button>
                      <h6 class="modal-title p-2" id="exampleModalLabel">{{ selectedQuestion.userId }}</h6>
                      <button type="button" class="btn btn-outline-light model-header-btn" @click="nextInfo(pageIndex)">
                        <i class="fas fa-caret-right"></i>
                      </button>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                    
                  </div>

                  <div class="modal-body">
                    
                    <h4>Suggestions</h4>
                    <table id="tabletran" class="table table-hover text-center">
                      <thead class="thead-light">
                        <th scope="col">NO.</th>
                        <th scope="col">Detail</th>
                        <th scope="col">Check</th>
                        <th scope="col">BY</th>
                      </thead>
                      <tbody v-for="(suggestion, index) in selectedQuestion.suggestion" :key="suggestion._id">
                        <td style="width:5rem">{{index+1}}</td>
                        <td>
                          <p class="text-left" :class="{ completed : suggestion.completed }">{{ suggestion.text }}</p>
                        </td>
                        <td style="width:30%">
                            <label class="material-checkbox text-center align-center">
                              <input type="checkbox" v-model="suggestion.completed">
                              <span></span>
                            </label>
                        </td>
                        <td style="width:20%">
                            <p class="text-left" v-if="suggestion.completed">{{ user }}</p>
                            <!-- <p>{{ getData(user, suggestion.completed, selectedQuestion.suggestion[index]) }}</p> -->
                        </td>
                      </tbody>
                    </table>
                    <hr><br>
                    <h4>Problems</h4>
                    <table id="tabletran" class="table table-hover text-center">
                      <thead class="thead-light">
                        <th scope="col">NO.</th>
                        <th scope="col">Detail</th>
                        <th scope="col">Check</th>
                        <th scope="col">BY</th>
                      </thead>
                      <tbody v-for="(problem, index) in selectedQuestion.problem" :key="problem._id">
                        <td style="width:5rem">{{index+1}}</td>
                        <td>
                          <p class="text-left" :class="{ completed : problem.completed }">{{ problem.text }}</p>
                        </td>
                        <td style="width:30%">
                            <label class="material-checkbox text-center align-center">
                              <input type="checkbox" v-model="problem.completed">
                              <span></span>
                            </label>
                        </td>
                        <td style="width:20%">
                          <p class="text-left" v-if="problem.completed">{{ user }}</p>
                          <!-- <p>{{ getData(user, problem.completed, selectedQuestion.problem[index]) }}</p> -->
                        </td>
                      </tbody>
                    </table>
                    
                  </div>

                  <div class="modal-footer">
                        <p class="text-muted waterprint mr-auto"><strong>Created : {{ format_time(selectedQuestion.date) }} - {{ format_date(selectedQuestion.date) }}</strong></p>
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
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
import moment from 'moment'
import { mapGetters } from "vuex";
export default {
  name: "Suggestions",
  created() {
    document.title = "ModBot | " + this.$options.name;
  },
  data() {
    return {
      details: {
        date: "",
        userId: "",
        suggestion: [{
          admin: {
            checked: "",
            adminChecked: ""
          }
        }],
        problem: [{
          admin: {
            checked: "",
            adminChecked: ""
          }
        }],
      },
      selectedQuestion: "",
      pageIndex: "",
      adminChecked: "",
      checked: "",
      admin: {
        checked: "",
        adminChecked: ""
      }
    };
  },
  computed: {
      ...mapGetters(["isLoggedIn"]),
      user () {
        // console.log(this.$store.state.Auth)
        return this.$store.state.Auth.user;
      }
    },
  async mounted() {
    const response = await axios.get("api/Question/");
    this.details = response.data;
    // console.log(this.details);
  },
  methods: {
    async deleteBtn(selectedQuestion) {
      console.log(selectedQuestion)
      const res = await axios.delete("api/Question/"+ selectedQuestion);
      console.log(res);
      location.reload();
    },
    async updateChecked(getAdmin, info) {
      console.log(info._id)
      const res = await axios.put("api/Question/"+ info._id, {
        checked: getAdmin.checked,
        adminChecked: getAdmin.admin
      });
      console.log(res.data);
    },
    getData(user, checked, info) {
        console.log(info.completed)
        let getAdmin = { 
          adminChecked : user,
          checked : checked
        }
        console.log(info)
        console.log(getAdmin)
        return info
    },
    // async updateCheck(info) {
    //   let newdata = {
    //     checked: info.complete,
    //     adminChecked: this.$store.state.Auth.user
    //   }
    //   const res = await axios.put("api/Question/"+ info._id, newdata);
    //   this.newdata = res.data
    //   console.log(this.newdata);
    //   location.reload();
    // },
    sendInfo(index) {
      // console.log(info)
      this.sendIndex(index);
      // console.log(this.details[index])
      return this.selectedQuestion = this.details[index]
    },
    sendIndex(index) {
      return this.pageIndex = index
    },
    format_date(value){
      if (value) {
        return moment(String(value)).format('DD/MM/YYYY ')
      }
    },
    format_time(value){
      if (value) {
        return moment(String(value)).format('hh:mm')
      }
    }, 
    prevInfo(index){
      if(index > 0) {
        this.pageIndex = index - 1
        return this.sendInfo(this.pageIndex)
      } else {
        this.pageIndex = this.details.length - 1
        return this.sendInfo(this.pageIndex)
      }
    }, 
    nextInfo(index) {
      if(index < this.details.length - 1) {
        this.pageIndex = index + 1
        return this.sendInfo(this.pageIndex)
      } else {
        this.pageIndex = 0
        return this.sendInfo(this.pageIndex)
      }
    }
  }
}
</script>


<style scoped>
@import "../../../public/stylesheet/style.css";
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
input:checked .disable {
  display: block;
}
input:checked .enable {
  display: hidden;
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
.waterprint {
  margin-top: 0.3rem;
  text-align: right;
  justify-content: right;
}
</style>