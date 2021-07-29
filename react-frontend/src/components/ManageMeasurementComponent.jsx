import React, { Component } from 'react'
import MemberService from '../services/MemberService'

class ManageMeasurementComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            member: {}
        }
    }
    editTrainer(id){
        this.props.history.push(`/register/${id}`);
    }
    componentDidMount(){
        MemberService.getMemberById(this.state.id).then( res => {
            this.setState({member: res.data});
        })
    }

    render() {
        return (
            <div>

                <br></br>
                <div className = "card col-md-6 offset-md-3">

                    <h3 className = "text-center"> Manage Measurements</h3>

                    <div className = "card-body">

                        <div className = "row text-dark">
                            <label> Member Name: </label>
                            <div> { this.state.member.firstName }</div>
                        </div>
                        <div className = "row">
                            <label>Height: </label>
                            <div> { this.state.member.height }</div>
                        </div>
                        <div className = "row">
                            <label>Weight: </label>
                            <div> { this.state.member.weight }</div>
                        </div>
                        <div className = "row">
                            <label>waist: </label>
                            <div> { this.state.member.weight }</div>
                        </div>
                        <button onClick={ () => this.editTrainer(this.state.id)} className="btn btn-info btn-sm ">Update </button>
                    </div>

                </div>
            </div>
        )
    }
}

export default ManageMeasurementComponent
