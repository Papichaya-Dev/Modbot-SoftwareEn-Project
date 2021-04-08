<template>
  <div class="res">
      <h2>Bus Routes</h2>
     
    <div class=" form-group pull-right">
    <input type="text" class="search form-control" placeholder="Search Bus No." v-model="query">
    </div>
  <span class="counter pull-right"></span>
  <table class="table table-hover table-bordered results">
    <!-- <tr class="warning no-result">
      <td colspan="4"><i class="fa fa-warning"></i> No result</td>
    </tr>
      <thead> -->
  
      <!-- <th><h2>Bus Routes</h2></th> -->
        
      
      <!-- <th class="col-md-5 col-xs-5">Name / Surname</th>
      <th class="col-md-4 col-xs-4">Job</th>
      <th class="col-md-3 col-xs-3">City</th> -->
    <!-- </tr>
    <tr class="warning no-result">
      <td colspan="4"><i class="fa fa-warning"></i> No result</td>
    </tr>
  </thead> -->
    <!-- <table>
      <tr> -->
        <!-- <th><h2>Bus Routes</h2></th>
        <th> -->
          <!-- <button type="button" class="btn btn-outline-warning">
            <router-link to="/transport/addBus" class="btn"
              ><i class="fas fa-plus-circle fa-lg"></i>&nbsp;New</router-link
            >
          </button> -->
        <!-- </th>
      </tr> -->
     
      <!-- <colgroup>
        <col style="width: 90%" />
        <col style="width: 10%" />
      </colgroup>
    </table> -->

  
    <!-- function search here! -->
    <!-- <form> -->
    <!-- <form id="btnbusnum" class="form-inline">
      <input
        id="searchbtn"
        class="form-control my-1 mr-sm-2"
        type="text"
        placeholder="Search"
        aria-label="Search"
      /> -->
       <!-- <div class="form-group mb-2 text-center text-black form-center" style="width:35%">
      <search-1-component/> -->
      <!-- menu by search -->
      <!-- <label class="my-1 mr-2" for="inlineFormCustomSelectPref"> By </label>
      <select
        class="custom-select my-1 mr-sm-2"
        id="inlineFormCustomSelectPref"
      >
        <option selected>Lastest</option>
        <option value="1">Bus No.</option>
        <option value="2">Type</option>
        <option value="3">Start point</option>
        <option value="3">Des. point</option>
      </select> -->
        <!-- </div>
    </form> -->
