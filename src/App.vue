<template>
  <router-view></router-view>
</template>

<script>
import {onMounted} from 'vue';
import axios from "axios";

export default {
  name: 'App',
  setup(){
    onMounted(()=>{
      console.log("2222")
      

      axios.get("/ttl/test").then(res => {
        console.log("proxy : "+res.data);
      })
      axios.get("/ttl/test2").then(res => {
        console.log("proxy : "+res.data);
      })

    })
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
