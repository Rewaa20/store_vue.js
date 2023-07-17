<template>
     <div id="contact-page" class="container">
    	<div class="bg">
	    	<div class="row" style="margin-bottom: 50px;">    		
	    		<div class="col-sm-12">    			   			
					<h2 class="title text-center">إضافة منتج جديد</h2>    			    				    				
					<!--<div id="gmap" class="contact-map">
					</div>-->
				</div>			 		
			</div>    	
    		<div class="row">  	
	    		<div class="col-sm-8">
	    			<div class="contact-form">
	    				<div class="status alert alert-success" style="display: none"></div>
				    	<form action="/cpanel"  @submit="add()" id="main-contact-form" class="contact-form row" name="contact-form" >
				            <div class="form-group col-md-6">
				                <input type="text" v-model="name" name="name" class="form-control" required="required" placeholder="اسم المنتج">
				            </div>
				            <div class="form-group col-md-6">
				                <input type="number" v-model="price" name="price" class="form-control" required="required" placeholder="السعر">
				            </div>
				            <div class="form-group col-md-6">
                                <select v-model="cat" name="subject" class="form-control">
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
				                <input type="file" name="image" @change="upload($event)" class="form-control"  placeholder="اختر صورة المنتج">
				            </div>
				            <div class="form-group col-md-12">
				                <textarea name="message" v-model="des" id="message" required="required" class="form-control" rows="8" placeholder="وصف المنتج أو نبذة عنه"></textarea>
				            </div>                        
				            <div class="form-group col-md-12">
				                <input type="submit" name="submit" class="btn btn-primary pull-right" value="اضافة">
				            </div>
				        </form>
	    			</div>
	    		</div>
	    	</div>  
    	</div>	
    </div><!--/#contact-page-->
	{{ this.$store.state.cat }}
	<!-- {{ this.$store.state.proDate }} -->
</template>
<script>
export default {
    name:'AddProd',
	data(){
		return{
			name:'',
			price:0,
			cat:'اكسسوريز',
			img:'',
			// img:'images/products/6.JPEG',
			des:'',
			indx:-1,
			products:[]
		
		}
	},
	
	methods:{
		upload(e){
             this.img = e.target.files[this.indx+1].name;
			 alert(this.img);
			 console.log(e);
		},
		add(){
			alert(this.img);
            this.$store.state.products.push({
				    proName:this.name,
                    proPrice:this.price,
                    proCat:this.cat,
                    proImg:'images/products/'+ this.img ,
                    proDes:this.des,
                    proIndx:this.indx+1,
					Cat:true,
                    proDate:new Date().toLocaleString(),
			});
			localStorage.products = JSON.stringify( this.$store.state.products );
		},
		
	}
}
</script>