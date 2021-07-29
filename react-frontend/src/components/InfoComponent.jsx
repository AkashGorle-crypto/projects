import React, { Component } from 'react'
import MemberService from "../services/MemberService";
import HeaderComponent from "./HeaderComponent";
class InfoComponent extends React.Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }
    subscribe_silver(){
        MemberService.setSubscription(1,sessionStorage.getItem("session_id")).then( res => {
            this.props.history.push(`/view_plan`);
        });
    }
    subscribe_gold(){
        MemberService.setSubscription(2,sessionStorage.getItem("session_id")).then( res => {
            this.props.history.push(`/view_plan`);
        });
    }
    subscribe_platinum(){
        MemberService.setSubscription(3,sessionStorage.getItem("session_id")).then( res => {
            this.props.history.push(`/view_plan`);
        });
    }
    render() {
        return (

            <div class="container">
                <HeaderComponent />
                <br></br><br></br><br></br>
                <div className="row">
                    <div className="col-4">
                        <div className="card text-center">
                            <div className="card-header bg-danger text-white">
                                <div className="row align-items-center">
                                    <div className="col">
                                        <i className="fa fa-cart-plus fa-5x"></i>
                                    </div>
                                    <div className="col">
                                        <h3 className="display-3">123</h3>
                                        <h3>Silver</h3>
                                    </div>

                                </div>
                            </div>
                            <div className="card-footer">
                                <h3>Silver</h3>
                                <h3>3 Month</h3>
                                <h3>1000/</h3>
                                <a href="#" onClick={ () => this.subscribe_silver()}>   <h4 className="text-teal">Subscribe <i className="fa fa-arrow-alt-circle-right"></i></h4></a>
                            </div>
                        </div>

                        <br></br><br></br><br></br>
                        <br></br><br></br><br></br>
                        <br></br><br></br><br></br>
                    </div>
                    <div className="col-4">
                        <div className="card text-center">
                            <div className="card-header bg-info text-white">
                                <div className="row align-items-center">
                                    <div className="col">
                                        <i className="fa fa-cart-plus fa-5x"></i>
                                    </div>
                                    <div className="col">
                                        <h3 className="display-3">123</h3>
                                        <h3>Gold</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="card-footer">
                                <h3>Gold</h3>
                                <h3>6 Month</h3>
                                <h3>1800/</h3>
                                <a href="#" onClick={ () => this.subscribe_gold()}>   <h4 className="text-teal">Subscribe <i className="fa fa-arrow-alt-circle-right"></i></h4></a>
                            </div>
                        </div>
                        <br></br><br></br><br></br>
                        <br></br><br></br><br></br>
                        <br></br><br></br><br></br>
                    </div>
                    <div className="col-4 h-auto">
                        <div className="card text-center">
                            <div className="card-header bg-warning text-white">
                                <div className="row align-items-center">
                                    <div className="col">
                                        <i className="fa fa-cart-plus fa-5x"></i>
                                    </div>
                                    <div className="col">
                                        <h3 className="display-3">123</h3>
                                        <h3>Platinum</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="card-footer">
                                <h3>Platinum</h3>
                                <h3>1 Year</h3>
                                <h3>3600/</h3>
                                <a href="#" onClick={ () => this.subscribe_platinum()}>   <h4 className="text-teal">Subscribe <i className="fa fa-arrow-alt-circle-right"></i></h4></a>
                            </div>
                        </div>
                        <br></br><br></br><br></br>
                        <br></br><br></br><br></br>
                        <br></br><br></br><br></br>
                    </div>
                </div>
            </div>
        )
    }
}

export default InfoComponent
