<template>
  <div class="relative">
    <search-focus @keyup="focusSearch" />
    <div class="relative w-80">
      <input class="focus:border-light-blue-500 focus:ring-1 focus:ring-light-blue-500 focus:outline-none w-full text-sm text-black placeholder-gray-500 border border-gray-200 rounded-md py-2 pl-10"
       type="text" 
       aria-label="Search Keyword & Item" 
       placeholder="Search Keyword & Item"
       
        v-model="query"
        @blur="searchResultsVisible = false"
        @focus="searchResultsVisible = true"
        @keydown.esc="searchResultsVisible = false"
        @input="softReset"
        ref="search"
        @keyup="performSearch"
        @keydown.up.prevent="highlightPrevious"
        @keydown.down.prevent="highlightNext"
        @keydown.enter="gotoLink"
        
      >
      <!-- ตัวreset การsearchใหม่ทั้งหมด -->
      <div
        v-if="query.length > 0"
        class="reset "
        @click="reset">&times;
      </div>

      <!-- มีการเพิ่มตัวsearch ทั้ง keyword และ item ได้ทั้งสอง -->
      <div 
        class="search absolute normal-case border left-0 right-0 w-200 text-left mb-3 mt-3 rounded-lg shadow overflow-hidden z-10 overflow-y-auto"
        style="max-height: 50rem ; font-weight: bold;" 
        v-for="i in searchResult" :key="i">
        {{ i.keyword }} 
        <div 
          v-for="i in searchResult" :key="i"
          style="font-weight: normal;">
          {{ i.items }}
        </div> 
      </div>
      <!-- <div class="absolute top-0 ml-3" style="top:10px">
        <svg fill="currentColor" class="text-gray-500 h-5 w-5" viewBox="0 0 24 24" width="24" height="24"><path class="heroicon-ui" d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"></path></svg>
      </div> -->
      
    </div>

   <!-- ตรงนี้ยังติดปัญหาอยู่นิดหน่อยของ results -->
   <!-- ฉันทำได้แล้ว ตรวจสอบได้แล้วค่ะ คิคิอิอิ  no results for ได้แล้วค่ะ  -->
    <transition name="fade">
      <div v-if="query.length > 0 && searchResultsVisible" class="absolute normal-case bg-white border left-0 right-0 w-108 text-left mb-4 mt-2 rounded-lg shadow overflow-hidden z-10 overflow-y-auto" style="max-height: 32rem">
        <div class="flex flex-col" ref="results">
          <a
            v-for="(post, index) in searchResult"
            :key="index"
            :href="post.item.path"
            @mousedown.prevent="searchResultsVisible = true"
            class="border-b border-gray-400 text-xl cursor-pointer p-4 hover:bg-blue-100"
            :class="{ 'bg-blue-100': index === highlightedIndex }"
          >
            {{ post.item.keyword }}

            <span class="block font-normal text-sm my-1">{{ post.item.items }}</span>
          </a>

          <div v-if="searchResult.length === 0" class="font-normal w-full border-b cursor-pointer p-3">
            <p class="my-0">No results for '<strong>{{ query }}</strong>'</p>
          </div>
        </div>
      </div>
    </transition>
    
  </div>
   <!-- <div v-for="i in searchResult" :key="i">{{ i.keyword }}</div>
      <input class="focus:border-light-blue-500 focus:ring-1 focus:ring-light-blue-500 focus:outline-none w-full text-sm text-black placeholder-gray-500 border border-gray-200 rounded-md py-2 pl-10" type="text" aria-label="Filter projects" placeholder="Filter projects"
        type="text"
        placeholder="Search (Press  &quot;/&quot; to focus)"
        class="bg-background-form border border-gray-500 rounded-full px-4 pl-10 py-2 outline-none focus:border-blue-500 w-80"
        
      >
      <div class="absolute top-0 ml-3" style="top:10px">
        <svg fill="currentColor" class="text-gray-500 h-5 w-5" viewBox="0 0 24 24" width="24" height="24"><path class="heroicon-ui" d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"></path></svg>
      </div>
      <div -->
</template>

<script>
import SearchFocus from './SearchFocus'
import axios from 'axios'
import exampledata from './data.json'
console.log(exampledata)
export default {
  components: {
    SearchFocus,
  },
  data() {
    return {
      query: '',
      searchResultsVisible: false,
      posts: [],
      searchResults: [],
      highlightedIndex: 0,
      options: {
        shouldSort: true,
        includeMatches: true,
        threshold: 0.5,
        location: 0,
        distance: 500,
        maxPatternLength: 32,
        minMatchCharLength: 1,
        keys: ['keyword', 'items']
      }
    }
  },
  created() {
    // this.posts = exampledata
     axios.get('/api/Trainbotwords')
      .then(response => {
        this.posts = response.data;
        console.log(this.posts);
        // console.log(response)
      })
  },
  computed: {
    searchResult() {
      let tempPost = this.posts
      console.log('111111' + this.query)
      if (this.query != '' && this.query) {
            tempPost = tempPost.filter((item) => {
              return item.keyword.includes(this.query)
              || item.items.includes(this.query)
            })
          } else {
            return null
          }
        return tempPost
    }
  },
  
  methods: {
    reset() {
      this.query = ''
      this.highlightedIndex = 0
    },
    softReset() {
      this.searchResultsVisible = true
      this.highlightedIndex = 0
    },
    focusSearch(e) {
      if (e.key === '/') {
        this.$refs.search.focus()
      }
    },
    performSearch() {
      this.$search(this.query, this.posts, this.options)
        .then(results => {
            // console.log(results)
          this.searchResults = results
        })
    },
    highlightPrevious() {
      if (this.highlightedIndex > 0) {
        this.highlightedIndex = this.highlightedIndex - 1
        this.scrollIntoView()
      }
    },
    highlightNext() {
      if (this.highlightedIndex < this.searchResults.length - 1) {
        this.highlightedIndex = this.highlightedIndex + 1
        this.scrollIntoView()
      }
    },
    scrollIntoView() {
      this.$refs.results.children[this.highlightedIndex].scrollIntoView({ block: 'nearest' })
    },
    gotoLink() {
      if (this.searchResults[this.highlightedIndex]) {
        window.location = this.searchResults[this.highlightedIndex].item.path
      }
    }
  }
}
</script>

<style scoped>
  .fade-enter-active, .fade-leave-active {
    transition: opacity .2s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
  /* ปรับแต่งตัวsearchและข้อมูลที่ออกมา */
.relative w-80{
    width: 20%;
  }  
  /* .relative{
    text-align: center;
    width: 110%;
    
  } */
  input{
  width: 100%;
      
  } 
  div.search{
    background: #BBE2D7;
    position: relative;
    top: -38px;
  }
  div.flex{
  background: #E7CCBA;
  }

  input{
    background: #eeeeff;
  }
div.reset{
  color: black;
  font-size: 20px;
  position: relative;
  top: -38px;
  left: 145px;
  cursor: pointer;
  font-weight: bold;
}
       
  
</style>