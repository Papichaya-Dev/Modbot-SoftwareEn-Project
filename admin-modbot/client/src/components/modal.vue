<template>
  <transition name="modal-fade">
    <div class="modal-backdrop">
      <div class="modal"
        role="dialog"
        aria-labelledby="modalTitle"
        aria-describedby="modalDescription"
      >
        <header
          class="modal-header"
          id="modalTitle"
        >
          <slot name="header">
            <p>Report from Users</p>
            <button
              type="button"
              class="btn-close"
              @click="close"
              aria-label="Close modal"
              >
                x
              </button>
          </slot>
        </header>
        <section
          class="modal-body"
          id="modalDescription"
        >
          <slot name="body">
            
            <table id="table" class="table" >
              <tbody>
                <tr>
                  <th scope="row"></th>
                  <td>
                    <div v-for="date in date" :key="date">
                      <p>{{ date }}</p>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th scope="row"></th>
                  <td>
                    <div v-for="time in date" :key="time">
                      <p>{{ time }}</p>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th scope="row"></th>
                  <td>
                    <div v-for="userId in userId" :key="userId">
                      <p>{{ username }}</p>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th scope="row"></th>
                  <td>
                    <div v-for="text in suggestion" :key="text">
                      <p>{{ suggestion }}</p>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th scope="row"></th>
                  <td>
                    <div v-for="text in problem" :key="text">
                      <p>{{ problem }}</p>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
            <div class="description">
              <form>
                <div class="col-12 form-group">
                  <input type="text" 
                    class="form-control form-control-lg"
                    aria-label="insert answer"
                    v-model="answer"
                    aria-describedby="basic-addon2"
                  >
              </div>
              </form>
            </div>
        
          </slot>
        </section>
        <footer class="modal-footer">
          <slot name="footer">
            <button
              type="button"
              class="btn-blue"
              @click="close"
              aria-label="Close modal"
            >
              Auto Message
            </button>
            <input 
              class="btn-blue"
              type="submit"
              value="Send"
              @click="addAnswer"
              :disabled="!answer"
            >
          </slot>
        </footer>
      </div>
    </div>
  </transition>
</template>
<script>
  import axios from 'axios';
  export default {
    name: 'modal',
    data() {
      return {
        userId: "",
        suggestion: {
          text: ['1'],
        },
        problem: {
          text: ['2'],
        },
        date: "",
        answer: {
          text: [],
        }
      }
    },
    async mounted() {
      let newquest = {
        userId: this.userId,
        Scase: this.suggestion.text,
        Pcase: this.problem.Pcase,
        date: this.date,
        Acase: this.answer.Acase,
      };
      const response = await axios.get("api/Question/", newquest);
      this.newquest = response.data;
      console.log(newquest);
    },
    methods: {
      close() {
        this.$emit('close');
      },
      async addAnswer() {
        this.Acase.push(this.problem.Pcase);
        console.log(this.Acase);
        this.problem.Pcase = "";
      },
      async addParamtoAPI() {
        let newquest = {
         userId: this.userId,
          Scase: this.suggestion.text,
          Pcase: this.problem.Pcase,
          date: this.date,
          Acase: this.answer.Acase,
        };
        const response = await axios.post("api/Question/", newquest);
        this.newquest = response.data;
        console.log(newquest);
        location.reload();
      },
      // select(case) {
      //   this.selected = case;
      //   this.sendAnswer = case.answer;
      // },
      // unselect() {
      //   this.selected = {};
      //   this.sendAnswer = "";
      // },
      // async answerQuest(case, i) {
      //   const response = await axios.put("api/Question" + question._id, {
      //     answer: this.sendAnswer,
      //   });
      //   this.case[i] = response.data;
      //   this.unselect();
      // },
    },
  };
</script>
<style>
  .modal-backdrop {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .modal {
    background: #FFFFFF;
    box-shadow: 2px 2px 20px 1px;
    width: 550px;
    height: 550px;
    overflow-x: auto;
    display: flex;
    flex-direction: column;
  }

  .modal-header,
  .modal-footer {
    padding: 15px;
    display: flex;
  }

  .modal-header {
    border-bottom: 1px solid #eeeeee;
    color: #7e7dec;
    justify-content: space-between;
  }

  .modal-footer {
    border-top: 1px solid #eeeeee;
    justify-content: flex-end;
  }

  .modal-body {
    position: relative;
    padding: 20px 10px;
  }

  .btn-close {
    border: none;
    font-size: 20px;
    padding: 20px;
    cursor: pointer;
    font-weight: bold;
    color: #7e7dec;
    background: transparent;
  }

  .btn-blue {
    color: white;
    background: #7e7dec;
    border: 1px solid #7e7dec;
    border-radius: 2px;
  }
</style>