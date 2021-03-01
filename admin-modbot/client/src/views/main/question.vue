<template>
  <div id="question">
    <p>Question from User</p>
    <div class="col-md-8">
      <div class="input-group mb-3">
        <input
          type="text"
          class="form-control"
          placeholder="Search by title"
          v-model="searchCase"
        />
        <div class="input-group-append">
          <button
            class="btn btn-blue"
            type="button"
            @click="page = 1; retrieveCases();"
          >
            Search
          </button>
        </div>
      </div>
    </div>
    <div class="col-md-12">
      <div class="mb-3">
        Items per Page:
        <select class="btn-blue" v-model="pageSize" @change="handlePageSizeChange($event)">
          <option v-for="size in pageSizes" :key="size" :value="size">
            {{ size }}
          </option>
        </select>
      </div>
    </div>
    <div class="container-md">
      <div class="row">
        <table id="table" class="table">
        <thead class="thead-dark">
          <tr>
            <th scope="col">Date</th>
            <th scope="col">UserID</th>
            <th scope="col">Suggestion</th>
            <th scope="col">Problem</th>
            <th scope="col">Complete</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="detail in details" :key="detail._id">
            <td>
              <div>
                <p>{{ detail.date }}</p>
              </div>
            </td>
            <td>{{ detail.userId }}</td>
            <td>
               <div :class="{ completed : detail.completed }" v-for="(suggestion, index) in detail.suggestion" :key="suggestion._id">
                <p v-if="index <= 2">{{ suggestion.text }}</p>
              </div>
            </td>
            <td>
              <div :class="{ completed : detail.completed }" v-for="(problem, index) in detail.problem" :key="problem._id">
                <p v-if="index <= 2">{{ problem.text }}</p>
              </div>
            </td>
            <td>
              <label class="material-checkbox">
                <input type="checkbox" v-model="detail.completed" @click="check">
                <span></span>
              </label>
            </td>
            <td>
              <button
                class="btn btn-danger"
                @click="removeCase(detail._id)"
              >
                <i class="fas fa-trash-alt"></i>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      </div>
      
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
              <h5 class="modal-title" id="deleteModalLabel">Are you sure?</h5>
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
                  @click="deleteCase"
                >
                  Delete
                </button></router-link
              >
            </div>
          </div>
        </div>
      </div>
      
      <!-- <div class="pagination">
        <a href="#" class="previous"><i class="fa fa-angle-left"></i></a>
        <a href="#" class="btn active">1</a>
        <a href="#" class="btn">2</a>
        <a href="#" class="btn">3</a>
        <a href="#" class="btn">4</a>
        <a href="#" class="btn">5</a>
        <a href="#" class="next"><i class="fa fa-angle-right"></i></a>
      </div> -->
      <div class="pagination-nav">
        <nav aria-label="Page navigation">
          <ul class="pagination justify-content-center">
            <li class="page-item first-item">
              <!-- <router-link :to="{ query: { page: 1 }}"  class="page-link text-success">First</router-link> -->
              <a class="page-link text-success" href="#">First</a>
            </li>
            <li class="page-item previous-item">
              <!-- <router-link  class="page-link text-danger">Previous</router-link> -->
              <a class="page-link text-danger" href="#">Previous</a>
            </li>
            <li v-for="(detail, index) in new Array(5)" :key="index" class="page-item number-item">
              <!-- <router-link  class="page-link text-primary"  @click="pageNumber = index + 1">{{ index + 1 }}</router-link> -->
              <a class="page-link text-primary" @click="pageNumber = index + 1" href="#">{{ index + 1 }}</a>
            </li>
            <li class="page-item next-item">
              <!-- <router-link  class="page-link text-warning">Next</router-link> -->
              <a class="page-link text-warning" href="#">Next</a>
            </li>
            <li class="page-item last-item">
              <!-- <router-link  class="page-link text-info">Last</router-link> -->
              <a class="page-link text-info" href="#">Last</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: "Q&A",
  created() {
    document.title = "ModBot | " + this.$options.name;
  },
  data() {
    return {
      id: this.$route.params.id,
      details: {
        date: "",
        userId: "",
        suggestion: [],
        problem: [], 
      },
    };
  },
  async mounted() {
    const response = await axios.get("api/Question/", {
      date: this.details.date,
      userId: this.details.userId,
      Suggestion: this.details.suggestion,
      Problem: this.details.problem,
    });
    this.details = response.data;
    console.log(this.details);  
  },
  methods: {
    async check(detail) {
      detail.completed = true;
    },
    async removeCase(detail) {
      window.confirm("Do you really want to delete?");
      console.log(detail)
      const res = await axios.delete("api/Question/" + detail);
      console.log(res);
      location.reload();
    },
  },
}

</script>

<style scoped>
#table {
  color: rgb(25, 21, 37);
  margin-top: 3%;
  width: 100%;
}
/* .pagination {
  right: 0;
}
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
.pagination a:hover {
  background: #c3f5ffbb;
  transition-duration: 0.3s;
}
.active {
  background: #4ccee8 !important;
  transition-duration: 0.3s;
} */
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
.page-link {
  cursor: pointer;
}
</style>