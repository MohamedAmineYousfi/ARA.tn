import React from "react";
import axios from "axios";
class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      phoneNumber: "",
    };
    this.signup = this.signup.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
    console.log(this.state)
  }

  signup() {
    axios
      .post("http://localhost:3000/signup", this.state)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <div className="login-wrap">
          <div className="login-html">
            <input
              id="tab-2"
              type="radio"
              name="tab"
              className="sign-up"
              defaultChecked
            />
            <label htmlFor="tab-2" className="tab">
              Sign Up
            </label>
            <div className="login-form">
              <div className="sign-up-htm">
                <div className="group">
                  <label htmlFor="user" className="label">
                    Username
                  </label>
                  <input
                    id="user"
                    type="text"
                    placeholder="Username..."
                    className="input"
                    name="username"
                    onChange={this.handleChange}
                  />
                </div>
                <div className="group">
                  <label htmlFor="pass" className="label">
                    Password
                  </label>
                  <input
                    id="pass"
                    type="password"
                    placeholder="Password..."
                    className="input"
                    data-type="password"
                    name="password"
                    onChange={this.handleChange}
                  />
                </div>
                <div className="group">
                  <label htmlFor="pass" className="label">
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    type="text"
                    placeholder="Phone Number..."
                    className="input"
                    name="phoneNumber"
                    onChange={this.handleChange}
                  />
                </div>
                <div className="group">
                  <input
                    type="submit"
                    className="button"
                    value="Sign Up"
                    onClick={this.signup}
                  />
                </div>
                <div className="hr"></div>
                <div
                  className="foot-lnk"
                  onClick={() => this.props.changeView("login")}
                >
                  <a href="#login">Already Member?</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Signup;
