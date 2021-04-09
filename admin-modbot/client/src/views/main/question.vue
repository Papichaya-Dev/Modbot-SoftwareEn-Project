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
                <p  v-for="(suggestion, index) in detail.suggestion" :key="suggestion._id" :v-if="index <= 5" :class="{ completed : detail.completed }">{{ suggestion.text }}</p>
            </td>
          <td>
                <p v-for="(problem, index) in detail.problem" :key="problem._id" :class="{ completed : detail.completed }" :v-if="index <= 5">{{ problem.text }}</p>
          </td>
          <td class="align-center">
              <label class="material-checkbox">
                <input type="checkbox" v-model="detail.completed">
                <span></span>
              </label>
            </td>
          <td>
            <button
              type="button"
              class="btn btn-outline-danger"
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

</style>