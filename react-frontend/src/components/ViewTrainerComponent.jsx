import React, { Component } from 'react'
import TrainerService from '../services/TrainerService'

class ViewTrainerComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            trainer: {}
        }
    }
    editTrainer(id){
        this.props.history.push(`/register/${id}`);
    }
    componentDidMount(){
        TrainerService.getTrainerById(this.state.id).then( res => {
            this.setState({trainer: res.data});
        })
    }

    render() {
        return (
            <div>

                <br></br>
                <div className = "card col-md-6 offset-md-3">

                    <h3 className = "text-center"> View Trainer Details</h3>

                    <div className = "card-body">

                        <div className = "row text-dark">
                            <label>  First Name: </label>
                            <div> { this.state.trainer.firstName }</div>
                        </div>
                        <div className = "row">
                            <label>  Last Name: </label>
                            <div> { this.state.trainer.lastName }</div>
                        </div>
                        <div className = "row">
                            <label>  Email ID: </label>
                            <div> { this.state.trainer.email }</div>
                        </div>
                        <div className = "row">
                            <label>  Phone No: </label>
                            <div> { this.state.trainer.phoneNo }</div>
                        </div>
                        <div className = "row">
                            <label>  Alternate Phone No: </label>
                            <div> { this.state.trainer.alternatePhoneNo }</div>
                        </div> <div className = "row">
                        <label>  Address: </label>
                        <div> { this.state.trainer.address }</div>
                    </div>
                        <button onClick={ () => this.editTrainer(this.state.id)} className="btn btn-info btn-sm ">Update </button>
                    </div>

                </div>
            </div>
        )
    }
}

export default ViewTrainerComponent
