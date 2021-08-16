import React, { Component } from 'react'
import Header from '../Header/Header'
import Sidebar from '../Sidebar/Sidebar'



export default class Profile extends Component {
    render() {
        return (
            <div style={{backgroundColor:'#65e295'}}>
               <Header />
               <Sidebar />

                
               <div style={{backgroundColor:'#65e295',color:'black'}}>
               
                   <br />
               <div className="profile-sidebar float-right" style={{width: '80%',}}>
        <div className="card card-topline-aqua" style={{backgroundColor:'#65e295'}}>
          <div className="card-body no-padding height-9" style={{backgroundColor:'#65e295'}}>
            <div className="row" style={{backgroundColor:'#65e295'}}>
              <div className="profile-userpic">
                <img src="https://sleepy-gorge-75981.herokuapp.com/assets/img/dp.jpg" className="img-responsive" alt="" /> </div>
            </div>
            <div className="profile-usertitle">
              <div className="profile-usertitle-name text-dark"> John Deo </div>
            </div>
            <ul className="list-group " >
              <li className="list-group-item">
                <b>Email</b> <a className="pull-right">theshoaib@gmail.com</a>
              </li>
              <li className="list-group-item">
                <b>Phone Number</b> <a className="pull-right">+9223223</a>
              </li>
              <li className="list-group-item">
                <b>Gender</b> <a className="pull-right">Male</a>
              </li>


              <li className="list-group-item">
                <b>Postal Code</b> <a className="pull-right">02322G</a>
              </li>


              <li className="list-group-item">
                <b>User Type</b> <a className="pull-right">Bussiness Client</a>
              </li>


              <li className="list-group-item">
                <b>C.Interest</b> <a className="pull-right">Grocery</a>
              </li>
            </ul>
            {/* END SIDEBAR USER TITLE */}
            {/* SIDEBAR BUTTONS */}
            <div className="profile-userbuttons">
              <a href="/user/2/edit/" className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect m-b-10 btn-circle btn-primary">Edit</a>
 
            </div>
            {/* END SIDEBAR BUTTONS */}
          </div>
        </div>
       
       

      </div>

      

               </div>
         </div>
              




        )
    }
}
