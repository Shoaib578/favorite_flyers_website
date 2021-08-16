import React from 'react';

class Footer extends React.Component {
    render(){
        return(
            <footer class="footer">
<div class="l-footer">

<a href="/"  style={{fontSize:20,color:'black'}}>favorite <span>flyer</span></a>

<p>
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam atque recusandae in sit sunt molestiae aliquid fugit. Mollitia eaque tempore iure sit nobis? Vitae nemo, optio maiores numquam quis recusandae.</p>
</div>
<ul class="r-footer">
<li>
<p style={{color:'black'}}>
Company</p>
<ul class="box">
<li><a href="/blogs">Blogs</a></li>


</ul>
</li>
<li class="features">
<p style={{color:'black'}}>
Store Flyers</p>
<ul class="box h-box">
<li><a href="#">Metro Flyers</a></li>
<li><a href="#">Super C Flyers</a></li>
<li><a href="#">Food Basics Flyers</a></li>
<li><a href="#">No Frills Flyers</a></li>
<li><a href="#">FreshCo Flyers</a></li>
<li><a href="#">Foodland Flyers</a></li>
</ul>
</li>
<li>
  <p style={{color:'black'}}>
  STORE FLYERS BY CITY</p>
<ul class="box">
<li><a href="#">Toronto Store</a></li>
<li><a href="#">Montreal Store</a></li>
<li><a href="#">Vancouver Store</a></li>
<li><a href="#">Calgary Store</a></li>



</ul>
</li>
</ul>
<div class="b-footer ">
<p class="text-white">
All rights reserved by ©favorite flyer 2021 </p>
</div>
</footer>
        )
    }
}

export default Footer