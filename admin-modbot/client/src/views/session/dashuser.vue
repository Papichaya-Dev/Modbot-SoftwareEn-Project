<template>
  <div class="res">
    <table>
      <tr>
        <th><h2>Bus route for Check bus stop</h2></th>
        <th>
          <button type="button" class="btn btn-outline-warning">
            <router-link to="/dashboard/addBusdata" class="btn"
              ><i class="fas fa-plus-circle fa-lg"></i>&nbsp;New</router-link
            >
          </button>
        </th>
      </tr>
      <colgroup>
        <col style="width: 90%" />
        <col style="width: 10%" />
      </colgroup>
    </table>
    <form id="btnbusnum" class="form-inline">
      <input
        id="searchbtn"
        class="form-control my-1 mr-sm-2"
        type="text"
        placeholder="Search"
        aria-label="Search"
        v-model="search"
      />
      <label class="my-1 mr-2" for="inlineFormCustomSelectPref"> By </label>
      <select
        class="custom-select my-1 mr-sm-2"
        id="inlineFormCustomSelectPref"
      >
        <option selected>Lastest</option>
        <option value="1">Parameter</option>
        <option value="2">Word</option>
      </select>
    </form>

    <div id="select" class="showNum text-left">
      Show
     
          <span v-for="perPageOption in pageSizes" :key="perPageOption">
         <button class="perpagebtn btn-light"
                @click="changePerPage(perPageOption)">                
                {{perPageOption}} 
          </button>
       </span>
      entries
    </div>
    <table id="tabletran" class="table">
      
      <thead class="thead-dark">
        <tr>
          <div style="width: 100%">
          <th style="width: 10%">Bus no.</th>
          <th style="width: 30%">Startingpoint</th>
          <th style="width: 30%">Destination</th>
          <th style="width: 15%">Color</th>
          <th style="width: 15%">Bus type</th>
          <th style="width: 10%">Running type</th>
          <th style="width: 10%">Edit</th>
          </div>
        </tr>
      </thead>
      <div  v-if="countCustomer() > 0" > 
        <tbody v-for="(detail, i) in details" :key="detail._id">
          <tr v-if="i >= startIndex && i < endIndex">
          
            <th style="width: 10%">{{ detail.bus_no }}</th>
            <th style="width: 45%">{{ detail.startingpoint }}</th>
              <th scope="row">{{ detail.destination }}</th>
              <th scope="row">{{ detail.color }}</th>
              <th scope="row">{{ detail.bus_type }}</th>
              <th scope="row">{{ detail.running_type }}</th>
            <!-- <td>
              <div v-for="(bus_stop, index) in detail.bus_stop" :key="bus_stop._id">
                <p v-if="index <= 4">{{ bus_stop.bus_stop_name }}</p>
              </div>
            </td>  
            <td>
              <div v-for="(item, index) in detail.items" :key="item._id">
                <p v-if="index <= 4">{{ item }}</p>
              </div>
            </td>
            <td >
              <div v-for="(bus_stop, index) in detail.bus_stop" :key="bus_stop._id">
                <p v-if="index <= 4">{{ bus_stop.longitude }}</p>
              </div>
            </td>  
            <td>
              <div v-for="(bus_stop, index) in detail.bus_stop" :key="bus_stop._id">
                <p v-if="index <= 4">{{ bus_stop.latitude }}</p>
              </div>
            </td>  -->
            <td>
              <router-link :to="{ path: '/dashboard/editBusdata/' + detail._id }"
                ><button class="btn btn-warning">
                  <i class="fas fa-edit"></i></button
              ></router-link>
            </td>
          </tr>
        </tbody>
      </div>
    </table>
    <div v-if="currentPage !== totalPages" class="float-left mt-4" >
          Showing {{startIndex + 1}} to {{endIndex}} of {{details.length}} entries      
      </div>
      <div v-if="currentPage == totalPages" class="float-left mt-4" >
          Showing {{startIndex + 1}} to {{details.length}} of {{details.length}} entries      
      </div>
    <div class="pagination float-right mt-4">
			<button class="Prebtn btn-light " @click="previous" >Previous</button>
        <button class="numbtn btn-light " 
        data-toggle="buttons" 
        v-for="num in totalPages" :key="num._id" 
        @click="pagination(num)"
        >
        {{num}}</button>
			<button class="Nextbtn btn-light shadow-none" @click="next">Next</button>
		</div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Training",
  created() {
    document.title = "ModBot | " + this.$options.name;
  },
  data() {
    return {
      details: {
        bus_no: "",
        startingponit:"",
        destination:"",
        color:"",
        bus_type:"",
        running_type:"",
        bus_stop: [],
        bus_stop_name: "",
        latitude: "",
        longitude:"",
        type:""
      },
      perPage: 5 ,
      currentPage : 1,
			startIndex : 0,
			endIndex : 5,
      pageSizes: [5, 10, 15, 20],
    };
  },
  async mounted() {
    const response = await axios.get("api/Busdata/", {
      bus_no: this.bus_no,
      startingponit: this.startingponit,
      destination: this.destination,
      color: this.color,
      bus_type: this.bus_type,
      running_type: this.running_type,
      bus_stop: this.bus_stop,
      bus_stop_name: this.bus_stop_name,
      latitude: this.latitude,
      longitude: this.longitude,
      type:""
    });
    this.details = response.data;
    console.log(this.details);
  },
  methods: {
    async deleteItem() {
      var id = event.target.getAttribute("data-id");
      console.log(id);
      const response = await axios.delete("api/Busdata/" + id);
      console.log(response.data);
      alert("Deleted! : " + response.data.bus_no)
      location.reload();
    },
pagination(activePage) {
      
					this.currentPage = activePage;
					this.startIndex = (this.currentPage * this.perPage) - this.perPage;
					this.endIndex = this.startIndex + this.perPage;
          console.log(this.startIndex)
				},
				countCustomer() {
					var count_cust = 0;
					for(var index = 0; index < this.details.length; index++){
						count_cust++;
					}
					return count_cust;
				},
				previous() {
          if (this.currentPage > 1) {
            return this.pagination(this.currentPage - 1);
          }
				},
				next() {
          if (this.currentPage < this.totalPages) {
            this.pagination(this.currentPage + 1);
          }
				},
         changePerPage(newPerPage) {
           this.perPage = newPerPage;
           this.currentPage = 1;
           return this.pagination(this.currentPage)
          }  

     
  },
  computed: {
    totalPages() {
      return Math.ceil(this.details.length / this.perPage)
    }
  }

};

</script>


<style scoped>
h2 {
  padding: 4% 2%;
  text-align: left;
}
.showNum {
  padding: 3% 2%;
}
tbody th, tbody td {   
  text-align: center;
  width: 100%;
  white-space: nowrap;
}
.Prebtn, .Nextbtn, .numbtn, button.perpagebtn {
  background: rgb(255, 255, 255);
  padding: 5px 13px;
  border-radius: 50px ;
  box-shadow: 0 5px 15px rgba(56, 56, 56, 0.2);
  
}

.Prebtn:hover, .Nextbtn:hover, .numbtn:hover{
  background-color: rgb(221, 218, 218);
  color: black;
}
.Prebtn:focus, .Nextbtn:focus, .numbtn:focus , button.perpagebtn:focus{
  outline: 0;
}

.perpagebtn{
  margin: 2px;
  border-radius: 3px;
  font-size: 1em;
  cursor: pointer;
}
</style>