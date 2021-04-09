<template>
  <div class="container">
      <h2>Admin Profile</h2>
    <!-- <form>
      <div class="form-group mb-2 text-center text-black form-center" style="width:35%">
      <search-component/>
      </div>
    </form> -->


    <div id="select" class="showNum text-left">
      Show
     
          <span v-for="perPageOption in pageSizes" :key="perPageOption">
         <button class="perpagebtn"
                @click="changePerPage(perPageOption)">                
                {{perPageOption}} 
          </button>
       </span>
      entries
    </div>
    
    <table id="tabletran" class="table table-hover text-center">
      <thead class="thead-dark">
        <tr>
            <th>NO.</th>
            <th>Username</th>
            <th>Email</th>
            <th>Active</th>
        </tr> 
      </thead>
      <tbody v-for="(detail, i) in info" :key="detail._id" :v-if="countCustomer() > 0" >
        <tr v-if="i >= startIndex && i < endIndex">
            <th style="width: 10%">{{ i+1 }}</th>
            <th style="width: 10%" scope="col">{{ detail.username }}</th>
            <th style="width: 10%" scope="col">{{ detail.email }}</th>
            <th style="width: 10%" scope="col">{{ detail.date }}</th>
        </tr>
      </tbody>
    </table>

      <div v-if="currentPage !== totalPages" class="float-left mt-4" >
          Showing {{startIndex + 1}} to {{endIndex}} of {{info.length}} entries      
      </div>
      <div v-if="currentPage == totalPages" class="float-left mt-4" >
          Showing {{startIndex + 1}} to{{info.length}} of {{info.length}} entries      
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
// import SearchComponent from '@/components/SearchComponent.vue'
export default {
  name: "Admin Profile",
  // components: {
  //     SearchComponent,
  // },
  created() {
    document.title = "ModBot | " + this.$options.name;
  },
  data() {
    return {
        info: {
          username: '',
          email: '',
          date: ''  
        },
        perPage: 5 ,
        currentPage : 1,
		startIndex : 0,
		endIndex : 5,
        pageSizes: [5, 10, 15, 20],
    }
  },
  async mounted() {
    const response = await axios.get("api/dashboard/", {
      username: this.info.username,
      email: this.info.email,
      date: this.info.date
    });
    this.info = response.data
    console.log(this.info.username)
  },
  methods: {
    pagination(activePage) {
        this.currentPage = activePage;
		this.startIndex = (this.currentPage * this.perPage) - this.perPage;
		this.endIndex = this.startIndex + this.perPage;
        console.log(this.startIndex)
	},
	countCustomer() {
		var count_cust = 0;
		for(var index = 0; index < this.info.length; index++){
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
      return Math.ceil(this.info.length / this.perPage)
    }
  }
};
</script>

<style>
@import "../../../public/stylesheet/style.css";
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
.Prebtn, .Nextbtn, .numbtn{
  background: rgb(255, 255, 255);
  padding: 10px 20px;
  border-radius: 50px ;
  box-shadow: 0 5px 15px rgba(56, 56, 56, 0.2);
  
}
.Prebtn:hover{
  background-color: #ddd;
  color: black;
}
.perpagebtn{
  padding: 2px 8px;
  margin: 5px;
  border-radius: 3px;
  font-size: 1em;
  cursor: pointer;
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