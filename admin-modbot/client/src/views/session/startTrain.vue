<template>
  <div id="app">
     <button id="btn" type="button" class="btn btn-outline-primary">
            <router-link to="/chat/trainbot" class="btn"
              ><i class="fas fa-caret-left fa-lg"></i>&nbsp;BACK</router-link
            >
    </button>
    <h1 class="subtitle has-text-centered">Create Trainbot Messege</h1>
    <hr />
    <div>Parameter (BOT) </div>
     <div class="field has-addons">
      <div id="inputword" class="input-group mb-3">
     <input type="text" class="form-control" placeholder="insert keyword" aria-label="insert word" v-model="description" aria-describedby="basic-addon2">
    </div>
    <br/>
    <div class="btnaddword" >
        <!-- <a class="button is-info" @click="addItem" :disabled="!description">Add</a> -->
        <button type="button" class="btn btn-outline-dark" @click="addItem" :disabled="!description">Add</button>

      </div>
    </div>
    <div class="field has-addons">
      <div id="inputtrainword" class="input-group mb-3">
     <input type="text" class="form-control" placeholder="train word" aria-label="insert word" v-model="description" aria-describedby="basic-addon2">
    </div>
    <div class="btntrainword" >
        <!-- <a class="button is-info" @click="addItem" :disabled="!description">Add</a> -->
        <button type="button" class="btn btn-outline-dark" @click="addItem" :disabled="!description">Add</button>

      </div>
    </div>
    <br/>
    <div class="wordtrain" v-for="(item, i) in items" :key="item._id">
      <div  class="list-group-item list-group-item-info">
        <input class="column input" v-if="isSelected(item)" v-model="editedDescription" />
        <p v-else class="column">
          <span class="tag is-primary">{{ i + 1}}</span>
          {{ item.description }}
        </p>
        <div class="column is-narrow">
          <span
            class="icon has-text-primary"
            @click="isSelected(item) ?  unselect() : select(item)"
          >
            <i class="material-icons">{{isSelected(item) ? 'close': 'edit'}}</i>
          </span>

          <span
            class="icon has-text-info"
            @click="isSelected(item) ? updateItem(item, i) : removeItem(item, i)"
          >
            <i class="material-icons">{{isSelected(item) ? 'save': 'delete'}}</i>
          </span>
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
      items: [],
      description: "",
      editedDescription: "",
      selected: {}
    };
  },
  async mounted() {
    const response = await axios.get("api/bucketListItems/");
    this.items = response.data;
  },
  methods: {
    async addItem() {
      const response = await axios.post("api/bucketListItems/", {
        description: this.description
      });
      this.items.push(response.data);
      this.description = "";
    },
    async removeItem(item, i) {
      await axios.delete("api/bucketListItems/" + item._id);
      this.items.splice(i, 1);
    },
    select(item) {
      this.selected = item;
      this.editedDescription = item.description;
    },
    isSelected(item) {
      return item._id === this.selected._id;
    },
    unselect() {
      this.selected = {};
      this.editedDescription = "";
    },
    async updateItem(item, i) {
      const response = await axios.put("api/bucketListItems/" + item._id, {
        description: this.editedDescription
      });
      this.items[i] = response.data;
      this.unselect();
    }
  }
};
</script>

<style scoped>
#app {
  margin: auto;
  margin-top: 3rem;
  max-width: 700px;
}
.icon {
  cursor: pointer;
}
#btn {
  margin-left: 750px;
  margin-top: -30px;
}
.inputword {
  height: -150px;
}
#control {
  height: -150px;
}
.btnaddword {
  margin-left: 350px;
  margin-top: -80px;
}
.btntrainword {
  margin-left: 350px;
  margin-top: -55px;
}
#inputword {
  width: 450px;
}
#inputtrainword {
  width: 450px;
  margin-top: 30px;
}
.wordtrain {
    width: 450px;
}
</style>
