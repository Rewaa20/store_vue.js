<template>
    
	<section id="cart_items">
		<div class="container">
			<div class="breadcrumbs">
				<ol class="breadcrumb">
				  <li><router-link to="/">الرئيسية</router-link></li>
				  <li class="active">عربة التسوق</li>
				</ol>
			</div>
			<div class="table-responsive cart_info">
				<table class="table table-condensed">
					<thead>
						<tr class="cart_menu">
							<td class="image">المنتج</td>
							<td class="description"></td>
							<td class="price">السعر</td>
							<td class="quantity">الكمية</td>
							<td class="total">المجموع</td>
							<td></td>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td class="cart_product">
								<router-link to="/"><img src="images/cart/one.png" alt=""></router-link>
							</td>
							<td class="cart_description">
								<h4><router-link to="/">منتج 1</router-link></h4>
							</td>
							<td class="cart_price">
								<p>$59</p>
							</td>
							<td class="cart_quantity">
								<div class="cart_quantity_button">
									<input class="cart_quantity_input" type="text" name="quantity" value="1" autocomplete="off" size="2">
								</div>
							</td>
							<td class="cart_total">
								<p class="cart_total_price">$59</p>
							</td>
							<td class="cart_delete">
								<router-link class="cart_quantity_delete" to="/"><i class="fa fa-times"></i></router-link>
							</td>
						</tr>

						<tr>
							<td class="cart_product">
								<router-link to="/"><img src="images/cart/two.png" alt=""></router-link>
							</td>
							<td class="cart_description">
								<h4><router-link to="/">منتج 2</router-link></h4>
							</td>
							<td class="cart_price">
								<p>$59</p>
							</td>
							<td class="cart_quantity">
								<div class="cart_quantity_button">
									<input class="cart_quantity_input" type="text" name="quantity" value="1" autocomplete="off" size="2">
								</div>
							</td>
							<td class="cart_total">
								<p class="cart_total_price">$59</p>
							</td>
							<td class="cart_delete">
								<router-link class="cart_quantity_delete" to="/"><i class="fa fa-times"></i></router-link>
							</td>
						</tr>
						<tr>
							<td class="cart_product">
								<router-link to="/"><img src="images/cart/three.png" alt=""></router-link>
							</td>
							<td class="cart_description">
								<h4><router-link to="/">منتج 3</router-link></h4>
							</td>
							<td class="cart_price">
								<p>$59</p>
							</td>
							<td class="cart_quantity">
								<div class="cart_quantity_button">
									<input class="cart_quantity_input" type="text" name="quantity" value="1" autocomplete="off" size="2">
								</div>
							</td>
							<td class="cart_total">
								<p class="cart_total_price">$59</p>
							</td>
							<td class="cart_delete">
								<router-link class="cart_quantity_delete" to="/"><i class="fa fa-times"></i></router-link>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	</section> <!--/#cart_items-->

	<section id="do_action">
		<div class="container">

			<div class="row">
				
				<div class="col-sm-6">
					<div class="total_area">
						<ul>
							<li>إجمالي عربة التسوق <span>$59</span></li>
							<li>الضريبة <span>$2</span></li>
							<li>تكلفة الشحن <span>Free</span></li>
							<li>المجموع <span>$61</span></li>
						</ul>
							<router-link class="btn btn-default update" to="">حفظ التعديلات</router-link>
							<router-link class="btn btn-default check_out" to="">اتمام عملية الشراء</router-link>
					</div>
				</div>
			</div>
		</div>
	</section><!--/#do_action-->

</template>
<script>
export default {
    name:'CartView',
}
</script>