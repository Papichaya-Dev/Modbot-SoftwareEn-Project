<template>
  <div class="container">
    <table>
      <tr>
        <th><h2>Create Response Messege</h2></th>
        <th>
          <button type="button" class="btn btn-outline-primary">
            <router-link to="/chat/responses" class="btn"
              ><i class="fas fa-caret-left fa-lg"></i>&nbsp;BACK</router-link
            >
          </button>
        </th>
      </tr>
      <tr>
        <td><p>### predict messege from user</p></td>
        <th></th>
      </tr>
      <colgroup>
        <col style="width: 90%" />
        <col style="width: 10%" />
      </colgroup>
    </table>
    <br>
    <form action="">
      <div class="param">
        <table>
          <colgroup>
            <col style="width: 60%" />
            <col style="width: 50%" />
          </colgroup>
          <tr>
            <th><p>Response Messege</p></th>
            <td><input type="text" name="res" /></td>
          </tr>
          <tr>
            <th><p>Parameter(BOT)</p></th>
            <td><input type="text" name="param" /></td>
          </tr>
        </table>
      </div>
      <form @submit.prevent="addRes()">
        <input v-model="newRes" name="newRes" autocomplete="off" />
        <button><i class="fas fa-plus-circle"></i></button>
      </form>
      <div class="card">
        <table>
          <tr v-for="(res, index) in resp" :key="index">
            <th class="text-left">
              <span :class="{ done: res.done }" @click="doneRes(res)">{{
                res.content
              }}</span>
            </th>
            <th>
              <button @click="removeRes(index)">
                <i class="fas fa-minus-circle"></i>
              </button>
            </th>
          </tr>
        </table>
      </div>
      <!-- <ul>
        <li>
          
          
        </li>
      </ul> -->
      <h4 v-if="resp.length === 0">Empty list.</h4>
      <button type="reset">Reset</button>
      <button type="submit">Create</button>
    </form>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "App",
  setup() {
    const newRes = ref("");
    const defaultData = [
      {
        done: false,
        content: "Write a blog post",
      },
    ];
    const respData = JSON.parse(localStorage.getItem("resp")) || defaultData;
    const resp = ref(respData);
    function addRes() {
      if (newRes.value) {
        resp.value.push({
          done: false,
          content: newRes.value,
        });
        newRes.value = "";
      }
      saveData();
    }
    function doneRes(res) {
      res.done = !res.done;
      saveData();
    }
    function removeRes(index) {
      resp.value.splice(index, 1);
      saveData();
    }
    function saveData() {
      const storageData = JSON.stringify(resp.value);
      localStorage.setItem("resp", storageData);
    }
    return {
      resp,
      newRes,
      addRes,
      doneRes,
      removeRes,
      saveData,
    };
  },
};
</script>

<style scoped>
h2 {
  padding: 4% 2%;
  text-align: left;
}
p {
  text-align: left;
  padding-left: 4rem;
}
.card {
  padding: 3% 4%;
}
.showNum {
  padding: 3% 2%;
}
</style>