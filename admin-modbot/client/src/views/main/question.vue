<template>
  <div id="question">
    <p>Question from user</p>
    <div>
      Show
      <div class="btn-group">
        <!-- <button
          type="button"
          class="btn btn-success dropdown-toggle"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          5
        </button> -->
        <select
          type="button"
          class="btn-blue" 
          name="list" 
          id="list"
          v-model="list"
        >
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="15">15</option>
          <option value="20">20</option>
        </select>
      </div>
      entries
    </div>
    <div class="container">
      <table id="table" class="table">
        <thead class="thead-dark">
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
            <td>
              <button 
                type="button"
                class="btn"
                name="Q&A"
                @click="showModal"
                >
                  More
                </button>
            </td>
            <td>@twitter</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>7.20</td>
            <td>Thornton</td>
            <td>!1@323121</td>
            <td>
              <button 
                type="button"
                class="btn"
                name="Q&A"
                @click="showModal"
                >
                  More
                </button>
            </td>
            <td>@twitter</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>19.20</td>
            <td>the Bird</td>
            <td>@@@@@#!$@#$#</td>
            <td>
              <button 
                type="button"
                class="btn"
                name="Q&A"
                @click="showModal"
                >
                  More
                </button>
            </td>
            <td>@twitter</td>
          </tr>
          <tr>
            <th scope="row">4</th>
            <td>19.20</td>
            <td>the Bird</td>
            <td>@@@@@#!$@#$#</td>
            <td>
              <button 
                type="button"
                class="btn"
                name="Q&A"
                @click="showModal"
                >
                  More
                </button>
            </td>
            <td>@twitter</td>
          </tr>
          <tr>
            <th scope="row">5</th>
            <td>19.20</td>
            <td>the Bird</td>
            <td>@@@@@#!$@#$#</td>
            <td>
              <button 
                type="button"
                class="btn"
                name="Q&A"
                @click="showModal"
                >
                  More
                </button>
            </td>
            <td>
              <md-checkbox 
                v-model="boolean" 
                class="md-primary"
              >
                Primary
              </md-checkbox>
            </td>
          </tr>
        </tbody>
      </table>
      <!-- Modal -->
      <modal
        v-show="isModalVisible"
        @close="closeModal"
      />
      

      <div class="pagination">
        <a href="#" class="previous"><i class="fa fa-angle-left"></i></a>
        <a href="#" class="btn active">1</a>
        <a href="#" class="btn">2</a>
        <a href="#" class="btn">3</a>
        <a href="#" class="btn">4</a>
        <a href="#" class="btn">5</a>
        <a href="#" class="next"><i class="fa fa-angle-right"></i></a>
      </div>
    </div>
  </div>
</template>

<script>
import modal from '@/components/modal'
export default {
  name: "Q&A",
  components: {
    modal,
  },
  created() {
    document.title = "ModBot | " + this.$options.name;
  },
  data() {
    return {
      isModalVisible: false,
    };
  },
  methods: {
    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    },
  }
}

</script>

<style scoped>
#table {
  color: rgb(0, 0, 0);
  margin-top: 3%;
  width: 100%;
}
.pagination {
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