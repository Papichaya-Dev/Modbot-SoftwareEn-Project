<template>
  <div id="app">
     <button id="btn" type="button" class="btn btn-outline-primary">
            <router-link to="/chat/trainbot" class="btn"
              ><i class="fas fa-caret-left fa-lg"></i>&nbsp;BACK</router-link
            >
    </button>
    <h1 id="texttopic" class="subtitle has-text-centered">Create Trainbot Messege</h1>
    <hr />
   
     <div class="field has-addons">
      <div id="inputword" class="input-group mb-3">
         <div class="texttitle">Parameter (BOT) </div>
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
        <div class="edit" >
          <button id="btnedit"
            class="btn btn-success"
            @click="isSelected(item) ?  unselect() : select(item)"
          >
            <i class="material-icons">{{isSelected(item) ? 'close': 'edit'}}</i>
          </button>
          <button id="btndelete"
           class="btn btn-danger"
            @click="isSelected(item) ? updateItem(item, i) : removeItem(item, i)"
          >
            <i class="material-icons">{{isSelected(item) ? 'save': 'delete'}}</i>
          </button>
        </div>
      </div>
    </div>
     <button id="btnreset" type="reset">Reset</button>
      <button id="btncrete" type="submit">Create</button>
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
.texttitle {
  color: rgb(0, 0, 0);
  margin-left: -100px;
  font-weight:bolder ;
  width: 100px;
}
.edit {
  margin-left: 300px;
  margin-top: -35px;
}
#btnedit {
  margin-left: 150px;
  font-family: 'DM Serif Display', serif;
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
	};
}
#btndelete {
  font-family: 'DM Serif Display', serif;
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
	};
}
#btnreset {
  margin-left: 10px;
  margin-top: 15px;
}
#btncrete {
  margin-left: 20px;
}
</style>
