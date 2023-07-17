<template>
  <HdCom v-if="this.$route.path!='/NotFound'"></HdCom>

  <router-view />

  <TaileCom v-if="this.$route.path!='/NotFound'"></TaileCom>
</template>

<script>
import HdCom from "@/components/HdCom.vue";
import TaileCom from "@/components/TaileCom.vue";

export default {
  name: "App",

  created() {
    if (localStorage.products) {
      this.$store.state.products = JSON.parse(localStorage.products);
    }
    if (localStorage.indToShow) {
    this.$store.state.indToShow = localStorage.indx ;
    }

    if (localStorage.indToEdit) {
     this.$store.state.indToEdit = localStorage.y ;
    }

    if (localStorage.myFav) {
      this.$store.state.favProds = JSON.parse(localStorage.myFav);
      // localStorage.myFav = [];
    }
   
    if (localStorage.res){
    this.$store.state.serProd = localStorage.res;
    }
    if (localStorage.results){
    this.$store.state.results = JSON.parse(localStorage.results);
    }
     // if (localStorage.category) {
    //  this.$store.state.category = localStorage.category ;
    // }
  },
  components: {
    HdCom,
    TaileCom,
  },
  // methods:{
  //   serch(){
  //     alert(localStorage.ser);
  //     this.$store.state.results = JSON.parse(localStorage.products).filter(function(prod){
  //      return prod.proName.toLowerCase().includes(localStorage.ser.toLowerCase());
  //     });
  //     localStorage.results = JSON.stringify(this.$store.state.results);
  //   }
  // }
};
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: right;
  color: #2c3e50;
}

.router-link-exact-active{
  color:#FE980F !important
}

.dd {
  color:#696763 !important
}

// nav {
//   padding: 30px;

//   a {
//     font-weight: bold;
//     color: #2c3e50;

//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
 
// }
</style>
