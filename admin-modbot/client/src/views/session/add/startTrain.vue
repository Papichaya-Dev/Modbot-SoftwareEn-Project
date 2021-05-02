<template>
  <div id="app">
    <div class="container">
      <h2 id="texttopic" class="subtitle has-text-centered">
        Create Trainbot Messege
      </h2>
      <hr />
      <br />

      <div class="field has-addons">
         <div id="inputkeyword_no" class="input-group mb-3">
          <input
            type="text"
            class="form-control"
            placeholder="insert keyword"
            aria-label="insert word"
            v-model="keyword_no"
            aria-describedby="basic-addon2"
          />
        </div>
        <div id="inputword" class="input-group mb-3">
          <div class="texttitle">Parameter (BOT)</div>
          <input
            type="text"
            class="form-control"
            placeholder="insert keyword"
            aria-label="insert word"
            v-model="keyword"
            aria-describedby="basic-addon2"
          />
        </div>
      </div>
      <div class="field has-addons">
        <div id="inputtrainword" class="input-group mb-3">
          <form action="" method="post">
            <table style="width: 600px">
              <colgroup>
                <col style="width: 80%" />
                <col style="width: 20%" />
              </colgroup>
              <tr>
                <th>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="train word"
                    aria-label="insert word"
                    v-model="wordtrain"
                    aria-describedby="basic-addon2"
                  />
                </th>
                <th>
                  <button
                    type="submit"
                    class="btn btn-outline-dark"
                    @click="addItem"
                    :disabled="!wordtrain"
                  >
                    Add
                  </button>
                </th>
              </tr>
            </table>
          </form>
        </div>
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
      keyword_no:"",
    };
  },
  async mounted() {
    let newdata = {
      keyword: this.keyword,
      items: this.items,
      keyword_no: this.keyword_no
    };
    const response = await axios.get("api/Trainbotwords/", newdata);
    this.newdata = response.data;
    this.keyword_no = this.newdata.length + 1 //generate station_no
    console.log(newdata);
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
        keyword_no: this.keyword_no
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
  width: 480px;
}
#inputkeyword_no {
  width: 480px;
}
#inputtrainword {
  width: 450px;
}
.wordtrain {
  width: 450px;
}
.texttitle {
  color: rgb(0, 0, 0);
  margin-left: -100px;
  font-weight: bolder;
  width: 100px;
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