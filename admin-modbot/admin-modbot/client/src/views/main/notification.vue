<template>
  <div class="container">
      <h2>Notifications</h2>

    <!-- <div id="select" class="showNum text-left">
      Show
     
          <span v-for="perPageOption in pageSizes" :key="perPageOption">
         <button class="perpagebtn"
                @click="changePerPage(perPageOption)">                
                {{perPageOption}} 
          </button>
       </span>
      entries
    </div>

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
		</div> -->
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Admin Profile",
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
    console.log(this.info)
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
</style>