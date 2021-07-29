import React, { Component } from 'react'
import LoginService from "../services/LoginService";

class RegisterTrainerComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirmPassword: '',
            gender: '',
            phoneNo: '',
            alternatePhoneNo: '',
            dob: '',
            address: ''
        }
        this.changeFirstNameHandler=this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.changePasswordHandler = this.changePasswordHandler.bind(this);
        this.changeConfirmPasswordHandler = this.changeConfirmPasswordHandler.bind(this);
        this.changeGenderHandler = this.changeGenderHandler.bind(this);
        this.changePhoneNoHandler = this.changePhoneNoHandler.bind(this);
        this.changeAlternatePhoneNoHandler = this.changeAlternatePhoneNoHandler.bind(this);
        this.changeDobHandler = this.changeDobHandler.bind(this);
        this.changeAddressHandler = this.changeAddressHandler.bind(this);





    }
    // step 3
    componentDidMount(){

        // step 4
        if(this.state.username !=null){
            LoginService.registerTrainer(this.state.id).then( (res) =>{
                let trainer = res.data;
                this.setState({
                    firstName: trainer.firstName,
                    lastName : trainer.lastName,
                    email    : trainer.email   ,
                    password : trainer.password,
                    confirmPassword  : trainer.confirmPassword ,
                    gender   : trainer.gender  ,
                    phoneNo  : trainer.phoneNo ,
                    alternatePhoneNo : trainer.alternatePhoneNo,
                    dob      : trainer.dob     ,
                    address: trainer.address

                });
            });
            return
        }
    }
    registerTrainer = (e) => {
        e.preventDefault();
        let trainer = {firstName:this.state.firstName, lastName :this.state.lastName, email    :this.state.email   , password :this.state.password, confirmPassword  :this.state.confirmPassword , gender   :this.state.gender  , phoneNo  :this.state.phoneNo , alternatePhoneNo :this.state.alternatePhoneNo, dob      :this.state.dob     , address :this.state.address };


        // step 5
        if(this.state.firstName !=null){
            LoginService.registerTrainer(trainer).then(res =>{
                this.props.history.push('/');
            });
        }
    }
    Sign_Up = (e) => {
        e.preventDefault();
                this.props.history.push('/register');
    }

    changeFirstNameHandler= (event) => {
        this.setState({firstName: event.target.value});
    }

    changeLastNameHandler= (event) => {
        this.setState({lastName: event.target.value});
    }
    changeEmailHandler = (event) => {
        this.setState({email: event.target.value});
    }

    changePasswordHandler  = (event) => {
        this.setState({password: event.target.value});
    }
    changeConfirmPasswordHandler  = (event) => {
        this.setState({confirmPassword: event.target.value});
    }
    changeGenderHandler 	 = (event) => {
        this.setState({gender: event.target.value});
    }
    changePhoneNoHandler	 = (event) => {
        this.setState({phoneNo: event.target.value});
    }
    changeAlternatePhoneNoHandler = (event) => {
        this.setState({alternatePhoneNo: event.target.value});
    }
    changeDobHandler            = (event) => {
        this.setState({dob: event.target.value});
    }
    changeAddressHandler  = (event) => {
        this.setState({address: event.target.value});
    }




    render() {
        return (
            <div>
                <br></br>
                <div className = "container">
                    <div className = "row">
                        <div className = "card col-md-6 offset-md-3 offset-md-3">

                            <div className = "card-body">
                                <form>
                                    <div className = "form-group">
                                        <label> First Name: </label>
                                        <input placeholder="First Name" name="firstName" className="form-control"
                                               value={this.state.firstName} onChange={this.changeFirstNameHandler}/>
                                    </div>

                                    <div className = "form-group">
                                        <label> Last Name: </label>
                                        <input placeholder="Last Name" name="lastName" className="form-control"
                                               value={this.state.lastName} onChange={this.changeLastNameHandler}/>
                                    </div>

                                    <div className = "form-group">
                                        <label> Email: </label>
                                        <input placeholder="Email" name="email" className="form-control"
                                               value={this.state.email} onChange={this.changeEmailHandler}/>
                                    </div>

                                    <div className = "form-group">
                                        <label> Password: </label>
                                        <input placeholder="Password" name="password" className="form-control"
                                               value={this.state.password} onChange={this.changePasswordHandler}/>
                                    </div>

                                    <div className = "form-group">
                                        <label> Confirm Password: </label>
                                        <input placeholder="Confirm Password" name="confirmPassword" className="form-control"
                                               value={this.state.confirmPassword} onChange={this.changeConfirmPasswordHandler}/>
                                    </div>


                                    <div className = "form-group">
                                        <label> Phone No: </label>
                                        <input placeholder="Phone No" name="phoneNo" className="form-control"
                                               value={this.state.phoneNo} onChange={this.changePhoneNoHandler}/>
                                    </div>

                                    <div className = "form-group">
                                        <label> Alternate PhoneNo: </label>
                                        <input placeholder="Alternate PhoneNo" name="alternatePhoneNo" className="form-control"
                                               value={this.state.alternatePhoneNo} onChange={this.changeAlternatePhoneNoHandler}/>
                                    </div>

                                    <div className = "form-group">
                                        <label> DOB: </label>
                                        <input placeholder="dob" name="dob" className="form-control"
                                               value={this.state.dob} onChange={this.changeDobHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label> Address: </label>
                                        <input placeholder="address" name="address" className="form-control"
                                               value={this.state.address} onChange={this.changeAddressHandler}/>
                                    </div>

                                  {/*  <button className="btn btn-success" onClick={this.loginTrainer}>save</button>*/}

                                    <button className="btn btn-success float-right" onClick={this.registerTrainer}>save</button>
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
export default RegisterTrainerComponent
