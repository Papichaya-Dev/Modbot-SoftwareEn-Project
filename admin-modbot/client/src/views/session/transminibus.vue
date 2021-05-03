<template>
  <div class="res">
     <tr>
        <th><h2 id="texttopic" class="subtitle has-text-centered">
          <i class="material-icons"><span class="material-icons">directions_bus</span></i> Mini-Bus Routes</h2></th>
        <th>
          <button type="button" class="btn btn-outline-warning">
            <router-link to="/transport/addMinibus" class="btn"
              ><i class="fas fa-plus-circle fa-lg"></i>&nbsp;New</router-link
            >
          </button>
        </th>
      </tr>
       <colgroup>
        <col style="width: 90%" />
        <col style="width: 10%" />
      </colgroup>
    <div class=" form-group pull-right">
    <input type="text" class="search form-control" placeholder="Search Mini-Bus" v-model="query">
    </div>
  <span class="counter pull-right"></span>
  <table class="table table-hover table-bordered results">
  
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
    <table class="table table-hover table-bordered results">
      
      <thead class="thead-dark">
        <tr>
            <th>MiniBus No.</th>
            <th>Color</th>
            <th>Starting Point</th>
            <th>Destination Point</th>
            <th>Edit</th>
        </tr>
      </thead>
       <tbody  v-for="(detail) in searchResult" :key="detail._id">   
         <tr>
         <td style="width: 10%">{{ detail.minibus_no }} </td>
        <td style="width: 25%">
          {{ detail.color }}
        </td > 
        <td style="width: 20%">
          {{ detail.starting_point }}
        </td> 
        <td style="width: 25%">
          {{ detail.destination_point }}
        </td> 
       <td style="width: 25%">
              <router-link :to="{ path: '/transport/editMinibus/' + detail._id }"
                ><button class="btn btn-warning">
                  <i class="fas fa-edit"></i></button
              ></router-link>
            </td>
           
      </tr>
      </tbody>    
        <tbody v-for="(detail,i) in details" :v-if="countCustomer() > 0 " :key="detail._id">
          <tr v-if="i >= startIndex && i < endIndex && searchResult.length == 0">
            <th style="width: 15%" >{{ detail.minibus_no }}</th>
            <td style="width: 15%">{{ detail.color }}</td>
            <td style="width: 20%"> {{ detail.starting_point }}</td>
            <td style="width: 25%"> {{ detail.destination_point }}</td>
            <td style="width: 10%">
              <router-link :to="{ path: '/transport/editMinibus/' + detail._id }"
                ><button class="btn btn-warning">
                  <i class="fas fa-edit"></i></button
              ></router-link>
            </td>
          </tr>
        </tbody>
    </table>
    </table>
     <div v-if="currentPage !== totalPages" class="float-left mt-4" >
          Showing {{startIndex + 1}} to {{endIndex}} of {{details.length}} entries      
      </div>
      <div v-if="currentPage == totalPages" class="float-left mt-4" >
          Showing {{startIndex + 1}} to{{details.length}} of {{details.length}} entries      
      </div>

  <div class="pagination float-right mt-4">
    <button type="button" 
        class="Prebtn btn-light "        
        @click="page--"
        v-on:click="first"> 
        <i class="fa fa-angle-double-left"></i> 
      </button>

			<button type="button" 
        class="Prebtn btn-light "        
        @click="page--"
        v-on:click="previous"> 
        <i class="fa fa-angle-left"></i> 
      </button>

      <div v-for="pageNumber in showpage" :key="pageNumber">
        <button  
          class="numbtn btn-light " 
          data-toggle="buttons" 
          @click="page = pageNumber"
          v-on:click="pagination(pageNumber)"
          v-if="pageNumber >= currentPage && pageNumber <= totalPages"
        > 
          {{pageNumber}} 
        </button>
      </div>
      
			<button 
        type="button" 
        @click="page++"
        v-on:click="next"
        v-if="page < pages.length && next" 
        class="Prebtn btn-light"> 
        <i class="fa fa-angle-right"></i>
      </button>

      <button 
        type="button" 
        @click="page++"
        v-on:click="last"
        v-if="page < pages.length" 
        class="Prebtn btn-light"> 
        <i class="fa fa-angle-double-right"></i>
      </button>
		</div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Bus",
  created() {
    document.title = "ModBot | " + this.$options.name;
  },
  data() {
    return {
      details: {
        minibus_no: "",
        starting_point: "",
        destination_point: "",
        station:"",
        fares:"",
        searchResult:[]
      },
      query:'',
      perPage: 5 ,
      currentPage : 1,
			startIndex : 0,
			endIndex : 5,
      pageSizes: [5, 10, 15, 20],
      selectedBus:"",
      pages: [], 
      page: 1,
    };
  },
  async mounted() {
    const response = await axios.get("api/Minibusroutes/", {
      minibus_no: this.details.minibus_no,
      color: this.details.color,
      starting_point: this.details.starting_point,
      destination_point: this.details.destination_point,
    });
    this.details = response.data;
    console.log(this.details);
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
          } ,
          last(){
          this.pagination(this.totalPages)-this.totalPages;                
        },
        first(){
          this.pagination(1); 
        },
   async deleteBtn(selectedBus) {
    console.log(selectedBus)
    const res = await axios.delete("api/Minibusroutes/" + selectedBus);
    console.log(res);
    location.reload();
  },
   sendInfo(info) {
      return this.selectedBus = info
    } ,
     setPages () {
      let numberOfPages = Math.ceil(this.details.length / this.perPage);
      for (let index = 1; index <= numberOfPages; index++) {
        this.pages.push(index);
      }
    },
    paginate (details) {
      let page = this.page;
      let perPage = this.perPage ;
      let from = (page * perPage) - perPage;
      let to = (page * perPage);
      return  details.slice(from, to) ;
    }
     
  },
  computed: {
      searchResult() {
      let tempPost = this.details
      console.log(tempPost);
      if (this.query != '' && this.query) {
            tempPost = tempPost.filter((item) => {
              if(item.bus_no.includes(this.query) != false) {
                return item.bus_no.includes(this.query)
              }
              if(item.color.includes(this.query) != false) {
                return item.color.includes(this.query)
              }
              if(item.type.includes(this.query) != false) {
                return item.type.includes(this.query)
              }
              if(item.way.includes(this.query) != false) {
                return item.way.includes(this.query)
              }
              if(item.aircon.includes(this.query) != false) {
                return item.aircon.includes(this.query)
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
    },
    displayedPosts () {
      return this.paginate(this.details);
    },
    showpage() {
      return this.currentPage + 4
    },
  },
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