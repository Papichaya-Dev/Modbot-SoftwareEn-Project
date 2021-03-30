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
        <option selected>Lastest</option>
        <option value="1">Bus No.</option>
        <option value="2">Type</option>
        <option value="3">Start point</option>
        <option value="3">Des. point</option>
      </select>
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

    <table id="tabletran" class="table">
      <thead class="thead-dark text-center">
        <tr>
        <div style="width: 100%">
         <th style="width: 20%">Date</th>
          <th style="width: 40%">UserId</th>
          <th style="width: 15%">Suggestion</th>
          <th style="width: 30%">Problem</th>
          <th style="width: 5%">Delete</th>
        </div>    
         
        </tr>
      </thead>
    <div v-if="countCustomer() > 0">
      <tbody v-for="(detail, i) in details" :key="detail._id">
        <tr v-if="i >= startIndex && i < endIndex">
          <!-- <th scope="row" class="text-center">{{ num + 1  }}</th> -->
          <td style="width: 10%">{{ detail.date }}</td>
          <td style="width: 15%" id="userId">{{ detail.userId }}</td>
           <td style="width: 30%">
               <div id= "suggest" 
               :class="{ completed : detail.completed }" 
               v-for="(suggestion, index) in detail.suggestion" 
               :key="suggestion._id">
                <p v-if="index <= 5">
                  {{ suggestion.text }}
                  <input 
                  type="checkbox" 
                  name="suggestion"
                  :id="suggestion"
                  :value="suggestion"
                  v-model="checked">
                </p>
              </div>
            </td>
          <td style="width: 30%">
              <div id="problem"  
              :class="{ completed : detail.completed }" 
              v-for="(problem, index) in detail.problem" 
              :key="problem._id">
                <p 
                v-if="index <= 5">
                {{ problem.text }}
                <input 
                  type="checkbox" 
                  name="problem"
                  :id="problem"
                  :value="problem"
                  v-model="checked">
                </p>
              </div>
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
    </div>
    </table>
    <div v-if="currentPage !== totalPages" class="float-left mt-4" >
          Showing {{startIndex + 1}} to {{endIndex}} of {{details.length}} entries      
      </div>
      <div v-if="currentPage == totalPages" class="float-left mt-4" >
          Showing {{startIndex + 1}} to {{details.length}} of {{details.length}} entries      
      </div>
    <div class="pagination float-right mt-4">
			<button class="Prebtn btn-light " @click="previous" >Previous</button>
        <button class="numbtn btn-light " 
        data-toggle="buttons" 
        v-for="num in totalPages" :key="num._id" 
        @click="pagination(num)"
        >
        {{num}}</button>
			<button class="Nextbtn btn-light shadow-none" @click="next">Next</button>
		</div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Q&A",
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
      selectedQuestion: "",
      checked:[],
      selectedStation: "",
      perPage: 5 ,
      currentPage : 1,
			startIndex : 0,
			endIndex : 5,
      pageSizes: [5, 10, 15, 20]
    };
  },
  async mounted() {
    const response = await axios.get("api/Question/");
    this.details = response.data;
    console.log(this.details);

    this.checked = JSON.parse(localStorage.getItem("checked")) || []
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
    },
      pagination(activePage) {
      
					this.currentPage = activePage;
					this.startIndex = (this.currentPage * this.perPage) - this.perPage;
					this.endIndex = this.startIndex + this.perPage;
          console.log(this.startIndex)
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
          } 
  },
  watch: {
    checked(newValue) {
      localStorage.setItem("checked", JSON.stringify(newValue));
    }
  },
  computed: {
    totalPages() {
      return Math.ceil(this.details.length / this.perPage)
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
  margin-left:30px;
}
.md-checkbox {
  display: flex;
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
</style>