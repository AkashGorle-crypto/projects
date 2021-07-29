import React, { Component } from 'react'
import MemberService from '../services/MemberService'
import HeaderComponent from "./HeaderComponent";

class ViewMeasurement extends Component {
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
                    <h3 className = "text-center"> Your Measurement</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> Height: </label>
                            <div> &nbsp;&nbsp;{ this.state.member.height }</div>
                        </div>
                        <div className = "row">
                            <label> Weight: </label>
                            <div>&nbsp;&nbsp; { this.state.member.weight }</div>
                        </div>
                        <div className = "row">
                            <label> Biceps: </label>
                            <div> &nbsp;&nbsp;{ this.state.member.biceps }</div>
                        </div>

                    </div>

                </div>
            </div>
        )
    }
}

export default ViewMeasurement
