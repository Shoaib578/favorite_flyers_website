import React from 'react'

class Sidebar extends React.Component {
    render() {
        return (
          <div className="sidebar-container" >
          <br />
          <br />
          

          <div className="sidemenu-container navbar-collapse collapse fixed-menu"  style={{backgroundColor:'#65e295',height:'100%',overflowY:'scroll'}}>
            <div  className="left-sidemenu">
              <ul style={{paddingTop: '20px'}} data-keep-expanded="false" data-auto-scroll="true" data-slide-speed={200}>
                <li className="sidebar-toggler-wrapper ">
                  <div>
                    <span />
                  </div>
                </li>
                <li className="sidebar-user-panel mt-3">
                  <div className="user-panel">
                    <div className="pull-left image ">
                      <img src="https://sleepy-gorge-75981.herokuapp.com/assets/img/dp.jpg" className="img-circle user-img-circle" alt="User Image" />
                    </div>
                    <div className="pull-left info">
                      <p style={{color:'white'}}> Kiran Patel</p>
                      <a href="#" style={{color:'white'}}><i className="fa fa-circle user-online" /><span className="txtOnline" style={{color:'white'}}> Online</span></a>
                    </div>
                  </div>
                </li>
             
               

            
                <li className="nav-item" style={{marginTop:5}}>
                  <a href="/flyers"  style={{backgroundColor:'#65e295',color:'white'}} className="nav-link nav-toggle"><i className="fa fa-dashboard" style={{fontSize:23}}></i>

                    <span className="title ml-2">Dashboard</span> 
                  </a>
                </li>


                
                <li className="nav-item" style={{marginTop:15}}>
                  <a href="/blogs"  style={{backgroundColor:'#65e295',color:'white'}} className="nav-link nav-toggle"><i style={{fontSize:23}} className="fa fa-book"></i>

                    <span className="title ml-2">Blogs</span> 
                  </a>
                </li>


                <li className="nav-item" style={{marginTop:15}}>
                  <a href="/favorite_flyers/user/2/"  style={{backgroundColor:'#65e295',color:'white'}} className="nav-link nav-toggle"><i style={{fontSize:23}} className="fa fa-heart"></i>

                    <span className="title ml-2">My Favoirte Flyers</span> 
                  </a>
                </li>


                <li className="nav-item" style={{marginTop:15}}>
                  <a href="#" className="nav-link nav-toggle" style={{backgroundColor:'#65e295',color:'white'}}><i style={{fontSize:23}} className="fa fa-heart"></i>

                    <span className="title ml-2">My Favoirte Coupons</span> 
                  </a>
                </li>

                 <hr />


                 <li  className="nav-item" style={{marginTop:15}}>
                 <a  className="nav-link nav-toggle">

                  <span className="title text-dark">Categories</span> 
                  </a>
                </li>
                
                <li className="nav-item">
                  <a href="#" className="nav-link nav-toggle">

                    <span className="title text-white">All</span> 
                  </a>
                </li>



                <li className="nav-item">
                  <a href="#" className="nav-link nav-toggle">

                    <span className="title text-white">Grocery</span> 
                  </a>
                </li>




                <li className="nav-item">
                  <a href="#" className="nav-link nav-toggle">

                    <span className="title text-white">Health</span> 
                  </a>
                </li>





                <li className="nav-item">
                  <a href="#" className="nav-link nav-toggle">

                    <span className="title text-white">Electronics</span> 
                  </a>
                </li>




                <li className="nav-item">
                  <a href="#" className="nav-link nav-toggle">

                    <span className="title text-white">Tools</span> 
                  </a>
                </li>

                <li className="nav-item">
                  <a href="#" className="nav-link nav-toggle">

                    <span className="title text-white">Home</span> 
                  </a>
                </li>



                <li className="nav-item">
                  <a href="#" className="nav-link nav-toggle">

                    <span className="title text-white">Fashion</span> 
                  </a>
                </li>



                <li className="nav-item">
                  <a href="#" className="nav-link nav-toggle">

                    <span className="title text-white">Active</span> 
                  </a>
                </li>


                <li className="nav-item">
                  <a href="#" className="nav-link nav-toggle">

                    <span className="title text-white">Children</span> 
                  </a>
                </li>


                <li className="nav-item">
                  <a href="#" className="nav-link nav-toggle">

                    <span className="title text-white">Pet</span> 
                  </a>
                </li>



                <li className="nav-item">
                  <a href="#" className="nav-link nav-toggle">

                    <span className="title text-white">Catalogue</span> 
                  </a>
                </li>

                
                  </ul>
               
              
            </div>
          </div>
        </div>
        )
    }
}

export default Sidebar