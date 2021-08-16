import React, { Component } from 'react'
import { GoogleLogin } from 'react-google-login';
import FacebookLogin from 'react-facebook-login';

export default class Login extends Component {
    render() {
        return (
           
			<div style={{flex:1,display:'flex',justifyContent:'center'}}>
              
			<div className="profile-sidebar" style={{width: 600}}>
			
		 <div className="card card-topline-aqua" style={{backgroundColor:'#65e295',}}>
			 
		   <div className="card-body no-padding height-9" style={{backgroundColor:'#65e295',}}>
			
				
					<span class="login100-form-title p-b-34 p-t-27">
						Log in
					</span>
					<div class="wrap-input100 validate-input" data-validate = "Enter username">
						<input class="input100" type="email" name="username" placeholder="Email"/>
						<span class="focus-input100" data-placeholder="&#xf207;"></span>
					</div>
					<div class="wrap-input100 validate-input" data-validate="Enter password">
						<input class="input100" type="password" name="pass" placeholder="Password"/>
						<span class="focus-input100" data-placeholder="&#xf191;"></span>
					</div>
					<div class="contact100-form-checkbox">
						<input class="input-checkbox100" id="ckb1" type="checkbox" name="remember-me"/>
						<label class="label-checkbox100" for="ckb1">
							Remember me
						</label>
					</div>
					<div class="container-login100-form-btn">
						<button class="login100-form-btn">
							Login
						</button>
					</div>
					<div class="text-center p-t-30">
						<a class="txt1 text-white" href="forgot_password.html">
							Forgot Password?
						</a>
					</div>


                    <div class="text-center p-t-30 ">
						<a class="txt1 text-white" href="/register">
							Dont have account want to register
						</a>
					</div>
				
            <center>
            <h3 class="text-white">Sign in With </h3>

            <GoogleLogin
                clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
                //   onSuccess={responseGoogle}
				style={{color:'white'}}
                isSignedIn={true}
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
