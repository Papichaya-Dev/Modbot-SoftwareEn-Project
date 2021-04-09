<template>
  <div class="res">
    <table>
      <tr>
        <th><h2>Keyword Table</h2></th>
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
   
    <!-- ตัวsearch ข้อมูลออกมาแสดงให้ดู ช่องsearch -->
    <div class=" form-group pull-right">
    <input type="text" class="search form-control" placeholder="Search Keyword & Items." v-model="query">
    </div>
  <span class="counter pull-right"></span>
    <table class="table table-hover table-bordered results">
  
      
    <div id="select" class="showNum text-left">
      Show
     

        <span v-for="perPageOption in pageSizes" :key="perPageOption">
          <button class="perpagebtn btn-light  "

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
        
       <table class="table table-hover table-bordered results">
     
      <thead class="thead-dark" >
        <tr align="center"> 
         
              <th>No.</th>
              <th>Keyword</th>
              <th>Item words</th>
              <th>Edit</th>
         
        </tr> 
      </thead>
       <tbody  v-for="(detail) in searchResult" :key="detail._id">   
         <tr>
         <td style="width: 10%">{{ detail.detail+1 }} </td>
        <td style="width: 25%">
          {{ detail.keyword }}
        </td > 
       <td style="width: 25%">
          {{ detail.items }}
        </td > 
       <td >             
                <router-link :to="{ path: '/chat/editTrain/' + detail._id }" >
                  <button class="btn btn-warning">
                    <i class="fas fa-edit"></i>
                  </button>
                </router-link>          
              </td>
         
      </tr>
      </tbody> 
      
   
          <tbody v-for="(detail, i) in details" :v-if="countCustomer() > 0" :key="detail._id"  >
            <tr v-if="i >= startIndex && i < endIndex && searchResult.length == 0">
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
   
      
      <tbody>
				<tr>
					<td colspan="4" style="font-size: 20px"><b>No data to show</b></td>
				</tr>
			</tbody>
    </table>
  </table>
  </table>
      <div v-if="currentPage !== totalPages" class="float-left mt-4" >
          Showing {{startIndex + 1}} to {{endIndex}} of {{details.length}} entries      
      </div>
      <div v-if="currentPage == totalPages" class="float-left mt-4" >

          Showing {{startIndex + 1}} to {{details.length}} of {{details.length}} entries      
      </div>

    <div class="pagination float-right mt-4">
			<button class="Prebtn btn-light" @click="previous" >Previous</button>
        <button class="numbtn btn-light" 

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
        keyword: "",
        items: [],
         searchResult:[]
      },
       query:'',
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
     searchResult() {
      let tempPost = this.details
      console.log(tempPost);
      if (this.query != '' && this.query) {
            tempPost = tempPost.filter((item) => {
              if(item.keyword.includes(this.query) != false) {
                return item.keyword.includes(this.query)
              }
              if(item.items.includes(this.query) != false) {
                return item.items.includes(this.query)
              }
                  
            })
          } else {
            return this.query
            // return null
          }
          console.log(this.post);
          
        return tempPost
        
    },
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