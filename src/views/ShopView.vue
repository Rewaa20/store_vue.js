<template>

  <section>
    <div class="container">
      <div class="row">
        <div class="col-sm-3">
          <div class="left-sidebar">
            <h2>الأقسام</h2>
            <div class="panel-group category-products" id="accordian">
              <!--category-productsr-->

              <div class="panel panel-default">
                <div class="panel-heading">
                  <h4 class="panel-title">
                    <router-link to="#" class="dd"  @click="category('اكسسوريز')">اكسسوريز</router-link>
                  </h4>
                </div>
              </div>
              <div class="panel panel-default">
                <div class="panel-heading">
                  <h4 class="panel-title">
                    <router-link to="#" class="dd"  @click="category('عنايه')">عنايه</router-link>
                  </h4>
                </div>
              </div>
              <div class="panel panel-default">
                <div class="panel-heading">
                  <h4 class="panel-title">
                    <router-link to="#" class="dd"  @click="category('مكياج')">مكياج</router-link>
                  </h4>
                </div>
              </div>
              <div class="panel panel-default">
                <div class="panel-heading">
                  <h4 class="panel-title">
                    <router-link to="#" class="dd"  @click="category('شنط')">شنط</router-link>
                  </h4>
                </div>
              </div>
              <div class="panel panel-default">
                <div class="panel-heading">
                  <h4 class="panel-title">
                    <router-link to="#" class="dd"  @click="category('عطور')">عطور</router-link>
                  </h4>
                </div>
              </div>
              <div class="panel panel-default">
                <div class="panel-heading">
                  <h4 class="panel-title">
                    <router-link to="#" class="dd"  @click="category('اجهزه')"
                      >اجهزه</router-link
                    >
                  </h4>
                </div>
              </div>
              <div class="panel panel-default">
                <div class="panel-heading">
                  <h4 class="panel-title">
                    <router-link to="#" class="dd"  @click="category('ملابس نساء')">ملابس نساء</router-link>
                  </h4>
                </div>
              </div>
              <div class="panel panel-default">
                <div class="panel-heading">
                  <h4 class="panel-title">
                    <router-link to="#" class="dd" @click="category('رجال')">رجال</router-link>
                  </h4>
                </div>
              </div>
            </div>
            <!--/category-products-->
          </div>
        </div>

        <div class="col-sm-9 padding-right">
          <div class="features_items">
            <!--features_items-->
            <h2 class="title text-center">المنتجات</h2>

            <SingleProd v-if="!this.$store.state.serProd"
              :key="itm"
              v-for="itm in this.$store.state.products"
              :act="'اضافة الى المفضلة'"
              :icon="'fa fa-plus-square'"
              :prod="itm"
              :price="itm.proPrice"
              :catProp="itm.proCat"
              :img="itm.proImg"
              :name="itm.proName"
              :isCat="itm.Cat"
            />
<hr>

<SingleProd v-if="this.$store.state.serProd"
              :key="itm"
              v-for="itm in serch()"
              :act="'اضافة الى المفضلة'"
              :prod="itm"
              :price="itm.proPrice"
              :catProp="itm.proCat"
              :img="itm.proImg"
              :name="itm.proName"
              :isCat="itm.Cat"
            />
          </div>
          <!--features_items-->
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import HdCom from "@/components/HdCom.vue";
import SingleProd from "@/components/SingleProd.vue";
export default {
  name: "ShopView",
  data() {
    return {
      products: [],
    };
  },
 created(){
  for(var ind=0 ; ind<=this.$store.state.products.length-1 ; ind++){
      this.$store.state.products[ind].Cat=true;
    }
 },
    
methods:{
  category(catLink){
    for(var ind=0 ; ind<=this.$store.state.products.length-1 ; ind++){
    if(this.$store.state.products[ind].proCat == catLink){
      this.$store.state.products[ind].Cat=true;
      // alert(this.$store.state.products[ind].Cat);

    }
    else if(this.$store.state.products[ind].proCat != catLink){
      this.$store.state.products[ind].Cat=false;
      // alert(this.$store.state.products[ind].Cat);

    }
    
  }
},

    serch(){
      if(this.$store.state.serProd){
      return JSON.parse(localStorage.products).filter(function(prod){
       return prod.proName.toLowerCase().includes(localStorage.ser.toLowerCase()) ||
       prod.proPrice.toString().includes(localStorage.ser.toString());
      })
    }
    else{
      alert(null);
    }
    
    }
  
},
  components: {
    SingleProd,
    HdCom,
  },
}
</script>
