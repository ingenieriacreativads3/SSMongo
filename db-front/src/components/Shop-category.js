import React from 'react';

class ShopCategory extends React.Component{
    render(){
        return(
            <div class="menu">

          
            <div class="menu_search">
                <form action="#" id="menu_search_form" class="menu_search_form">
                    <input type="text" class="search_input" placeholder="Search Item" required="required"></input>
                    <button class="menu_search_button"><img src="images/search.png" alt=""></img></button>
                </form>
            </div>
           
            <div class="menu_nav">
                <ul>
                    <li><a href="#">Women</a></li>
                    <li><a href="#">Men</a></li>
                    <li><a href="#">Kids</a></li>
                    <li><a href="#">Home Deco</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
           
            <div class="menu_contact">
                <div class="menu_phone d-flex flex-row align-items-center justify-content-start">
                    <div><div><img src="images/phone.svg" alt="https://www.flaticon.com/authors/freepik"></img></div></div>
                    <div>+1 912-252-7350</div>
                </div>
                <div class="menu_social">
                    <ul class="menu_social_list d-flex flex-row align-items-start justify-content-start">
                        <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i class="fa fa-youtube-play" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i class="fa fa-google-plus" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
                    </ul>
                </div>
            </div>
        </div>
        
        <div class="super_container">
        
           
        
            <header class="header">
                <div class="header_overlay"></div>
                <div class="header_content d-flex flex-row align-items-center justify-content-start">
                    <div class="logo">
                        <a href="#">
                            <div class="d-flex flex-row align-items-center justify-content-start">
                                <div><img src="images/logo_1.png" alt=""></img></div>
                                <div>Little Closet</div>
                            </div>
                        </a>	
                    </div>
                    <div class="hamburger"><i class="fa fa-bars" aria-hidden="true"></i></div>
                    <nav class="main_nav">
                        <ul class="d-flex flex-row align-items-start justify-content-start">
                            <li><a href="#">Women</a></li>
                            <li><a href="#">Men</a></li>
                            <li><a href="#">Kids</a></li>
                            <li><a href="#">Home Deco</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </nav>
                    <div class="header_right d-flex flex-row align-items-center justify-content-start ml-auto">
                       
                        <div class="header_search">
                            <form action="#" id="header_search_form">
                                <input type="text" class="search_input" placeholder="Search Item" required="required"></input>
                                <button class="header_search_button"><img src="images/search.png" alt=""></img></button>
                            </form>
                        </div>
                     
                        <div class="user"><a href="#"><div><img src="images/user.svg" alt="https://www.flaticon.com/authors/freepik"></img><div>1</div></div></a></div>
                       
                        <div class="cart"><a href="cart.html"><div><img class="svg" src="images/cart.svg" alt="https://www.flaticon.com/authors/freepik"></img></div></a></div>
                       
                        <div class="header_phone d-flex flex-row align-items-center justify-content-start">
                            <div><div><img src="images/phone.svg" alt="https://www.flaticon.com/authors/freepik"></img></div></div>
                            <div>+1 912-252-7350</div>
                        </div>
                    </div>
                </div>
            </header>
        
            <div class="super_container_inner">
                <div class="super_overlay"></div>
        
              
        
                <div class="home">
                    <div class="home_container d-flex flex-column align-items-center justify-content-end">
                        <div class="home_content text-center">
                            <div class="home_title">Category Page</div>
                            <div class="breadcrumbs d-flex flex-column align-items-center justify-content-center">
                                <ul class="d-flex flex-row align-items-start justify-content-start text-center">
                                    <li><a href="#">Home</a></li>
                                    <li><a href="category.html">Woman</a></li>
                                    <li>New Products</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
        
             
        
                <div class="products">
                    <div class="container">
                        <div class="row products_bar_row">
                            <div class="col">
                                <div class="products_bar d-flex flex-lg-row flex-column align-items-lg-center align-items-start justify-content-lg-start justify-content-center">
                                    <div class="products_bar_links">
                                        <ul class="d-flex flex-row align-items-start justify-content-start">
                                            <li><a href="#">All</a></li>
                                            <li><a href="#">Hot Products</a></li>
                                            <li class="active"><a href="#">New Products</a></li>
                                            <li><a href="#">Sale Products</a></li>
                                        </ul>
                                    </div>
                                    <div class="products_bar_side d-flex flex-row align-items-center justify-content-start ml-lg-auto">
                                        <div class="products_dropdown product_dropdown_sorting">
                                            <div class="isotope_sorting_text"><span>Default Sorting</span><i class="fa fa-caret-down" aria-hidden="true"></i></div>
                                            <ul>
                                                <li class="item_sorting_btn" data-isotope-option='{ "sortBy": "original-order" }'>Default</li>
                                                <li class="item_sorting_btn" data-isotope-option='{ "sortBy": "price" }'>Price</li>
                                                <li class="item_sorting_btn" data-isotope-option='{ "sortBy": "name" }'>Name</li>
                                            </ul>
                                        </div>
                                        <div class="product_view d-flex flex-row align-items-center justify-content-start">
                                            <div class="view_item active"><img src="images/view_1.png" alt=""></img></div>
                                            <div class="view_item"><img src="images/view_2.png" alt=""></img></div>
                                            <div class="view_item"><img src="images/view_3.png" alt=""></img></div>
                                        </div>
                                        <div class="products_dropdown text-right product_dropdown_filter">
                                            <div class="isotope_filter_text"><span>Filter</span><i class="fa fa-caret-down" aria-hidden="true"></i></div>
                                            <ul>
                                                <li class="item_filter_btn" data-filter="*">All</li>
                                                <li class="item_filter_btn" data-filter=".hot">Hot</li>
                                                <li class="item_filter_btn" data-filter=".new">New</li>
                                                <li class="item_filter_btn" data-filter=".sale">Sale</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row products_row products_container grid">
                            
                            
                            <div class="col-xl-4 col-md-6 grid-item new">
                                <div class="product">
                                    <div class="product_image"><img src="images/product_1.jpg" alt=""></img></div>
                                    <div class="product_content">
                                        <div class="product_info d-flex flex-row align-items-start justify-content-start">
                                            <div>
                                                <div>
                                                    <div class="product_name"><a href="product.html">Cool Clothing with Brown Stripes</a></div>
                                                    <div class="product_category">In <a href="category.html">Category</a></div>
                                                </div>
                                            </div>
                                            <div class="ml-auto text-right">
                                                <div class="rating_r rating_r_4 home_item_rating"><i></i><i></i><i></i><i></i><i></i></div>
                                                <div class="product_price text-right">$3<span>.99</span></div>
                                            </div>
                                        </div>
                                        <div class="product_buttons">
                                            <div class="text-right d-flex flex-row align-items-start justify-content-start">
                                                <div class="product_button product_fav text-center d-flex flex-column align-items-center justify-content-center">
                                                    <div><div><img src="images/heart_2.svg" class="svg" alt=""></img><div>+</div></div></div>
                                                </div>
                                                <div class="product_button product_cart text-center d-flex flex-column align-items-center justify-content-center">
                                                    <div><div><img src="images/cart.svg" class="svg" alt=""></img><div>+</div></div></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
        
                           
                            <div class="col-xl-4 col-md-6 grid-item hot">
                                <div class="product">
                                    <div class="product_image"><img src="images/product_2.jpg" alt=""></img></div>
                                    <div class="product_content">
                                        <div class="product_info d-flex flex-row align-items-start justify-content-start">
                                            <div>
                                                <div>
                                                    <div class="product_name"><a href="product.html">Hype Grey Shirt</a></div>
                                                    <div class="product_category">In <a href="category.html">Category</a></div>
                                                </div>
                                            </div>
                                            <div class="ml-auto text-right">
                                                <div class="rating_r rating_r_4 home_item_rating"><i></i><i></i><i></i><i></i><i></i></div>
                                                <div class="product_price text-right">$4<span>.99</span></div>
                                            </div>
                                        </div>
                                        <div class="product_buttons">
                                            <div class="text-right d-flex flex-row align-items-start justify-content-start">
                                                <div class="product_button product_fav text-center d-flex flex-column align-items-center justify-content-center">
                                                    <div><div><img src="images/heart_2.svg" class="svg" alt=""></img><div>+</div></div></div>
                                                </div>
                                                <div class="product_button product_cart text-center d-flex flex-column align-items-center justify-content-center">
                                                    <div><div><img src="images/cart.svg" class="svg" alt=""></img><div>+</div></div></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
        
                         
                            <div class="col-xl-4 col-md-6 grid-item sale">
                                <div class="product">
                                    <div class="product_image"><img src="images/product_3.jpg" alt=""></img></div>
                                    <div class="product_content">
                                        <div class="product_info d-flex flex-row align-items-start justify-content-start">
                                            <div>
                                                <div>
                                                    <div class="product_name"><a href="product.html">Long Sleeve Jacket</a></div>
                                                    <div class="product_category">In <a href="category.html">Category</a></div>
                                                </div>
                                            </div>
                                            <div class="ml-auto text-right">
                                                <div class="rating_r rating_r_4 home_item_rating"><i></i><i></i><i></i><i></i><i></i></div>
                                                <div class="product_price text-right">$13<span>.99</span></div>
                                            </div>
                                        </div>
                                        <div class="product_buttons">
                                            <div class="text-right d-flex flex-row align-items-start justify-content-start">
                                                <div class="product_button product_fav text-center d-flex flex-column align-items-center justify-content-center">
                                                    <div><div><img src="images/heart_2.svg" class="svg" alt=""></img><div>+</div></div></div>
                                                </div>
                                                <div class="product_button product_cart text-center d-flex flex-column align-items-center justify-content-center">
                                                    <div><div><img src="images/cart.svg" class="svg" alt=""></img><div>+</div></div></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
        
                           
                            <div class="col-xl-4 col-md-6 grid-item sale">
                                <div class="product">
                                    <div class="product_image"><img src="images/product_4.jpg" alt=""></img></div>
                                    <div class="product_content">
                                        <div class="product_info d-flex flex-row align-items-start justify-content-start">
                                            <div>
                                                <div>
                                                    <div class="product_name"><a href="product.html">Denim Men Shirt</a></div>
                                                    <div class="product_category">In <a href="category.html">Category</a></div>
                                                </div>
                                            </div>
                                            <div class="ml-auto text-right">
                                                <div class="rating_r rating_r_4 home_item_rating"><i></i><i></i><i></i><i></i><i></i></div>
                                                <div class="product_price text-right">$5<span>.99</span></div>
                                            </div>
                                        </div>
                                        <div class="product_buttons">
                                            <div class="text-right d-flex flex-row align-items-start justify-content-start">
                                                <div class="product_button product_fav text-center d-flex flex-column align-items-center justify-content-center">
                                                    <div><div><img src="images/heart_2.svg" class="svg" alt=""></img><div>+</div></div></div>
                                                </div>
                                                <div class="product_button product_cart text-center d-flex flex-column align-items-center justify-content-center">
                                                    <div><div><img src="images/cart.svg" class="svg" alt=""></img><div>+</div></div></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
        
                          
                            <div class="col-xl-4 col-md-6 grid-item hot">
                                <div class="product">
                                    <div class="product_image"><img src="images/product_5.jpg" alt=""></img></div>
                                    <div class="product_content">
                                        <div class="product_info d-flex flex-row align-items-start justify-content-start">
                                            <div>
                                                <div>
                                                    <div class="product_name"><a href="product.html">Long Red Shirt</a></div>
                                                    <div class="product_category">In <a href="category.html">Category</a></div>
                                                </div>
                                            </div>
                                            <div class="ml-auto text-right">
                                                <div class="rating_r rating_r_4 home_item_rating"><i></i><i></i><i></i><i></i><i></i></div>
                                                <div class="product_price text-right">$7<span>.99</span></div>
                                            </div>
                                        </div>
                                        <div class="product_buttons">
                                            <div class="text-right d-flex flex-row align-items-start justify-content-start">
                                                <div class="product_button product_fav text-center d-flex flex-column align-items-center justify-content-center">
                                                    <div><div><img src="images/heart_2.svg" class="svg" alt=""></img><div>+</div></div></div>
                                                </div>
                                                <div class="product_button product_cart text-center d-flex flex-column align-items-center justify-content-center">
                                                    <div><div><img src="images/cart.svg" class="svg" alt=""></img><div>+</div></div></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
        
                          
                            <div class="col-xl-4 col-md-6 grid-item new">
                                <div class="product">
                                    <div class="product_image"><img src="images/product_6.jpg" alt=""></img></div>
                                    <div class="product_content">
                                        <div class="product_info d-flex flex-row align-items-start justify-content-start">
                                            <div>
                                                <div>
                                                    <div class="product_name"><a href="product.html">Short Sleeve Shirt</a></div>
                                                    <div class="product_category">In <a href="category.html">Category</a></div>
                                                </div>
                                            </div>
                                            <div class="ml-auto text-right">
                                                <div class="rating_r rating_r_4 home_item_rating"><i></i><i></i><i></i><i></i><i></i></div>
                                                <div class="product_price text-right">$12<span>.99</span></div>
                                            </div>
                                        </div>
                                        <div class="product_buttons">
                                            <div class="text-right d-flex flex-row align-items-start justify-content-start">
                                                <div class="product_button product_fav text-center d-flex flex-column align-items-center justify-content-center">
                                                    <div><div><img src="images/heart_2.svg" class="svg" alt=""></img><div>+</div></div></div>
                                                </div>
                                                <div class="product_button product_cart text-center d-flex flex-column align-items-center justify-content-center">
                                                    <div><div><img src="images/cart.svg" class="svg" alt=""></img><div>+</div></div></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
        
                           
                            <div class="col-xl-4 col-md-6 grid-item sale">
                                <div class="product">
                                    <div class="product_image"><img src="images/product_7.jpg" alt=""></img></div>
                                    <div class="product_content">
                                        <div class="product_info d-flex flex-row align-items-start justify-content-start">
                                            <div>
                                                <div>
                                                    <div class="product_name"><a href="product.html">Red Stripped Dress</a></div>
                                                    <div class="product_category">In <a href="category.html">Category</a></div>
                                                </div>
                                            </div>
                                            <div class="ml-auto text-right">
                                                <div class="rating_r rating_r_4 home_item_rating"><i></i><i></i><i></i><i></i><i></i></div>
                                                <div class="product_price text-right">$6<span>.99</span></div>
                                            </div>
                                        </div>
                                        <div class="product_buttons">
                                            <div class="text-right d-flex flex-row align-items-start justify-content-start">
                                                <div class="product_button product_fav text-center d-flex flex-column align-items-center justify-content-center">
                                                    <div><div><img src="images/heart_2.svg" class="svg" alt=""></img><div>+</div></div></div>
                                                </div>
                                                <div class="product_button product_cart text-center d-flex flex-column align-items-center justify-content-center">
                                                    <div><div><img src="images/cart.svg" class="svg" alt=""></img><div>+</div></div></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
        
                           
                            <div class="col-xl-4 col-md-6 grid-item new">
                                <div class="product">
                                    <div class="product_image"><img src="images/product_8.jpg" alt=""></img></div>
                                    <div class="product_content">
                                        <div class="product_info d-flex flex-row align-items-start justify-content-start">
                                            <div>
                                                <div>
                                                    <div class="product_name"><a href="product.html">White Cotton Shirt</a></div>
                                                    <div class="product_category">In <a href="category.html">Category</a></div>
                                                </div>
                                            </div>
                                            <div class="ml-auto text-right">
                                                <div class="rating_r rating_r_4 home_item_rating"><i></i><i></i><i></i><i></i><i></i></div>
                                                <div class="product_price text-right">$21<span>.99</span></div>
                                            </div>
                                        </div>
                                        <div class="product_buttons">
                                            <div class="text-right d-flex flex-row align-items-start justify-content-start">
                                                <div class="product_button product_fav text-center d-flex flex-column align-items-center justify-content-center">
                                                    <div><div><img src="images/heart_2.svg" class="svg" alt=""></img><div>+</div></div></div>
                                                </div>
                                                <div class="product_button product_cart text-center d-flex flex-column align-items-center justify-content-center">
                                                    <div><div><img src="images/cart.svg" class="svg" alt=""></img><div>+</div></div></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
        
                          
                            <div class="col-xl-4 col-md-6 grid-item sale">
                                <div class="product">
                                    <div class="product_image"><img src="images/product_9.jpg" alt=""></img></div>
                                    <div class="product_content">
                                        <div class="product_info d-flex flex-row align-items-start justify-content-start">
                                            <div>
                                                <div>
                                                    <div class="product_name"><a href="product.html">Black Short Sleeve Dress</a></div>
                                                    <div class="product_category">In <a href="category.html">Category</a></div>
                                                </div>
                                            </div>
                                            <div class="ml-auto text-right">
                                                <div class="rating_r rating_r_4 home_item_rating"><i></i><i></i><i></i><i></i><i></i></div>
                                                <div class="product_price text-right">$7<span>.99</span></div>
                                            </div>
                                        </div>
                                        <div class="product_buttons">
                                            <div class="text-right d-flex flex-row align-items-start justify-content-start">
                                                <div class="product_button product_fav text-center d-flex flex-column align-items-center justify-content-center">
                                                    <div><div><img src="images/heart_2.svg" class="svg" alt=""></img><div>+</div></div></div>
                                                </div>
                                                <div class="product_button product_cart text-center d-flex flex-column align-items-center justify-content-center">
                                                    <div><div><img src="images/cart.svg" class="svg" alt=""></img><div>+</div></div></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
        
                        </div>
                        <div class="row page_nav_row">
                            <div class="col">
                                <div class="page_nav">
                                    <ul class="d-flex flex-row align-items-start justify-content-center">
                                        <li class="active"><a href="#">01</a></li>
                                        <li><a href="#">02</a></li>
                                        <li><a href="#">03</a></li>
                                        <li><a href="#">04</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        
              
        
                <footer class="footer">
                    <div class="footer_content">
                        <div class="container">
                            <div class="row">
                                
                                
                                <div class="col-lg-4 footer_col">
                                    <div class="footer_about">
                                        <div class="footer_logo">
                                            <a href="#">
                                                <div class="d-flex flex-row align-items-center justify-content-start">
                                                    <div class="footer_logo_icon"><img src="images/logo_2.png" alt=""></img></div>
                                                    <div>Little Closet</div>
                                                </div>
                                            </a>		
                                        </div>
                                        <div class="footer_about_text">
                                            <p>Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse potenti. Fusce venenatis vel velit vel euismod.</p>
                                        </div>
                                    </div>
                                </div>
        
                              
                                <div class="col-lg-4 footer_col">
                                    <div class="footer_menu">
                                        <div class="footer_title">Support</div>
                                        <ul class="footer_list">
                                            <li>
                                                <a href="#"><div>Customer Service<div class="footer_tag_1">online now</div></div></a>
                                            </li>
                                            <li>
                                                <a href="#"><div>Return Policy</div></a>
                                            </li>
                                            <li>
                                                <a href="#"><div>Size Guide<div class="footer_tag_2">recommended</div></div></a>
                                            </li>
                                            <li>
                                                <a href="#"><div>Terms and Conditions</div></a>
                                            </li>
                                            <li>
                                                <a href="#"><div>Contact</div></a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
        
                           
                                <div class="col-lg-4 footer_col">
                                    <div class="footer_contact">
                                        <div class="footer_title">Stay in Touch</div>
                                        <div class="newsletter">
                                            <form action="#" id="newsletter_form" class="newsletter_form">
                                                <input type="email" class="newsletter_input" placeholder="Subscribe to our Newsletter" required="required"></input>
                                                <button class="newsletter_button">+</button>
                                            </form>
                                        </div>
                                        <div class="footer_social">
                                            <div class="footer_title">Social</div>
                                            <ul class="footer_social_list d-flex flex-row align-items-start justify-content-start">
                                                <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                                                <li><a href="#"><i class="fa fa-youtube-play" aria-hidden="true"></i></a></li>
                                                <li><a href="#"><i class="fa fa-google-plus" aria-hidden="true"></i></a></li>
                                                <li><a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="footer_bar">
                        <div class="container">
                            <div class="row">
                                <div class="col">
                                    <div class="footer_bar_content d-flex flex-md-row flex-column align-items-center justify-content-start">
                                        <div class="copyright order-md-1 order-2">
        Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i class="fa fa-heart-o" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
        </div>
                                        <nav class="footer_nav ml-md-auto order-md-2 order-1">
                                            <ul class="d-flex flex-row align-items-center justify-content-start">
                                                <li><a href="category.html">Women</a></li>
                                                <li><a href="category.html">Men</a></li>
                                                <li><a href="category.html">Kids</a></li>
                                                <li><a href="category.html">Home Deco</a></li>
                                                <li><a href="#">Contact</a></li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
                
        </div>
        )
    }
}

export default ShopCategory