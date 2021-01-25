<template>
  <div id="app">
    <!-- <button id="btn" type="button" class="btn btn-outline-primary">
            <router-link to="/chat/trainbot" class="btn"
              ><i class="fas fa-caret-left fa-lg"></i>&nbsp;BACK</router-link
            >
    </button> -->
    <div class="container">
      <h2 id="texttopic" class="subtitle has-text-centered">
        Create Bus route
      </h2>
      <hr />
      <br />

      <div class="field has-addons">
        <div id="inputword" class="input-group mb-3">
            <table>
                <tr>
                    <th class="texttitle text-left">Bus Number</th>
                    <td>
                        <input
                            type="text"
                            class="form-control"
                            placeholder=""
                            aria-label="insert word"
                            v-model="keyword"
                            aria-describedby="basic-addon2"
                        />
                    </td>
                </tr>
                <tr>
                    <th class="texttitle text-left">Starting Point</th>
                    <td>
                        <input
                            type="text"
                            class="form-control"
                            placeholder=""
                            aria-label="insert word"
                            v-model="keyword"
                            aria-describedby="basic-addon2"
                        />
                    </td>
                </tr>
                <tr>
                    <th class="texttitle text-left">Destination Route</th>
                    <td>
                        <input
                            type="text"
                            class="form-control"
                            placeholder=""
                            aria-label="insert word"
                            v-model="keyword"
                            aria-describedby="basic-addon2"
                        />
                    </td>
                </tr>
                <tr>
                    <th class="texttitle text-left">No. of Station</th>
                    <td>
                        <input
                            type="text"
                            class="form-control"
                            placeholder=""
                            aria-label="insert word"
                            v-model="keyword"
                            aria-describedby="basic-addon2"
                        />
                    </td>
                </tr>
                <tr>
                    <th class="texttitle text-left"></th>
                    <td>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked>
                            <label class="form-check-label" for="exampleRadios1">
                                One-way
                            </label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2">
                            <label class="form-check-label" for="exampleRadios2">
                                Return
                            </label>
                        </div>
                    </td>
                </tr>
            </table>
          <div></div>
        </div>
        <table id="tabletran" class="table">
            <colgroup>
                <col style="width: 10%" />
                <col style="width: 30%" />
                <col style="width: 20%" />
                <col style="width: 20%" />
                <col style="width: 10%" />
            </colgroup>
            <thead>
                <tr>
                <th scope="col">No.</th>
                <th scope="col">Bus Stop No.</th>
                <th scope="col">Bus Stop Name</th>
                <th scope="col">Edit</th>
                </tr>
            </thead>
            <tbody>
                
            </tbody>
        </table>
        <!-- <br />
      <div class="btnaddword">
        <button
          type="button"
          class="btn btn-outline-dark"
          @click="addParamtoAPI"
          :disabled="!param"
        >
          Add
        </button>
      </div> -->
      </div>
    </div>
    <br />
    <div class="wordtrain" v-for="(item, i) in items" :key="item._id">
      <div class="list-group-item">
        <p class="column">
          <span class="tag is-primary"></span>
          {{ item }}
        </p>
        <div class="edit">
          <!-- <button
            id="btnedit"
            class="btn btn-success"
            @click="isSelected(item) ? unselect() : select(item)"
          >
            <i class="material-icons">{{
              isSelected(item) ? "close" : "edit"
            }}</i>
          </button> -->
          <button
            id="btndelete"
            class="btn btn-danger"
            @click="removeItem(item, i)"
          >
            <!-- isSelected(item) ? updateItem(item, i) :  -->
            <i class="material-icons"><i class="fas fa-minus-circle"></i></i>
          </button>
        </div>
      </div>
    </div>
    <br />
    <button
      id="btnreset"
      type="reset"
      class="btn btn-danger"
      @click="resetItem"
    >
      Reset
    </button>
    &nbsp;
    <button
      type="button"
      class="btn btn-primary"
      data-toggle="modal"
      data-target="#exampleModal"
    >
      Create
    </button>

    <!--<router-link to="/chat/trainbot"> <button
      id="btncrete"
      type="submit"
      class="btn btn-success"
      @click="addParamtoAPI"
    >
      Create
    </button></router-link> -->
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
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
            <router-link to="/chat/trainbot">
            <button
              id="btncrete"
              type="submit"
              class="btn btn-success"
              @click="addParamtoAPI"
            >
              Create
            </button></router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import { ref } from "vue";
// import { mapActions } from "vuex";
import axios from "axios";
export default {
  name: "App",
  data() {
    return {
      keyword: "",
      items: [],
      wordtrain: "",
      editedwordtrain: "",
      selected: {},
    };
  },
  async mounted() {
    let newdata = {
      keyword: this.keyword,
      items: this.items,
    };
    const response = await axios.get("api/Trainbotwords/", newdata);
    this.newdata = response.data;
    console.log(newdata);
    //console.log(kw.data);
  },
  methods: {
    async addItem() {
      this.items.push(this.wordtrain);
      console.log(this.items);
      this.wordtrain = "";
    },
    async addParamtoAPI() {
      let newdata = {
        keyword: this.keyword,
        items: this.items,
      };
      const response = await axios.post("api/Trainbotwords/", newdata);
      this.newdata = response.data;
      console.log(newdata);
      location.reload();
    },
    async removeItem(item, i) {
      // await axios.delete("api/Trainbotwords/" + item);
      console.log(item);
      this.items.splice(i, 1);
    },
    async resetItem() {
      // await axios.delete("api/Trainbotwords/" + item);
      this.items = "";
    },
    select(item) {
      this.selected = item;
      this.editedwordtrain = item.wordtrain;
    },
    unselect() {
      this.selected = {};
      this.editedwordtrain = "";
    },
    async updateItem(item, i) {
      const response = await axios.put("api/Trainbotwords/" + item._id, {
        wordtrain: this.editedwordtrain,
      });
      this.items[i] = response.data;
      this.unselect();
    },
  },
};
</script>

<style lang="scss" scoped>
#app {
  margin: auto;
  margin-top: 3rem;
  max-width: 700px;
}
.icon {
  cursor: pointer;
}
#inputword {
  width: 70%;
}
#inputtrainword {
  width: 70%;
}
.wordtrain {
  width: 70%;
}
.texttitle {
  color: rgb(0, 0, 0);
  font-weight: bolder;
  width: 180px;
  line-height: 3rem;
}
.form-control {
    width: 300px;
}
.edit {
  margin-left: 300px;
  margin-top: -35px;
}
#btnedit {
  margin-left: 150px;
  font-family: "DM Serif Display", serif;
  border: 2px solid white;
  padding: 0.2rem;
  color: white;
  width: 80px;
  height: 50px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 300ms ease-in-out;
  opacity: 0.8;
  letter-spacing: 0.1rem;
  &:hover {
    background-color: white;
    color: black;
    cursor: pointer;
  }
}
#btndelete {
  font-family: "DM Serif Display", serif;
  border: 2px solid white;
  padding: 0.2rem;
  color: white;
  width: 100px;
  height: 50px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 300ms ease-in-out;
  margin-top: -50px;
  margin-left: 250px;
  opacity: 0.8;
  letter-spacing: 0.1rem;
  &:hover {
    background-color: white;
    color: black;
    cursor: pointer;
  }
}
</style>