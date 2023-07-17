<template>
    <div id="contact-page" class="container">
    	<div class="bg">
	    	<div class="row" style="margin-bottom: 50px;">    		
	    		<div class="col-sm-12">    			   			
					<h2 class="title text-center">تعديل بيانات المنتج</h2>    			    				    				
					<!--<div id="gmap" class="contact-map">
					</div>-->
				</div>			 		
			</div>    	
    		<div class="row">  	
	    		<div class="col-sm-8">
	    			<div class="contact-form">
	    				<div class="status alert alert-success" style="display: none"></div>
				    	<form action="/cpanel"  @submit="upDate()" id="main-contact-form" class="contact-form row" name="contact-form" >
				            <div class="form-group col-md-6">
				                <input type="text" v-model="this.$store.state.products[this.$store.state.indToEdit].proName" name="name" class="form-control" required="required" placeholder="اسم المنتج">
				            </div>
				            <div class="form-group col-md-6">
				                <input type="number" v-model="this.$store.state.products[this.$store.state.indToEdit].proPrice" name="price" class="form-control" required="required" placeholder="السعر">
				            </div>
				            <div class="form-group col-md-6">
                                <select v-model="this.$store.state.products[this.$store.state.indToEdit].proCat" name="subject" class="form-control">
                                    <option>اكسسوريز</option>
                                    <option>عنايه</option>
                                    <option>مكياج</option>
                                    <option>شنط</option>
                                    <option>عطور</option>
                                    <option>اجهزه</option>
                                    <option>ملابس نساء</option>
                                    <option>رجال</option>
                                </select>
                            </div>
                            <div class="form-group col-md-6">
				                <input type="file" @change="upload($event)"  name="image" class="form-control"  placeholder="اختر صورة المنتج">
				            </div>
				            <div class="form-group col-md-12">
				                <textarea name="message" v-model="this.$store.state.products[this.$store.state.indToEdit].proDes" id="message" required="required" class="form-control" rows="8" placeholder="وصف المنتج أو نبذة عنه"></textarea>
				            </div>                        
				            <div class="form-group col-md-12">
				                <input  type="submit" name="submit" class="btn btn-primary pull-right" value="حفظ التعديلات">
				            </div>
				        </form>
	    			</div>
	    		</div>
	    	</div>  
    	</div>	
    </div><!--/#contact-page-->
</template>
<script>
export default {
    name:'Update',
    data(){
       return{
        products:[],
		indToEdit:0,
		name:'',
		price:'',
		cat:'',
		img:this.$store.state.products[this.$store.state.indToEdit].proImg,
		des:'',
		indx:-1,
       }
    }
    ,
    // created(){
	//    localStorage.y = this.$store.state.indToEdit;
    // },
	methods:{
		upload(e){
             this.img = e.target.files[ind].name;
			 alert(this.img);
			 console.log(e);
		},
		upDate(ind){
			this.$store.state.products[ind] = {
				    proName:this.name,
                    proPrice:this.price,
                    proCat:this.cat,
                    proImg:'images/products/'+ this.img ,
                    proDes:this.des,
                    proIndx:this.indx+1,
                    proDate:new Date().toLocaleString(),

			};
			localStorage.products = JSON.stringify(this.$store.state.products);
		}
	}
}
</script>