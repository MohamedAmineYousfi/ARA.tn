import React from 'react';

class Signup extends React.Component {
	
	render(props) {
		return (
			<div>
				<div className="limiter">
					<div className="container-login100">
						<div className="wrap-login100 p-t-30 p-b-50">
							<span className="login100-form-title p-b-41">
								Create An Account
							</span>
							<form className="login100-form validate-form p-b-33 p-t-5">


								<div className="wrap-input100 validate-input" data-validate="Enter Username">
									<input className="input100" type="text" name="user" placeholder="Username..." />
									<span className="focus-input100" data-placeholder="&#xe82a;"></span>
								</div>

								<div className="wrap-input100 validate-input" data-validate="Enter Password">
									<input className="input100" type="password" name="password" placeholder="Password..." />
									<span className="focus-input100" data-placeholder="&#xe80f;"></span>
								</div>

                                <div className="wrap-input100 validate-input" data-validate="Enter Phone">
									<input className="input100" type="text" name="phoneNumber" placeholder="Phone Number..." />
									<span className="focus-input100" data-placeholder="&#xe82a;"></span>
								</div>
	
							</form>
                            
							<div className="container-login100-form-btn m-t-32">
								<button className="login100-form-btn" >
									sign up
								</button>
							</div>

						</div>
					</div>
				</div>
			</div>
		)
	}

}
export default Signup;