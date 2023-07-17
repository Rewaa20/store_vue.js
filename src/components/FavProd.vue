<template>
   <div class="col-sm-4">
							<div class="product-image-wrapper">
								<div class="single-products">
									<div class="productinfo text-center">
										<img src="images/products/7.jpeg" alt="" />
										<h2>${{name}}</h2>
										<p> المنتج</p>
										<router-link to="#" class="btn btn-default add-to-cart"><i class="fa fa-shopping-cart"></i>أضف إلى السلة</router-link>
									</div>
									<div class="product-overlay">
										<div class="overlay-content">
											<h2>$56</h2>
											<p>اسم المنتج</p>
											<router-link to="#" class="btn btn-default add-to-cart"><i class="fa fa-shopping-cart"></i>أضف إلى السلة</router-link>
										</div>
									</div>
								</div>
								<div class="choose">
									<ul class="nav nav-pills nav-justified">
										<li><router-link to="#"><i class="fa fa-plus-square"></i>أضف إلى المفضلة</router-link></li>
									</ul>
								</div>
								
							</div>
						</div>
 </template>
 <script>
 export default {
     name:'SingleProd',
     props:['price','name','img']
     
 }
 </script>