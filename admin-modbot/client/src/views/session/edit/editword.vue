<template>
  <div id="app">
    <div class="container">
      <h2 id="texttopic" class="subtitle has-text-centered">
         <i class="fas fa-edit"></i> Edit Trainbot Messege
      </h2>
      <hr />
      <br />

      <div class="field has-addons">
        <div id="inputkeyword_no" class="input-group mb-3">
          <input
            type="text"
            class="form-control bg-light"
            placeholder="insert keyword"
            aria-label="insert word"
            v-model="details.keyword_no"
            aria-describedby="basic-addon2"
            disabled
          />
        </div>
        <div id="inputword" class="input-group mb-3">
          <div class="texttitle">Parameter (BOT)</div>
          <input
            type="text"
            class="form-control"
            placeholder="insert keyword"
            aria-label="insert word"
            v-model="details.keyword"
            aria-describedby="basic-addon2"
          />
        </div>
        
      </div>
      <div class="field has-addons">
        <div id="inputtrainword" class="input-group mb-3">
          <form>
            <table style="width: 500px">
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
    <div class="wordtrain" v-for="(item, i) in details.items" :key="item._id">
      <div class="list-group-item">
        <p class="column">
          <span class="tag is-primary"></span>
          {{ item }}
        </p>
        <div class="edit">
          <button
            id="btndelete"
            class="btn btn-danger"
            @click="removeItem(item, i)"
          >
            <i class="material-icons"><i class="fas fa-minus-circle"></i></i>
          </button>
        </div>
      </div>
    </div>
    <br />
    <button
      type="button"
      class="btn btn-danger"
      data-toggle="modal"
      data-target="#deleteModal"
    >
      Delete
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
            <router-link to="/chat/trainbot">
              <button
                id="btnreset"
                type="reset"
                class="btn btn-danger"
                @click="deleteBtn"
              >
                Delete
              </button></router-link
            >
          </div>
        </div>
      </div>
    </div>

    &nbsp;
    <button
      type="button"
      class="btn btn-primary"
      data-toggle="modal"
      data-target="#exampleModal"
    >
      Save
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
                @click="saveItem"
              >
                Save Changes
              </button></router-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "App",
  data() {
    return {
      id: this.$route.params.id,
      wordtrain: "",
      editedwordtrain: "",
      selected: {},
      details: {
        keyword: "",
        items: [],
        keyword_no:"",
      },
    };
  },
  async mounted() {
    const response = await axios.get("api/Trainbotwords/" + this.id, {
      keyword: this.details.keyword,
      items: this.details.items,
      keyword_no: this.details.keyword_no
    });
    this.details = response.data;

    console.log(this.details.keyword);
  },
  methods: {
    async addItem() {
      this.details.items.push(this.wordtrain);
      console.log(this.details.items);
      this.wordtrain = "";
    },
    async saveItem() {
      let newdata = {
        keyword: this.details.keyword,
        items: this.details.items,
        keyword_no: this.details.keyword_no
      };
      const response = await axios.post(
        "api/Trainbotwords/" + this._id,
        newdata
      );
      this.newdata = response.data;
      const res = await axios.delete("api/Trainbotwords/" + this.id);
      console.log(res);
      location.reload();
    },
    async removeItem(item, i) {
      // await axios.delete("api/Trainbotwords/" + item);
      console.log(item);
      this.details.items.splice(i, 1);
    },
    async deleteBtn() {
      const res = await axios.delete("api/Trainbotwords/" + this.id);
      console.log(res);
      location.reload();
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
  width: 400px;
}
#inputkeyword_no {
  width: 400px;
}
.inputtrainword {
  width: 400px;
}
.wordtrain {
  width: 400px;
  margin-top: 10px;
  margin-left: 15px;
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
  padding: 0.2rem;
  color: white;
  width: 80px;
  height: 50px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 300ms ease-in-out;
  margin-top: -50px;
  margin-left: 150px;
  opacity: 0.8;
  background-color: rgb(219, 219, 219);
  letter-spacing: 0.1rem;
  &:hover {
    background-color: rgb(243, 93, 93);
    color: black;
    cursor: pointer;
  }
}
</style>