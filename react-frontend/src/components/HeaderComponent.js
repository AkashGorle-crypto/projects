import React, { Component } from 'react'

class HeaderComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }
    logout(){
        sessionStorage.clear()
        this.props.history.push(`/`);
    }

    render() {
        return (
            <div>
                <header>
                    <nav className="navbar navbar-dark bg-dark">
                    <a href="#" className="navbar-brand">Gym Management App</a>
                        <div className="col-lg-5 float-right">
                        <a href="/about_us" className="text-white">About Us</a>
                        &nbsp;&nbsp;    <a href="/view_plan" className="text-white">View Plan</a>
                            &nbsp;&nbsp;    <a href="/view_measurement" className="text-white">View Measurement</a>
                        </div>
                        <a href="/view_profile" className="text-white">My Profile</a>
                        <a href="/" onClick={ () => this.logout()} className="text-white">Log Out</a>
                    </nav>
                </header>
            </div>
        )
    }
}

export default HeaderComponent
