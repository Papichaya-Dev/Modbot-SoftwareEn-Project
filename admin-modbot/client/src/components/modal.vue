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
            
            <table id="table" class="table">
              <tbody>
                <tr>
                  <th scope="row">Date</th>
                  <td>28/11/2020</td>
                </tr>
                <tr>
                  <th scope="row">Time</th>
                  <td>12:30 AM</td>
                </tr>
                <tr>
                  <th scope="row">Username</th>
                  <td>Markie Kun</td>
                </tr>
                <tr>
                  <th scope="row">Case</th>
                  <td>My Treasure</td>
                </tr>
              </tbody>
            </table>
            <div class="description">
              <form>
                <div class="col-12 form-group">
                  <span><p>???????????????????????????????????</p></span>
                  <input type="input" class="form-control form-control-lg">
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
            >
          </slot>
        </footer>
      </div>
    </div>
  </transition>
</template>
<script>
  export default {
    name: 'modal',
    methods: {
      close() {
        this.$emit('close');
      },
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