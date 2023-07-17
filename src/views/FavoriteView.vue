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
                    <router-link to="#" class="dd"  >اكسسوريز</router-link>
                  </h4>
                </div>
              </div>
              <div class="panel panel-default">
                <div class="panel-heading">
                  <h4 class="panel-title">
                    <router-link to="#" class="dd"  >عنايه</router-link>
                  </h4>
                </div>
              </div>
              <div class="panel panel-default">
                <div class="panel-heading">
                  <h4 class="panel-title">
                    <router-link to="#" class="dd"  >مكياج</router-link>
                  </h4>
                </div>
              </div>
              <div class="panel panel-default">
                <div class="panel-heading">
                  <h4 class="panel-title">
                    <router-link to="#" class="dd"  >شنط</router-link>
                  </h4>
                </div>
              </div>
              <div class="panel panel-default">
                <div class="panel-heading">
                  <h4 class="panel-title">
                    <router-link to="#" class="dd"  >عطور</router-link>
                  </h4>
                </div>
              </div>
              <div class="panel panel-default">
                <div class="panel-heading">
                  <h4 class="panel-title">
                    <router-link to="#" class="dd"   
                      >اجهزه</router-link
                    >
                  </h4>
                </div>
              </div>
              <div class="panel panel-default">
                <div class="panel-heading">
                  <h4 class="panel-title">
                    <router-link to="#" class="dd"  >ملابس نساء</router-link>
                  </h4>
                </div>
              </div>
              <div class="panel panel-default">
                <div class="panel-heading">
                  <h4 class="panel-title">
                    <router-link to="#" class="dd" >رجال</router-link>
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
            <h2 class="title text-center">المنتجات المفضلة</h2>
            <!-- {{ this.$store.state.favProds[0].proName }}<br>
{{ this.$store.state.favProds[0].proPrice }}<br>
{{ this.$store.state.favProds[0].proImg }} -->
            <SingleProd
              v-for="(itm, index) in this.$store.state.favProds"
              :key="index"
              :act="'حذف من المفضلة'"
              :icon="'fa fa-minus-square'"
              :name="itm.proName"
              :price="itm.proPrice"
              :img="itm.proImg"
              :isCat="1"
            />
           
            <!-- :name="itm.proName" :img="itm.proImg" :price="itm.proPrice" -->
          </div>
          <!--features_items-->
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import SingleProd from "@/components/SingleProd.vue";
export default {
  components: { SingleProd },
  name: "FavoriteView",
  data() {
    return {
      favProds: [],
    };
  },
  
};
</script>
