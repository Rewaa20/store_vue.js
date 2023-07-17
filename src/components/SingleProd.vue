<template>
  <div class="col-sm-4" v-if="isCat">
    <div class="product-image-wrapper">
      <div class="single-products">
        <div class="productinfo text-center">
          <img :src="img" alt="" />
          <h2>{{ $filters.PWD(price) }}</h2>
          <p>{{ name }}</p>
          <router-link to="#" class="btn btn-default add-to-cart"
            ><i class="dd fa fa-shopping-cart"></i>أضف إلى السلة</router-link
          >
        </div>
        <div class="product-overlay">
          <div class="overlay-content">
            <h2>{{ $filters.PWD(price) }}</h2>
            <p>{{ name }}</p>
            <router-link to="#" class="btn btn-default add-to-cart"
              ><i class="fa fa-shopping-cart"></i>أضف إلى السلة</router-link
            >
          </div>
        </div>
      </div>
      <div class="choose">
        <ul class="nav nav-pills nav-justified">
          <li>
            <router-link class="dd" to="#" @click="favActions(prod, indx, act)"
              ><i :class="icon"></i>{{ act }}</router-link
            >
            <!-- fa fa-plus-square -->
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "SingleProd",

  data() {
    return {
      favProds: [],
      cat: "اجهزة",
    };
  },

  props: [
    "price",
    "name",
    "img",
    "prod",
    "act",
    "indx",
    "catProp",
    "isCat",
    "icon",
  ],
  methods: {
    favActions(prod, indx, act) {
      alert("11");

      if (act == "اضافة الى المفضلة") {
        if (!this.$store.state.favProds.includes(prod)) {
          this.$store.state.favProds.push(prod);
          localStorage.myFav = JSON.stringify(this.$store.state.favProds);
        } else {
          console.log(0);
        }
      } else {
        this.$store.state.favProds.splice(indx, 1);
        localStorage.myFav = JSON.stringify(this.$store.state.favProds);
        alert("3");
      }
    },
  },
};
</script>