<!-- <tr class="warning no-result">
      <td colspan="4"><i class="fa fa-warning"></i> No result</td>
    </tr> -->
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

    <!-- <tr class="warning no-result">
      <td colspan="4"><i class="fa fa-warning"></i> No result</td>
    </tr> -->
  <!-- </thead>
   <colgroup>
        <col style="width: 90%" />
        <col style="width: 10%" />
      </colgroup>
    </table> -->
    <!-- Saerch ????? -->
    <!-- <div class="search"
        style="text-align: center; width: 100% ;white-space: nowrap;" -->
          
         <!-- <table style=" width: 100% "> 
           <thead class="thead-dark" >
        <tr>
            <th>Bus No.</th>
            <th>Color</th>
            <th>Type</th>
            <th>Way</th>
            <th>Air-Con</th>
        </tr>
      </thead> -->
          <!-- <tbody  v-for="i in searchResult" :key="i">   
         <tr>
         <td style="width: 10%">{{ i.bus_no }} </td>
        <td style="width: 25%">
          {{ i.color }}
        </td > 
        <td style="width: 20%">
          {{ i.type }}
        </td> 
        <td style="width: 25%">
          {{ i.way }}
        </td> 
        <td style="width:50%">
          {{ i.aircon }}
        </td> 
      </tr>
      </tbody>  -->
      <!-- </table>
    </div> -->
    
    
    <table class="table table-hover table-bordered results">
      
      <thead class="thead-dark">
        <tr>
            <th>Bus No.</th>
            <th>Color</th>
            <th>Type</th>
            <th>Way</th>
            <th>Air-Con</th>
            <th>Edit</th>
            <th>Delete</th>
        </tr>
      </thead>
      <!-- <div class="search"
        style="text-align: center; width: 100% ;white-space: nowrap;" -->
       <tbody  v-for="i in searchResult" :key="i">   
         <tr>
         <td style="width: 10%">{{ i.bus_no }} </td>
        <td style="width: 25%">
          {{ i.color }}
        </td > 
        <td style="width: 20%">
          {{ i.type }}
        </td> 
        <td style="width: 25%">
          {{ i.way }}
        </td> 
        <td style="width:50%">
          {{ i.aircon }}
        </td> 
        <td>
              <button class="btn btn-warning">
              <i class="fas fa-edit"></i></button>
             
            </td>
            <td>
        <button
              type="button"
              class="btn btn-danger"
              data-toggle="modal"
              data-target="#deleteModal">
              <i class="fas fa-trash"></i>
            </button>
            </td>
      </tr>
      </tbody> 
      <!-- </div> -->
      <!-- <div v-if = "searchResult.length > 0"></div>
      <div v-else > </div> -->
        
        <tbody v-for="(detail,i) in details" :v-if="countCustomer() > 0 " :key="detail._id">
          <tr v-if="i >= startIndex && i < endIndex && searchResult.length == 0">
             
            <th style="width: 10%" >{{ detail.bus_no }}</th>
            <td style="width: 25%">{{ detail.color }}</td>
            <td style="width: 20%"> {{ detail.type }}</td>
            <td style="width: 25%"> {{ detail.way }}</td>
            <td style="width:50%">{{ detail.aircon }}</td>
            <td>
              <router-link :to="{ path: '/transport/editBus/' + detail._id }"
                ><button class="btn btn-warning">
                  <i class="fas fa-edit"></i></button
              ></router-link>
            </td>
            <td>
            <button
              type="button"
              class="btn btn-danger"
              data-toggle="modal"
              data-target="#deleteModal"
            >
              <i class="fas fa-trash"></i>
            </button>
            <div
              class="modal fade"
              id="deleteModal"
              tabindex="-1"
              role="dialog"
              aria-labelledby="deleteModalLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="deleteModalLabel">Are you sure?</h5>
                    <button
                      type="button"
                      class="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="modal-footer">
                    <button
                      type="button"
                      class="btn btn-secondary"
                      data-dismiss="modal"
                    >
                      Close
                    </button>
                    <router-link to="/transport/bus">
                      <button
                        id="btnreset"
                        type="reset"
                        class="btn btn-danger"
                        @click="deleteBtn"
                      >
                        Delete
                      </button></router-link
                    >
                  </div>
                </div>
              </div>
            </div>
          </td>
          </tr>
        </tbody>
    </table>
    <!-- </thead> -->
   <!-- <colgroup>
        <col style="width: 90%" />
        <col style="width: 10%" />
      </colgroup> -->
    </table>
     <div v-if="currentPage !== totalPages" class="float-left mt-4" >
          Showing {{startIndex + 1}} to {{endIndex}} of {{details.length}} entries      
      </div>
      <div v-if="currentPage == totalPages" class="float-left mt-4" >
          Showing {{startIndex + 1}} to{{details.length}} of {{details.length}} entries      
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
// import Search1Component from '@/components/Search1Component.vue'


export default {

  //  components: { 
  //     Search1Component,
  // },

  name: "Bus",
  created() {
    document.title = "ModBot | " + this.$options.name;
    
    // this.posts = exampledata
    //  axios.get('/api/busroutes')
    //   .then(response => {
    //     this.posts = response.data;
        // console.log(this.posts);
        // console.log(response)
  },
  data() {
    return {
      details: {
        bus_no: "",
        starting_point: "",
        destination_point: "",
        type: "",
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
    const response = await axios.get("api/busroutes/", {
      
      bus_no: this.details.bus_no,
      starting_point: this.details.starting_point,
      destination_point: this.details.destination_point,
      type: this.details.type,
      stations_no: this.details.stations_no
    });
    this.details = response.data;
    console.log(this.details);
    // console.log(this.details.bus_no);
    // console.log(response)
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
  async deleteBtn() {
    const res = await axios.delete("api/busroutes/" + this.id);
    console.log(res);
    location.reload();
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
    }

  },
  // computed: {
  //   totalPages() {
  //     return Math.ceil(this.details.length / this.perPage)
  //   }
  // }
// };
// $(document).ready(function() {
//   $(".search").keyup(function () {
//     var searchTerm = $(".search").val();
//     var listItem = $('.results tbody').children('tr');
//     var searchSplit = searchTerm.replace(/ /g, "'):containsi('")
    
//   $.extend($.expr[':'], {'containsi': function(elem, i, match, array){
//         return (elem.textContent || elem.innerText || '').toLowerCase().indexOf((match[5] || "").toLowerCase()) >= 0;
//     }
//   });
    
//   $(".results tbody tr").not(":containsi('" + searchSplit + "')").each(function(e){
//     $(this).attr('visible','false');
//   });

//   $(".results tbody tr:containsi('" + searchSplit + "')").each(function(e){
//     $(this).attr('visible','true');
//   });

//   var jobCount = $('.results tbody tr[visible="true"]').length;
//     $('.counter').text(jobCount + ' item');

//   if(jobCount == '0') {$('.no-result').show();}
//     else {$('.no-result').hide();}
// 		  });
// })
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