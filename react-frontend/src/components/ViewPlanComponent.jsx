import React, { Component } from 'react'
import MemberService from '../services/MemberService'
import HeaderComponent from "./HeaderComponent";

class ViewPlanComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            gym_plan: {}
        }
    }

    componentDidMount(){

        MemberService.getGymPlanById(sessionStorage.getItem("session_id")).then( res => {
            this.setState({gym_plan: res.data});
        })
    }

    render() {
        return (
            <div>
                <HeaderComponent />
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> Your Plan</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> Package: </label>
                            <div> { this.state.gym_plan.plan }</div>
                        </div>
                        <div className = "row">
                            <label> Duration: </label>
                            <div> { this.state.gym_plan.duration }</div>
                        </div>
                        <div className = "row">
                            <label> Price: </label>
                            <div> { this.state.gym_plan.price }</div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default ViewPlanComponent
