import React from 'react';

class Signup extends React.Component {
	constructor(props) {
		super(props);
		 this.state={
		   username: '',
		   password: '',
		   phoneNumber: ''
		 }
	}
	render() {
		return (
			<div>
				<div class="login-wrap">
	<div class="login-html">
		<input id="tab-2" type="radio" name="tab" class="sign-up" checked/><label for="tab-2" class="tab">Sign Up</label>
		<div class="login-form">

			<div class="sign-up-htm">
				<div class="group">
					<label for="user" class="label">Username</label>
					<input id="user" type="text" class="input"/>
				</div>
				<div class="group">
					<label for="pass" class="label">Password</label>
					<input id="pass" type="password" class="input" data-type="password"/>
				</div>
				<div class="group">
					<label for="pass" class="label">Phone Number</label>
					<input id="pass" type="text" class="input"/>
				</div>
				<div class="group">
					<input type="submit" class="button" value="Sign Up"/>
				</div>
				<div class="hr"></div>
				<div class="foot-lnk">
					<label for="tab-1">Already Member?</label>
				</div>
			</div>
		</div>
	</div>
</div>
			</div>
		)
	}

}
export default Signup;