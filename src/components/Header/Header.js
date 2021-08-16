import React from 'react';

class Header extends React.Component {
    render(){
        return(


        
        <div className="page-header navbar navbar-fixed-top" style={{backgroundColor:'#65e295'}}>
            <div className="page-header-inner " style={{backgroundColor:'#65e295'}}>
                
                <div className="page-logo" style={{backgroundColor:'#65e295'}}>
                    <a href="index.html">
                    <span style={{fontSize:17}}>Favorite Flyers</span> 
                    
                        <img className='logo-icon material-icons ' src="https://sleepy-gorge-75981.herokuapp.com/assets/img/logo.png" style={{width:60,height:60}}/>
                   
                    <span className=""></span>
                   
                 </a>
                </div>
               
				
                 <form className="search-form-opened" action="#" method="GET">
                    <div className="input-group">
                        <input type="text" className="form-control" placeholder="Search..." name="query"/>
                        <span className="input-group-btn" >
                          <a href="javascript:;" className="btn submit" >
                             <i className="icon-magnifier"></i>
                           </a>
                        </span>
                    </div>
                </form>
                
                <a href="javascript:;" className="menu-toggler responsive-toggler" data-toggle="collapse" data-target=".navbar-collapse">
                    <span></span>
                </a>
               
                <div className="top-menu">
                    <ul className="nav navbar-nav pull-right">
                    	
                    	
                       
                        
                        <li className="dropdown dropdown-extended dropdown-notification" id="header_notification_bar">
                            <a href="javascript:;" className="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-close-others="true">
                            <i class="fa fa-bell-o"></i>
	                                                <span class="arrow "></span>
                                <span className="badge headerBadgeColor1"> 2 </span>
                            </a>
                            <ul className="dropdown-menu">
                                <li className="external">
                                    <h3><span className="bold">Notifications</span></h3>
                                    <span className="notification-label purple-bgcolor">New 2</span>
                                </li>
                                <li>
                                    <ul className="dropdown-menu-list small-slimscroll-style" data-handle-color="#637283">
                                        <li>
                                            <a href="javascript:;">
                                                <span className="time">just now</span>
                                                <span className="details">
                                                <span className="notification-icon circle deepPink-bgcolor"><i className="fa fa-check"></i></span> You have new Flyer!. </span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="javascript:;">
                                                <span className="time">3 mins</span>
                                                <span className="details">
                                                <span className="notification-icon circle purple-bgcolor"><i className="fa fa-user o"></i></span>
                                                You have new Coupons. </span>
                                            </a>
                                        </li>
                                       
                                       
                                       
                                       
                                    </ul>
                                   
                                </li>
                            </ul>
                        </li>
                       
 					
                       
 						<li className="dropdown dropdown-user">
                            <a href="javascript:;" className="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-close-others="true">
                            <img alt="" className="img-circle " src="https://sleepy-gorge-75981.herokuapp.com/assets/img/dp.jpg" />
                                <span className="username username-hide-on-mobile"> Kiran </span>
                                <i className="fa fa-angle-down"></i>
                            </a>
                            <ul className="dropdown-menu dropdown-menu-default">
                                <li>
                                    <a href="/user/2/profile">
                                        <i className="icon-user"></i> Profile </a>
                                </li>
                             
                              
                               
                             
                                <li>
                                    <a href="/login">
                                        <i className="icon-logout"></i> Log Out </a>
                                </li>
                            </ul>
                        </li>
                       
                        
                    </ul>
                </div>
            </div>
            
        </div>
        )
    }
}

export default Header