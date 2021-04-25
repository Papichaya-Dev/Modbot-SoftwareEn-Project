<template>
  <div class="res">
      <tr>
        <th><h2>Station</h2></th>
        <th>
          <button type="button" class="btn btn-outline-warning">
            <router-link to="/locations/addStation" class="btn"
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
    <input type="text" class="search form-control" placeholder="Search station" v-model="query">
    </div>
  <span class="counter pull-right"></span>
  
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
    <table id="tabletran" class="table text-center table-hover">
      <thead class="thead-dark">
        <tr>
          <th scope="col">NO.</th>
          <th scope="col">Station Name</th>
          <th scope="col">Latitude</th>
          <th scope="col">Longitude</th>
          <th scope="col">Edit</th>
          <th scope="col">Delete</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="detail in details" :key="detail._id">
          <th scope="row" style="width:10%">{{ detail.station_no}}</th>
          <td>{{ detail.station_name }}</td>
          <td>{{ detail.latitude }}</td>
          <td>{{ detail.longitude }}</td>
          <td>
            <router-link :to="{ path: '/locations/editStation/' + detail._id }"
              ><button class="btn btn-outline-warning">
                <i class="fas fa-edit"></i></button
            ></router-link>
          </td>
          <td>
            <button
              type="button"
              class="btn btn-outline-danger"
              data-toggle="modal"
              data-target="#deleteModal"
              @click="sendInfo(detail)"
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
                    <h5 class="modal-title" id="deleteModalLabel">Delete</h5>
                    <button
                      type="button"
                      class="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="modal-body">
                    <p>Do you want to delete this station name : <span>{{selectedStation.station_name}}</span> ?</p>
                  </div>
                  <div class="modal-footer">
                    <button
                      type="button"
                      class="btn btn-secondary"
                      data-dismiss="modal"
                    >
                      Close
                    </button>
                    <router-link to="/locations/station">
                      <button
                        id="btnreset"
                        type="reset"
                        class="btn btn-danger"
                        @click="deleteBtn(selectedStation._id)">
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
  name: "Location",
  created() {
    document.title = "ModBot | " + this.$options.name;
  },
  data() {
    return {
      details: {
        station_no:"",
        station_name:"",
        latitude:"",
        longitude:"",
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
    const response = await axios.get("api/stations/", {
      
      station_no: this.details.station_no,
      station_name: this.details.station_name,
      latitude: this.details.latitude,
      longitude: this.details.longitude
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
  async deleteBtn(selectedStation) {
      console.log(selectedStation)
      const res = await axios.delete("api/stations/"+ selectedStation);
      console.log(res);
      location.reload();
    },
     
  },
  computed: {
      searchResult() {
      let tempPost = this.details
      console.log(tempPost);
      if (this.query != '' && this.query) {
            tempPost = tempPost.filter((item) => {
              if(item.station_no.includes(this.query) != false) {
                return item.station_no.includes(this.query)
              }
              // if(item.station_name.includes(this.query) != false) {
              //   return item.stations_name.includes(this.query)
              // }
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