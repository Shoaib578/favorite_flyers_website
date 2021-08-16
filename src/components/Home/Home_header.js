import React from 'react'

class HomeHeader extends React.Component {
    render(){
        return (
            <div className="page-header navbar navbar-fixed-top " style={{backgroundColor:'#65e295'}}>
            <div className="page-header-inner ">
                
                <div className="page-logo" style={{backgroundColor:'#65e295'}}>
                    
                    
                      <a href="/"> 
                    <span style={{fontSize:17}}>Favorite Flyers</span> 
                      
                       <img className='logo-icon material-icons ' src="https://sleepy-gorge-75981.herokuapp.com/assets/img/logo.png" style={{width:60,height:60}}/></a>
                    
                   
                </div>
               
				
              
                
 

               
                <div className="top-menu">
                    <ul className="nav navbar-nav pull-right">
                    	
                    	
                       
                        
                        
                       

                        <li  className="dropdown dropdown-user">
                            
                            <a href="/advertisement_login" style={{color:'white'}}><i ></i>Advertise With Us</a>
   
                           </li>



 						<li className="dropdown dropdown-user">
                            
                         <a href="/login" style={{color:'white'}}><i ></i>Sign in </a>

                        </li>
                        <li className="dropdown dropdown-user">
                            
                         <a href="/register" style={{color:'white'}}><i ></i>Sign up </a>

                        </li>
                       
                        
                    </ul>
                </div>
            </div>
            
        </div>
        )
    }
}

export default HomeHeader