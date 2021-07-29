import React, { Component } from 'react'
import LoginService from "../services/LoginService";

class LoginTrainerComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            username: '',
            password: ''

        }
        this.changeUserNameHandler = this.changeUserNameHandler.bind(this);
        this.changePasswordHandler = this.changePasswordHandler.bind(this);

    }
    // step 3

    componentDidMount(){

        // step 4
        if(this.state.username !=null){
            LoginService.loginTrainer(this.state.id).then( (res) =>{
                let login = res.data;
                this.setState({username: login.username,
                    password: login.password
                });
            });
            return
        }
    }
    loginTrainer = (e) => {
        e.preventDefault();
        let login = {username: this.state.username, password: this.state.password};


        // step 5
        if(this.state.username !=null){
                LoginService.loginTrainer(login).then(res =>{
                    console.log(res.data)
                    if(res.data===0){
                        this.props.history.push('/');
                    }else{
                        sessionStorage.setItem("session_id", this.state.username)
                        this.props.history.push('/info');
                    }

                });
        }else{

        }
    }

    Sign_Up = (e) => {
        e.preventDefault();
                this.props.history.push('/register');
    }

    changeUserNameHandler= (event) => {
        this.setState({username: event.target.value});
    }

    changePasswordHandler= (event) => {
        this.setState({password: event.target.value});
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "container">
                    <div className = "row">
                        <h1>Gym Management System</h1>
                        <div className = "card col-md-6 offset-md-3 offset-md-3">

                            <div className = "card-body">
                                <form>
                                    <div className = "form-group">
                                        <label> Username: </label>
                                        <input  placeholder="username" name="username" className="form-control"
                                               value={this.state.username} onChange={this.changeUserNameHandler}/>

                                    </div>
                                    <div className = "form-group">
                                        <label> Password: </label>
                                        <input placeholder="Password" name="Password" className="form-control required"
                                               value={this.state.password} onChange={this.changePasswordHandler}/>
                                    </div>

                                    <button className="btn btn-success" onClick={this.loginTrainer}>Login</button>
                                    <button className="btn btn-danger ml-lg-4" onClick={this.Sign_Up}>Sign_Up</button>
                                   {/* <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>*/}
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }

}
export default LoginTrainerComponent
