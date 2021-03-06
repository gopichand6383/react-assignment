import React, { Component } from 'react';
import CurrencyComponent  from "./CurrencyComponent";

const initialState = {
};
class LoginComponent extends Component {
    constructor(props) {
        super(props)
        this.state = initialState;
    }
    handlesubmit = () => {
        const { email, password } = this.state;
        const localEmail  = localStorage.getItem(`${this.state.email}`);
        const selectedObject =  JSON.parse(localEmail);
        if(email && password && selectedObject){
            if((email === selectedObject.email) && (password === selectedObject.password)){
                    this.setState({
                        loginSuccess: true,
                        activeUser : selectedObject,
                    })
                }
                else {
                    this.setState({
                        loginSuccess: false,
                        error: 'Wrong user'
                    })
                }
        }else{
            this.setState({
                loginSuccess: false,
                error: 'Wrong user'
            })
        }
        
    }
    changeHandler = (e) => {
        const { name, value } = e.target;
        this.setState({
          [name]: value
        })
    }
    render() {
        const { email, password, loginSuccess, error, activeUser } = this.state;

        if (loginSuccess){
            return(
            <CurrencyComponent activeUser={activeUser}/>
            )
        }else{
            return (
                <div>
                  <p className="errorname">{error}</p>
            <div className="from-group">
                <label>
                    Email
                </label>
                <input type="email" name="email" className="form-control" value={email} placeholder="Email" onChange={this.changeHandler} />
                </div>
                <div className="from-group">
                    <label>
                        password
                    </label>
        <input type="password"  name = "password" className="form-control" value={password} placeholder="password" onChange={this.changeHandler} />
        </div>
        <br></br>
        
        <button onClick = {this.handlesubmit} className="btn btn-primary btn-block"> Login</button>
                </div>
            );
        }
    }
}

export default LoginComponent;
