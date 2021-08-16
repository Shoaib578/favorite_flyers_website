import React from 'react'


class AdminLogin extends React.Component {
    render(){
        return(
            <div   style={{backgroundColor:'#65e295'}}>
		<div class="container-login100 " >
			<div style={{backgroundColor:'#65e295',width:'40%',padding:50}} >
				
				
					<span class="login100-form-title p-b-34 p-t-27">
					Admin Log in 
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
						<button onClick={()=>window.location = 'http://localhost:3000/admin/home'} class="login100-form-btn">
							Login
						</button>
					</div>
				
            
			</div>

		</div>
	</div>
        )
    }
}

export default AdminLogin