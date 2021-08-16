import React, { Component } from 'react'
import { GoogleLogin } from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
export default class Register extends Component {
    render() {
        return (
			<div style={{flex:1,display:'flex',justifyContent:'center'}}>
              
			<div className="profile-sidebar" style={{width: 600}}>
			
		 <div className="card card-topline-aqua" style={{backgroundColor:'#65e295',}}>
			 
		   <div className="card-body no-padding height-9" style={{backgroundColor:'#65e295',}}>
				<form >
					
					<span class="login100-form-title p-b-34 p-t-27">
						Registration
					</span>
					<div class="row">
					
					<div class="col-lg-6 p-t-20">
					<div class="wrap-input100 validate-input" data-validate = "Enter email">
						<input class="input100" type="email" name="email" placeholder="Email"/>
						<span class="focus-input100" data-placeholder="&#xf207;"></span>
					</div>
					</div>
					<div class="col-lg-6 p-t-20">
					<div class="wrap-input100 validate-input" data-validate="Enter password">
						<input class="input100" type="password" name="pass" placeholder="Password"/>
						<span class="focus-input100" data-placeholder="&#xf191;"></span>
					</div>
					</div>
					<div class="col-lg-6 p-t-20">
					<div class="wrap-input100 validate-input" data-validate="Enter password again">
						<input class="input100" type="password" name="pass2" placeholder="Confirm password"/>
						<span class="focus-input100" data-placeholder="&#xf191;"></span>
					</div>
					</div>


                    <div class="col-lg-6 p-t-20">
					<div class="wrap-input100 validate-input" data-validate = "Enter username">
						<input class="input100" type="number" name="username" placeholder="Phone"/>
						<span class="focus-input100" data-placeholder="&#xf207;"></span>
					</div>
					</div>




                    <div class="col-lg-6 p-t-20">
					<div class=" validate-input" >
						<select  class="input100 ">
                        <option  class="form-control" value="">Gender</option>

                            <option  class="form-control" value="Male" >Male</option>
                            <option  class="form-control" value="Female">Female</option>

                        </select>
						<span class="focus-input100" data-placeholder="&#xf207;"></span>
					</div>
					</div>



                    <div class="col-lg-6 p-t-20">
					<div class="wrap-input100 validate-input" data-validate = "Enter username">
						<input class="input100" type="number" name="username" placeholder="Postal Code"/>
						<span class="focus-input100" >
                        <i class="fa fa-map-marker"  aria-hidden="true"></i>

                        </span>
					</div>
					</div>

                    <div class="col-lg-6 p-t-20">
					<div class=" validate-input" >
						<select  class="input100 ">
                            <option  class="form-control" value="">User Type</option>

                            <option  class="form-control" value="Bussiness Client">Bussiness Client</option>
                            <option  class="form-control" value="Normal User">Normal User</option>

                        </select>
						<span class="focus-input100" data-placeholder="&#xf207;"></span>
					</div>
					</div>



                    <div class="col-lg-6 p-t-20">
					<div class=" validate-input" >
						<select  class="input100 ">
                            <option  class="form-control" value="">C.Interest</option>

                            <option  class="form-control" value="Bussiness Client">Grocery</option>
                            <option  class="form-control" value="Normal User">Home</option>
                            <option  class="form-control" value="Normal User">Electronics</option>
                            <option  class="form-control" value="Normal User">Health</option>
                            <option  class="form-control" value="Normal User">Tools</option>
                            <option  class="form-control" value="Normal User">Fashion</option>
                            <option  class="form-control" value="Normal User">Active</option>
                            <option  class="form-control" value="Normal User">Childresn</option>
                            <option  class="form-control" value="Normal User">Pet</option>
                            <option  class="form-control" value="Normal User">Catalogue</option>


                        </select>
						<span class="focus-input100" data-placeholder="&#xf207;"></span>
					</div>
					</div>



                    
					</div>
					
                    <br />
                    

					<div class="container-login100-form-btn">
						<button class="login100-form-btn">
							Register
						</button>
					</div>
					<div class="text-center p-t-30 ">
						<a class="txt1 text-white" href="/login">
							You already have a membership?
						</a>
					</div>
				</form>


               
            <center>
            <h3 class="text-white">Sign Up With </h3>

            <GoogleLogin
                clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
                //   onSuccess={responseGoogle}
                isSignedIn={false}
                />
<br />
<br />

<FacebookLogin
    appId="1088597931155576"
    
    fields="name,email,picture"
    // callback={responseFacebook}
    cssClass="my-facebook-button-class"
    icon="fa-facebook"
  />
            </center>
			</div>
		</div>
	</div> 
            </div>
        )
    }
}
