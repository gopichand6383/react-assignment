import React, { Component } from 'react';
const initialState = {
};
class RegisterComponent extends Component {
    constructor(props) {
        super(props)
        this.state = initialState;
    }
    onChnageHandler = (e) => {
        const { name, value } = e.target;
      this.setState({
        [name]: value
      })
    }

     handlesubmit = () => {
        localStorage.setItem(`${this.state.email}`, JSON.stringify(this.state));
        this.setState(initialState)
    }

    render() {
        const { firstName, lastName, email, password, cpassword  } = this.state;
        return (
            <div>
        
                    <h3>sign up</h3>
                    <div className="from-group">
    <label>
        First Name
    </label>
    <input type="text" name = "firstName" value={firstName} className="form-control" placeholder="First Name"  onChange={this.onChnageHandler} />
    </div>
    <div className="from-group">
    <label>
        Last name
    </label>
    <input type="text" name="lastName"  value={lastName}  className="form-control" placeholder="last Name"   onChange={this.onChnageHandler}  />
    </div>
    <div className="from-group">
    <label>
        Email
    </label>
    <input type="Email" className="form-control" value={email} name="email" placeholder="Email"  onChange={this.onChnageHandler}  />
    </div>
    <div className="from-group">
    <label>
        password
    </label>
    <input type="password" name="password" value={password}  className="form-control" placeholder="password"  onChange={this.onChnageHandler}  />
    </div>
    <div className="from-group">
    <label>
        confrim password
    </label>
    <input type="password" name="cpassword"  value={cpassword} className="form-control" placeholder="Cpassword"  onChange={this.onChnageHandler}  />
    </div>
    <button className="btn btn-primary btn-block" onClick={this.handlesubmit}> signup</button>
            </div>
        );
    }
}

export default RegisterComponent;
