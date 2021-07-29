import React, { Component } from 'react'
import MemberService from '../services/MemberService'
import HeaderComponent from "./HeaderComponent";

class ViewProfileComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            member: {}
        }
    }

    componentDidMount(){
        MemberService.getMemberById(sessionStorage.getItem("session_id")).then( res => {
            this.setState({member: res.data});
        })
    }

    render() {
        return (
            <div>
                <HeaderComponent />
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> Your Profile</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> First Name: </label>
                            <div> &nbsp;&nbsp;{ this.state.member.firstName }</div>
                        </div>
                        <div className = "row">
                            <label> Last Name: </label>
                            <div>&nbsp;&nbsp; { this.state.member.lastName }</div>
                        </div>
                        <div className = "row">
                            <label> DOB: </label>
                            <div> &nbsp;&nbsp;{ this.state.member.dob }</div>
                        </div>
                        <div className = "row">
                            <label> Phone No: </label>
                            <div> &nbsp;&nbsp;{ this.state.member.phoneNo }</div>
                        </div>
                        <div className = "row">
                            <label> Alternate Phone No: </label>
                            <div> &nbsp;&nbsp;{ this.state.member.alternatePhoneNo }</div>
                        </div> <div className = "row">
                        <label> Email: </label>
                        <div> &nbsp;&nbsp;{ this.state.member.email }</div>
                    </div>
                        <div className = "row">
                            <label> Address: </label>
                            <div> &nbsp;&nbsp;{ this.state.member.address }</div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default ViewProfileComponent
