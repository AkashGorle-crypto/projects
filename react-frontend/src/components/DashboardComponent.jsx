import React, { Component } from 'react'
import MemberService from '../services/MemberService'

class DashboardComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            member: []
        }

    }

    componentDidMount(){
        MemberService.getMembers().then((res) => {
            this.setState({ member: res.data});
        });
    }


    render() {
        return (
            <div>
                 <h2 className="text-center">Dashboard</h2>
                 <br></br><br></br>
                 <div className = "row">
                     <h4 className="text-center">Member Status</h4>
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th>Status</th>
                                    <th>Count</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                            {
                                this.state.member.map(
                                    member =>
                                        <tr key = {member.id}>
                                            <td> { member.firstName} </td>
                                            <td> {member.email}</td>
                                            <td> {member.emailId}</td>
                                            <td> {member.emailId}</td>
                                            <td>
                                                {/*<button onClick={ () => this.editEmployee(employee.id)} className="btn btn-info">Update </button>
                                                <button style={{marginLeft: "10px"}} onClick={ () => this.deleteEmployee(employee.id)} className="btn btn-danger">Delete </button>
                                                <button style={{marginLeft: "10px"}} onClick={ () => this.viewEmployee(employee.id)} className="btn btn-info">View </button>
                                           */}
                                            </td>
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

export default DashboardComponent
