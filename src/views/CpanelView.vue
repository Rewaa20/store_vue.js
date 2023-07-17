<template>
   
	<section id="cart_items">
		<div class="container">
			<div class="breadcrumbs">
				<ol class="breadcrumb">
				  <li><router-link to="#">الرئيسية</router-link></li>
				  <li class="active">لوحة التحكم</li>
				</ol>
            </div>

            <h4 style="margin-bottom: 3rem;"><router-link to="/add">اضافة منتج جديد</router-link></h4>

			<div class="table-responsive cart_info">
				<table class="table table-condensed">
					<thead>
						<tr class="cart_menu">
							<td class="image">المنتج</td>
							<td class="description"></td>
							<td class="description">الصنف</td>
							<td class="price">السعر</td>
							<td class="price">تاريخ الاضافة</td>
							<td class="total">العمليات</td>
							<td></td>
						</tr>
					</thead>
					<tbody>
					
						<ProdRow :key="itm.proName" v-for="itm , indx  in this.$store.state.products" :ind="indx" :name="itm.proName" :price="itm.proPrice" :cat="itm.proCat" :img="itm.proImg" :date="itm.proDate" />
					</tbody>
				</table>
			</div>
		</div>
    </section> <!--/#cart_items-->
	


</template>
<script>
import ProdRow from '@/components/ProdRow.vue'
export default {
    name:'CpanelView',
	data(){
		return{
			products:[]
		}
	},
	// created(){
    //     if(localStorage.products){
    //        this.products = JSON.parse( localStorage.products );
    //     }
    // },
	components:{
		ProdRow,
	}
}
</script>