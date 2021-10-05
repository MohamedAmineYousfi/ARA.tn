import React from 'react';

class Login extends React.Component {
	constructor(props) {
		super(props);
		
	}	 
	render() {
		return (
			<div>
				<div className="login-wrap">
	<div className="login-html">
		<input id="tab-1" type="radio" name="tab" className="sign-in" defaultChecked/><label htmlFor="tab-1" className="tab">Login</label>
		<input id="tab-2" type="radio" name="tab" className="sign-up"/><label htmlFor="tab-2" className="tab"></label>
		<div className="login-form">
			<div className="sign-in-htm">
				<div className="group">
					<label htmlFor="user" className="label">Username</label>
					<input id="user" type="text"  className ='input' name="username" onChange={this.props.handleChange}/>
				</div>
				<div className="group">
					<label htmlFor="pass" className="label">Password</label>
					<input id="pass" type="password" className="input" name="password" data-type="password" onChange={this.props.handleChange} />
				</div>
			
				<div className="group">
					<input type="submit" className="button" value="Sign In" onClick={()=> this.props.connect()}/>
				</div>
								<div className="hr"></div>
				<div className="foot-lnk" onClick={()=> this.props.changeView("signup")}>
					<a href="#create">Create An Account</a>
				</div>
			

				</div>
			</div>
		</div>
	</div>
</div>
		)
	}

}
export default Login;