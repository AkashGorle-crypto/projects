import React, { Component } from 'react'
import TrainerService from '../services/TrainerService'

class ListTrainerComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                trainer: []
        }

    }

    componentDidMount(){
        TrainerService.getTrainer().then((res) => {
            this.setState({ trainer: res.data});
        });
    }


    render() {
        return (
            <div>
                 <h2 className="text-center">Manage Trainer</h2>
                <a href="/register"> <button className="btn btn-success">Add Trainer</button></a>
                 <br></br><br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th>Trainer</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Phone No</th>
                                    <th>Address</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.trainer.map(
                                        trainer =>
                                        <tr key = {trainer.id}>
                                             <td> { trainer.firstName} </td>
                                             <td> {trainer.lastName}</td>
                                             <td> {trainer.email}</td>
                                             <td> {trainer.phoneNo}</td>
                                             <td> {trainer.address}</td>

                                             {/*<td>
                                                 <button onClick={ () => this.editEmployee(employee.id)} className="btn btn-info">Update </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteEmployee(employee.id)} className="btn btn-danger">Delete </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.viewEmployee(employee.id)} className="btn btn-info">View </button>
                                             </td>*/}
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>

                 </div>

            </div>
        )
    }
}

export default ListTrainerComponent
