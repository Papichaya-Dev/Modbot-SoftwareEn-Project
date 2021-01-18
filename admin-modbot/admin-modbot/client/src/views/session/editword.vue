<template>
  <div id="app">
    <!-- <button id="btn" type="button" class="btn btn-outline-primary">
            <router-link to="/chat/trainbot" class="btn"
              ><i class="fas fa-caret-left fa-lg"></i>&nbsp;BACK</router-link
            >
    </button> -->
    <div class="container">
      <h2 id="texttopic" class="subtitle has-text-centered">
        Edit Trainbot Messege
      </h2>
      <hr />
      <br />

      <div class="field has-addons">
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
        <!-- <br />v-model="keyword"
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
      <div class="field has-addons">
        <div id="inputtrainword" class="input-group mb-3">
          <form>
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
    <div class="wordtrain" v-for="(item, i) in details.items" :key="item._id">
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
    <router-link to="/chat/trainbot">
      <button
        id="btnreset"
        type="reset"
        class="btn btn-danger"
        @click="deleteBtn"
      >
        Delete
      </button>
    </router-link>
    &nbsp;
    <router-link to="/chat/trainbot">
      <button
        id="btncrete"
        type="submit"
        class="btn btn-success"
        @click="saveItem"
      >
        Save
      </button>
    </router-link>
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
      },
    };
  },
  async mounted() {
    const response = await axios.get("api/Trainbotwords/" + this.id, {
      keyword: this.details.keyword,
      items: this.details.items,
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
      };
      const response = await axios.post(
        "api/Trainbotwords/" + this._id,
        newdata
      );
      this.newdata = response.data;
      const res = await axios.delete("api/Trainbotwords/" + this.id);
      console.log(res);
    },
    async removeItem(item, i) {
      // await axios.delete("api/Trainbotwords/" + item);
      console.log(item);
      this.details.items.splice(i, 1);
    },
    async deleteBtn() {
      const res = await axios.delete("api/Trainbotwords/" + this.id);
      console.log(res);
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
