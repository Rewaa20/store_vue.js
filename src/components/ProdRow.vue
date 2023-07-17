<template>
    <tr>
							<td class="cart_product">
								<router-link to="/"><img :src="img" width="70" alt=""></router-link>
							</td>
							<td class="cart_description">
								<h4><router-link to="/">{{ name }}</router-link></h4>
							</td>
							<td class="cart_description">
								<h4><router-link to="/">{{ cat }}</router-link></h4>
							</td>
							<td class="cart_price">
								<p>${{ price }}</p>
							</td>
							<td class="cart_description">
								<p>{{ date }}</p>
							</td>
							<td class="cart_delete">
								<router-link @click="del(ind)" class="dd cart_quantity_delete" to="#"><i class="fa fa-times"></i></router-link>
								<router-link @click="edit(ind)" class="dd cart_quantity_delete" to="#"><i class="fa fa-pencil-square-o"></i></router-link>
								<router-link @click="show(ind)" class="dd cart_quantity_delete" to="#"><i class="fa fa-info-circle"></i></router-link>
							</td>
						</tr>

</template>
<script>
import { def } from '@vue/shared';

export default {
    name:'ProdRow',
	data(){
		return{
			products:[],
			indx:0,
			y:0
		}
	},
    props:['name','price','cat','img','date','ind'],
	methods:{
		del(ind){
			this.$store.state.products.splice(ind,1);
			localStorage.products = JSON.stringify( this.$store.state.products );
			this.$store.state.favProds.splice(ind,1);
			localStorage.myFav = JSON.stringify( this.$store.state.favProds );
			

		},
		edit(ind){
			this.$store.state.indToEdit = ind;
			localStorage.y = this.$store.state.indToEdit;
			
			this.$router.push({path:'/update'});
		},
		show(ind){
			// this.$store.state.products[ind].proIndx=ind;
			this.$store.state.indToShow=ind;
			localStorage.indx = this.$store.state.indToShow;
			this.$router.push({path:'/prod'});

		}
	}
}
</script>