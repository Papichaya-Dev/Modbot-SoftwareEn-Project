<template>
  <div class="res">
    <table>
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
    </table>
          
      <!-- <form class="form-inline">
        <div class="form-group">
          <label for="files">Upload a CSV formatted file:</label>
          <input type="file" id="files"  class="form-control" accept=".csv" required />
        </div>
        <div class="form-group">
        <button type="submit" id="submit-file" class="btn btn-primary">Upload File</button>
        </div>
      </form> -->
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
        <option value="1">Station No.</option>
        <option value="2">Station Name</option>
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
          <th style="width: 10%">Station No.</th>
          <th style="width: 25%">Station Name</th>
          <th style="width: 25%">Latitude</th>
          <th style="width: 27%">Longitude</th>
          <th style="width: 5%">Edit</th>
          <th style="width: 5%">Delete</th>
        </div>       
        </tr>
      </thead>
      <div  v-if="countCustomer() > 0" > 
        <tbody v-for="(detail, i) in filtereddetails" :key="detail._id">
          <tr v-if="i >= startIndex && i < endIndex">
          <!-- <th style="width: 10%">{{i+1}}</th> -->
            <th style="width: 10%">{{ detail.station_no}}</th>
            <td style="width: 45%" >{{ detail.station_name }}</td>
            <td style="width: 10%">{{ detail.latitude }}</td>
            <td>{{ detail.longitude }}</td>
            <td>
              <router-link :to="{ path: '/locations/editStation/' + detail._id }"
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
            <!-- <td>
              <router-link to="/chat/trainbot">
                <button
                  class="btn btn-danger"
                  @click="deleteItem(detail._id)"
                  :data-id="detail._id"
                  data-dismiss="modal"
                >
                  <i class="fas fa-trash-alt"></i></button
              ></router-link>
            </td> -->
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
  name: "Station Table",
  created() {
    document.title = "ModBot | " + this.$options.name;
  },
  data() {
    return {
      details: {
        station_no: "",
        station_name: "",
        latitude: "",
        longitude: ""
      },
      selectedStation: "",
      perPage: 5 ,
      currentPage : 1,
			startIndex : 0,
			endIndex : 5,
      pageSizes: [5, 10, 15, 20],
      sortBy: 'station_no',
    };
  },
  async mounted() {
    const response = await axios.get("api/stations/", {
      station_no: this.station_no,
      station_name: this.station_name,
      latitude: this.latitude,
      longitude: this.longitude
    });
    this.details = response.data;
    console.log(this.details);
  },
  methods: {
    async deleteBtn(selectedStation) {
      console.log(selectedStation)
      const res = await axios.delete("api/stations/"+ selectedStation);
      console.log(res);
      location.reload();
    },
    sendInfo(info) {
      return this.selectedStation = info
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
    },
      filtereddetails() {
    let sortdetails = this.details
         
    // Sort by alphabetical order
        sortdetails = sortdetails.sort((a, b) => {
          // Sort by station_no
          if (this.sortBy == 'station_no') {
              return a.station_no - b.station_no
           } 

          // else if (this.sortBy == 'alphabetically') {
          //       let fa = a.type.toLowerCase(), fb = b.type.toLowerCase()
          
          //     if (fa < fb) {
          //       return -1
          //     }
          //     if (fa > fb) {
          //       return 1 
          //     }
          //     return 0         
          //   }
        })
        
        return sortdetails
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