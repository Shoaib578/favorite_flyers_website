import React from 'react';
import HomeHeader from './Home_header';
import SearchIcon from './img/search.png'
import SyncIcon from './img/sync.png'
import TasksIcon from './img/tasks.png'

import Footer from './footer'

class Home extends React.Component {
    render(){
        return (
            <div>
               <HomeHeader />
         

        
           
               <main role="main">

<section class="text-center">
<br />
         <br />
         <br />
         <br />

  <div class="container">
    <h1 class="font-weight-bold"  style={{color:'#65e295'}}>MONEY SAVING MADE EASIER</h1>
    <p class="lead" style={{color:'#65e295'}}>Get Coupons and flyers tailored to you</p>

    <p class="lead text-muted"  >Type your postal code below to see the latest deals near you</p>

    
<br />
  </div>
  <br />


  
  <div class="input-group" style={{justifyContent: 'center',alingItems: 'center'}}>
  <div  style={{width:300,backgroundColor:'#65e295'}}>
    <input type="search" id="form1" style={{backgroundColor:'#65e295',outline:'none',color:'white',borderColor:'#65e295'}} class="form-control" value="T3K0C6"/>
    
  </div>
  <a href="/flyers" class="btn btn-success">Start Saving</a>

</div>


</section>
<br />
         <br />
         <br />
         <br />

<div class="album py-5 bg-light">
  <div class="container">


    <div class="row">
      <div class="col-md-4" >
        <div class="card shadow-sm" style={{backgroundColor:'#65e295'}}>

        <img src={SearchIcon} style={{width:120,alignSelf: 'center',marginTop:20,}}/>

            <h1 class="text-center" style={{color:'white'}}>Search</h1>
        <p class="lead  text-center" style={{color:'white'}}>Quickly find and compare products.</p>
            
        </div>
      </div>

      


      <div class="col-md-4">
        <div class="card shadow-sm" style={{backgroundColor:'#65e295'}}>

        <img src={TasksIcon} style={{width:120,alignSelf: 'center',marginTop:20}}/>

            <h1 class="text-center" style={{color:'white'}}>Shopping List</h1>
        <p class="lead  text-center" style={{color:'white'}}>Quickly find and compare products.</p>
            
        </div>
      </div>


      <div class="col-md-4">
        <div class="card shadow-sm" style={{backgroundColor:'#65e295'}}>
            <i class="fa fa-sync"></i>
        <img src={SyncIcon} style={{width:120,alignSelf: 'center',marginTop:20}}/>
        <h1 class="text-center" style={{color:'white'}}>Sync</h1>
           
        <p class="lead  text-center" style={{color:'white'}}>Sign in to sync across devices.</p>
            
        </div>
      </div>

      
      
     
     
     
     
    </div>
  </div>
  <br />
<br />
<br />
</div>




<h1 class="text-dark text-center" >Get started</h1>


<br />

<center class="ml-5">
    <p>
        <a href="/" class="text-primary text-bold">Browse on web</a>, or download the app
    </p>
    <p>
        <a href="/playstore" class=" my-2 btn" style={{color:'white',backgroundColor:'#389227'}}>Download From Google PlayStore
</a>
        <a href="/appsStart" class="btn btn-success my-2 ml-3" >
        Download From Appstore
        </a>
      </p>

</center>

<br />
<br />
<br />

</main>

<br />
<br />
<br />

<Footer />
            </div>
        )
    }
}
export default Home