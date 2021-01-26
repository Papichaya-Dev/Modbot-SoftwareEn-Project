<template>
  <transition name="Search">
      <div class="jumbotron">
        <h1 class="display-3">filter a table</h1>
        <p class="lead">ASDFG</p>
        <input 
            type="text" 
            v-model="query" 
            placeholder="Search..."
        >
        <button 
            @click="search()"
        >
            Search
        </button>
        <tr :v-for="row in rows">
            <td>{{ row.name }}</td>
            <td>{{ row.email }}</td>
            <td><span class="badge badge-default">{{ row.type }}</span></td>
            <td>{{ row.status }}</td>
        </tr>
      </div>
  </transition>
</template>

<script>
export default {
    name: 'Search',
    data() {
        return {
            query: "",
            originalrows: [],
            rows: [
                {
                    'id': 1,
                    'name': 'Wynton Franlin',
                    'email': 'wf@mail.com',
                    'type': 'Member',
                    'status': 'Active',
                },
            ]
        }
    },
    methods: {
        search() {
            var results = [];
            var searchData = this.originalrows;
            if(this.query == ""){
                this.rows = this.originalrows;
            }else{
                for(var i=0; i < searchData.length; i++){
                    var sparam = this.query.toLowerCase();
                    for(var key in searchData[i]){
                        if(Object.prototype.hasOwnProperty.call(searchData[i],key)){
                            var value = searchData[i][key];
                            if(typeof value == "string" && value.toLowerCase().indexOf(sparam) >= 0){
                                results.push(searchData[i]);
                            }
                        }
                    }
                }
                this.rows = results;
            }
        }
    },
}
</script>

<style>

</style>