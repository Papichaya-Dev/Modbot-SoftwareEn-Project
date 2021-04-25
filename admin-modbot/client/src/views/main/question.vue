<template>
  <div class="app container">
    <table>
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
     
          <span v-for="perPageOption in pageSizes" :key="perPageOption">
         <button class="perpagebtn btn-light"
                @click="changePerPage(perPageOption)">                
                {{perPageOption}} 
          </button>
       </span>
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
          <th scope="col">Checked</th>
          <!-- <th scope="col">Check By</th> -->
          <th scope="col">Detail</th>
        </tr>
      </thead>
      <tbody class="text-center">
        <tr v-for="(detail, index) in details" :key="detail._id">
          <td style="width: 30%" scope="row">{{ format_date(detail.date) }}</td>
          <td style="width: 30%" id="userId" class="text-center">*****{{ typeof(detail.userId) !== 'undefined'? detail.userId.slice(10,) : ''}}
          </td>
          <td style="width: 10%">
                <p 
                  class="text-left"  
                  v-for="(suggest, index) in detail.suggestion" 
                  :key="suggest" 
                  :class="{ completed : suggest.completed }"
                >
                  <span v-if="index < 5">{{ suggest.text }}</span>
              </p>
          </td>
          <td style="width: 20%">
              <p 
                class="text-left"  
                v-for="(problem, index) in detail.problem" 
                :key="problem" 
                :class="{ completed : problem.completed }"
              >
                <span v-if="index < 5">{{ problem.text }}</span>
              </p>
          </td>
          <td class="align-center">
              <p> 
                <!-- เพื่อเช็คว่าเช็ค suggest กับ problem ไปกี่อันแล้ว -->
                {{ getCalPercent(detail.suggestion, detail.problem) }} / 
                  {{ typeof(detail.suggestion) !== 'undefined' && typeof(detail.problem) !== 'undefined'
                  ? detail.suggestion.length + detail.problem.length
                  : 0}}
              </p>
          </td>
          <td>
            <router-link :to="{ path: '/question/editQuestion/' + detail._id}"
                ><button
              type="button"
              class="btn btn-outline-warning"
              data-toggle="modal" 
              data-target=".bd-example-modal-lg"
              data-whatever="@detail"
              @click="sendInfo(index)"
            >
              <i class="fas fa-edit"></i>
            </button>
              </router-link>
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
                        <th scope="col">
                          <button 
                            :class="{ check_active: isActive }"
                            @click="checkForAll(selectedQuestion.suggestion)" 
                            style="background-color: transparent; border: 0px solid"
                          ><i class="fas fa-check"></i>
                            Check
                          </button>
                        </th>
                        <th scope="col">BY</th>
                      </thead>
                      <tbody v-for="(suggestion, index) in selectedQuestion.suggestion" :key="suggestion._id">
                        <td >{{index+1}}</td>
                        <td>
                          <p class="text-left" :class="{ completed : suggestion.completed }">{{ suggestion.text }}</p>
                        </td>
                        <td style="width:fit-content">
                            <label class="material-checkbox text-center align-center">
                              <input type="checkbox" v-model="suggestion.completed" @change="checkSuggestion($event, index)">
                              <span></span>
                            </label>
                        </td>
                        <td style="width:20%">
                            <p class="text-left" v-if="suggestion.completed">{{ suggestion.check_by }}</p>
                        </td>
                      </tbody>
                    </table>
                    <hr><br>
                    <h4>Problems</h4>
                    <table id="tabletran" class="table table-hover text-center">
                      <thead class="thead-light">
                        <th scope="col">NO.</th>
                        <th scope="col">Detail</th>
                        <th scope="col">
                          <button 
                            :class="{ check_active: isActive }"
                            @click="checkForAll(selectedQuestion.problem)" 
                            style="background-color: transparent; border: 0px solid"
                          ><i class="fas fa-check"></i>
                            Check
                          </button>
                        </th>
                        <th scope="col">BY</th>
                      </thead>
                      <tbody v-for="(problem, index) in selectedQuestion.problem" :key="problem._id">
                        <td style="width:5rem">{{index+1}}</td>
                        <td>
                          <p class="text-left" :class="{ completed : problem.completed }">{{ problem.text }}</p>
                        </td>
                        <td style="width:10%">
                            <label class="material-checkbox text-center align-center">
                              <input type="checkbox" v-model="problem.completed" @change="checkProblem($event, index)" >
                              <span></span>
                            </label>
                        </td>
                        <td style="width:20%">
                          <p class="text-left" v-if="problem.completed">{{ problem.check_by }}</p>
                          <p hidden>{{ getData(user, problem.completed, selectedQuestion.problem[index]) }}</p>
                        </td>
                      </tbody>
                    </table>
                    
                  </div>

            <div class="modal-footer">
                        <p class="text-muted waterprint mr-auto"><strong>Created : {{ format_time(selectedQuestion.date) }} - {{ format_date(selectedQuestion.date) }}</strong></p>
                      <button
                        type="button"
                        class="btn btn-primary"
                        data-toggle="modal"
                        data-target="#exampleModal"
                      >
                        Update
                      </button>
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Are you sure?</h5>
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
            <router-link to="/question">
              <button
                id="btncrete"
                type="submit"
                class="btn btn-primary"
                @click="updateParamtoAPI"
              ><i class="fas fa-arrow-alt-circle-down"></i>&nbsp;
                Save change
              </button>
            </router-link>
             <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
                      </div>
                    </div>
                  </div>
                </div>
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
      id: this.$route.params.id,
      details: {
        userId:"",
        date: "",
        suggestion: [],
        problem: [],
        check_by:"",
      },
      selectedQuestion: "",
      pageIndex: "",
      adminChecked: "",
      checked: "",
      username:"",
      check_by:"",
      query:'',
      perPage: 5 ,
      currentPage : 1,
			startIndex : 0,
			endIndex : 5,
      pageSizes: [5, 10, 15, 20],
      isActive: false
      
    };
  },
  computed: {
      ...mapGetters(["isLoggedIn"]),
      user () {
        return this.$store.state.Auth.user;
      }
    },
  async mounted() {
    const response = await axios.get("api/Question/", );
    let username = this.$store.state.Auth.user
    console.log(username)
    this.details = response.data;
    console.log(this.details);   
  },
  methods: {
    checkSuggestion(value, index){
      this.selectedQuestion.suggestion[index].check_by = this.$store.state.Auth.user
      // this.selectedQuestion.suggestion[index].completed = value
    },
    checkProblem(value, index){
      this.selectedQuestion.problem[index].check_by = this.$store.state.Auth.user
    },
     async updateParamtoAPI() {
      const response = await axios.put("api/Question/" + this.$route.params.id, {suggestionArray: this.selectedQuestion.suggestion, problemArray: this.selectedQuestion.problem});
     this.newdata = response.data;
      console.log(response.data);
      location.reload();
    // console.log(this.selectedQuestion)
    },
    pagination(activePage) {
      
					this.currentPage = activePage;
					this.startIndex = (this.currentPage * this.perPage) - this.perPage;
					this.endIndex = this.startIndex + this.perPage;
				},
				countCustomer() {
					var count_cust = 0;
					for(var index = 0; index < this.details.length; index++){
						count_cust++;
					}
					return count_cust;
				},
				previous() {
          if (this.currentPage > 1) {
            return this.pagination(this.currentPage - 1);
          }
				},
				next() {
          if (this.currentPage < this.totalPages) {
            this.pagination(this.currentPage + 1);
          }
				},
         changePerPage(newPerPage) {
           this.perPage = newPerPage;
           this.currentPage = 1;
           return this.pagination(this.currentPage)
          } ,
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
    getCalPercent(suggest, problem) {
      let sumAll;
      if(typeof(suggest) !== 'undefined' && typeof(problem) !== 'undefined')
        sumAll = suggest.length + problem.length
      let sumCheck = 0;
      for (let i = 0; i < sumAll; i++) {
        if(i < suggest.length) {
          if(suggest[i].completed === true) {
            sumCheck += 1;
          }
        }
        if(i < problem.length) {
          if(problem[i].completed === true) {
            sumCheck += 1;
          }
        }
      }
      return sumCheck
    },
    checkForAll(attribute) {
      this.isActive = !this.isActive
      for(let i = 0; i<= attribute.length; i++) {
        console.log(!attribute[i].completed)
        if(attribute[i].check_by == this.user || !attribute[i].completed || attribute[i].completed == undefined) {
          attribute[i].completed = !this.isActive
          if(attribute[i].check_by != this.user) {
            attribute[i].check_by = this.user
          }
        }
        
      }
    },
    sendInfo(index) {
      this.sendIndex(index);
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
.showNum {
  padding: 3% 2%;
}
tbody th, tbody td {
      
  text-align: center;
  width: 100%;
  white-space: nowrap;
  
}
.Prebtn, .Nextbtn, .numbtn, button.perpagebtn {
  background: rgb(255, 255, 255);
  padding: 5px 13px;
  border-radius: 50px ;
  box-shadow: 0 5px 15px rgba(56, 56, 56, 0.2);
  
}
.Prebtn:hover, .Nextbtn:hover, .numbtn:hover{
  background-color: rgb(221, 218, 218);
  color: black;
}
.Prebtn:focus, .Nextbtn:focus, .numbtn:focus , button.perpagebtn:focus{
  outline: 0;
}
.perpagebtn{
  margin: 2px;
  border-radius: 3px;
  font-size: 1em;
  cursor: pointer;
}
.my-nice-button>i { color: black; }
</style>