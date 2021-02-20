<template>
  <div class="res">
    <table>
      <tr>
        <th><h2>Training Phase</h2></th>
        <th>
          <button type="button" class="btn btn-outline-warning">
            <router-link to="/chat/startTrain" class="btn"
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
         <button class="perpagebtn"
                @click="changePerPage(perPageOption)">                
                {{perPageOption}} 
          </button>
       </span>
      entries
    </div>
    

    <table id="tabletran" class="table" >
      
     <!-- <colgroup>
        <col style="width: 20%" />
        <col style="width: 50%" />
        <col style="width: 20%" />
        <col style="width: 10%" />

      </colgroup>
      <thead class="thead-dark">
        <tr>
          <th scope="col">No.</th>
          <th scope="col">Parameter</th>
          <th scope="col">Amount words</th>
          <th scope="col">Edit</th>

        </tr>
      </thead> -->
        
      
      <thead class="thead-dark" >
        <tr> 
          <div  style="width: 100%">
              <th style="width: 10%">no.</th>
              <th style="width: 50%">Parameter</th>
              <th style="width: 50%">Amount words</th>
              <th style="width: 10%">Edit</th>
          </div>
        </tr> 
      </thead>
    

      <div  v-if="countCustomer() > 0" > 
          <tbody v-for="(detail, i) in details" :key="detail._id"  >
            <tr v-if="i >= startIndex && i < endIndex">
                <th style="width: 10%">{{i+1}}</th>
                 
                <th style="width: 53%" scope="row" >{{ detail.keyword }}</th>
                 
                  <td >
                    <div v-for="(item, index) in detail.items" :key="item._id" >
                      <p v-if="index <= 2">{{ item }}</p>
                    </div>
                    
                  </td>

              <td >             
                <router-link :to="{ path: '/chat/editTrain/' + detail._id }" >
                  <button class="btn btn-warning">
                    <i class="fas fa-edit"></i>
                  </button>
                </router-link>          
              </td>
          </tr>    
          </tbody>        
      </div>
      
      <tbody v-else>
				<tr>
					<td colspan="4" style="font-size: 20px"><b>No data to show</b></td>
				</tr>
			</tbody>
    </table>

      <div class="float-left mt-4">
          <p>Showing {{startIndex + 1}} to {{endIndex}} of {{details.length}} entries</p>
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
    
    <!-- <nav id="navtran" aria-label="Page navigation example">
      <ul class="pagination">
        <li class="page-item"><a class="page-link" href="#">Previous</a></li>
        <li class="page-item"><a class="page-link" href="#">1 </a></li>
        <li class="page-item"><a class="page-link" href="#">2</a></li>
        <li class="page-item"><a class="page-link" href="#">3</a></li>
        <li class="page-item"><a class="page-link" href="#">Next</a></li>
      </ul>
    </nav> -->
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
        keyword: "",
        items: [],
      },
      perPage: 5 ,
      currentPage : 1,
			startIndex : 0,
			endIndex : 5,
      pageSizes: [5, 10, 15, 20],
    };
  },
  async mounted() {

    const response = await axios.get("api/Trainbotwords/", {
      keyword: this.details.keyword,
      items: this.details.items
    });
    this.details = response.data;
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


<style lang="scss" scoped>
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
// .pagination{
  
//   background: rgb(255, 255, 255);
//   padding: 10px 20px;
//   border-radius: 50px ;
//   box-shadow: 0 5px 15px rgba(0,0,0,.2);
// }
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


 
  
}


</style>