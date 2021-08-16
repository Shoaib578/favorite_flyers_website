import React from 'react'
import Header from '../Header/Header'
import Sidebar from '../Sidebar/Sidebar'
import './fonts/simple-line-icons/simple-line-icons.min.css'
import './fonts/font-awesome/css/font-awesome.min.css'
import './fonts/material-design-icons/material-icon.css'
import './assets/plugins/material/material.min.css'
import './assets/css/material_style.css'
import './assets/css/theme/dark/theme_style.css'
import './assets/css/theme/dark/style.css'
import './assets/css/responsive.css'
import './assets/css/theme/dark/theme-color.css'
class EditProfile extends React.Component {
    render(){
        return(
            <div  style={{backgroundColor:'#65e295'}}>
            <Header />
            <Sidebar />

             
            <div style={{color:'black'}}>
            
                <br />
            <div className="profile-sidebar float-right" style={{width: '80%'}}>
     <div className="card card-topline-aqua" style={{backgroundColor:'#65e295'}}>
       <div className="card-body no-padding height-9">
         <div className="row">
           <div className="profile-userpic">
             <img src="https://sleepy-gorge-75981.herokuapp.com/assets/img/dp.jpg" className="img-responsive" alt="" /> </div>
         </div>
         <div className="profile-usertitle">
           <div className="profile-usertitle-name"> John Deo </div>
           <div className="profile-usertitle-job"> Jr. Professor </div>
         </div>
         <ul className="list-group " style={{backgroundColor:'#65e295'}}>
           <li className="list-group-item">
             <b>Email</b> <a className="pull-right">
             <input class="form-control" type="email" placeholder="Email"/>

             </a>
           </li>
           <li className="list-group-item">
             <b>Phone Number</b> <a className="pull-right">
             <input class="form-control" type="number" placeholder="Phone Number"/>

             </a>
           </li>
           <li className="list-group-item">
             <b>Gender</b> <a className="pull-right">
             <select  class="form-control ">
                            <option  class="form-control" value="">Gender</option>

                            <option  class="form-control" value="Male">Male</option>
                            <option  class="form-control" value="FeMale">FeMale</option>

                        </select>
             </a>
           </li>


           <li className="list-group-item">
             <b>Postal Code</b> <a className="pull-right">
             <input class="form-control" type="number" placeholder="Postal Code"/>

             </a>
           </li>


           <li className="list-group-item">
             <b>User Type</b> <a className="pull-right">
             <select  class="form-control ">
                            <option  class="form-control" value="">User Type</option>

                            <option  class="form-control" value="Bussiness Client">Bussiness Client</option>
                            <option  class="form-control" value="Normal User">Normal User</option>

                        </select>
                 
             </a>
           </li>


           <li className="list-group-item">
             <b>C.Interest</b> <a className="pull-right">
                 
                 <input class="form-control" type="text" placeholder="C.Interest"/>
             </a>
           </li>
         </ul>
         <div className="profile-userbuttons">
              <a href="/user/2/edit/" className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect m-b-10 btn-circle btn-primary">Update</a>
 
            </div>
       </div>
     </div>
    
    

   </div>

   

            </div>
      </div>
           
        )
    }
}

export default EditProfile