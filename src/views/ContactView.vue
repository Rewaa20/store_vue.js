<template>
     <div id="contact-page" class="container">
    	<div class="bg">
	    	<div class="row" style="margin-bottom: 50px;">    		
	    		<div class="col-sm-12">    			   			
					<h2 class="title text-center">تواصل معنا</h2>    			    				    				
				</div>			 		
			</div>    	
    		<div class="row">  	
	    		<div class="col-sm-8">
	    			<div class="contact-form">
	    				<h2 class="title text-center">أرسل رسالة</h2>
	    				<div class="status alert alert-success" style="display: none"></div>
				    	<form id="main-contact-form" class="contact-form row" name="contact-form" method="post">
				            <div class="form-group col-md-6">
				                <input type="text" name="name" class="form-control" required="required" placeholder="الاسم">
				            </div>
				            <div class="form-group col-md-6">
				                <input type="email" name="email" class="form-control" required="required" placeholder="الايميل">
				            </div>
				            <div class="form-group col-md-12">
				                <input type="text" name="subject" class="form-control" required="required" placeholder="عنوان الرسالة">
				            </div>
				            <div class="form-group col-md-12">
				                <textarea name="message" id="message" required="required" class="form-control" rows="8" placeholder="أكتب رسالتك هنا"></textarea>
				            </div>                        
				            <div class="form-group col-md-12">
				                <input type="submit" name="submit" class="btn btn-primary pull-right" value="ارسال">
				            </div>
				        </form>
	    			</div>
	    		</div>
	    		<div class="col-sm-4">
	    			<div class="contact-info">
	    				<h2 class="title text-center">معلومات الاتصال</h2>
	    				<address>
	    					<p>E-Mall Inc.</p>
							<p>شارع 20، مدينة الرياض</p>
							<p>المملكة العربية السعودية</p>
							<p>هاتف: +2346 17 38 93</p>
							<p>فاكس: 1-714-252-0026</p>
							<p>بريد الكتروني: info@e-shopper.com</p>
	    				</address>
	    				<div class="social-networks">
	    					<h2 class="title text-center">الشبكات الإجتماعية</h2>
							<ul>
								<li>
									<router-link to="#"><i class="fa fa-facebook"></i></router-link>
								</li>
								<li>
									<router-link to="#"><i class="fa fa-twitter"></i></router-link>
								</li>
								<li>
									<router-link to="#"><i class="fa fa-google-plus"></i></router-link>
								</li>
								<li>
									<router-link to="#"><i class="fa fa-youtube"></i></router-link>
								</li>
							</ul>
	    				</div>
	    			</div>
    			</div>    			
	    	</div>  
    	</div>	
    </div><!--/#contact-page-->
</template>
<script>
export default {
  name:'ContactView',
}
</script>