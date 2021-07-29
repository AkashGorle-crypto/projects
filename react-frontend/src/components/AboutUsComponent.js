import React, { Component } from 'react'
import HeaderComponent from "./HeaderComponent";

class AboutUsComponent extends Component {
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
                <HeaderComponent />
                <br></br>  <br></br>
                <div className="row">
                    <div className="col-9">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://st2.depositphotos.com/3927429/8215/i/600/depositphotos_82158044-stock-photo-athletic-man-and-woman-with.jpg" className="d-block w-75 h-75" alt="..."/>
                    </div>
                    <div className="carousel-item active">
                        <img src="https://st2.depositphotos.com/3927429/8215/i/600/depositphotos_82158044-stock-photo-athletic-man-and-woman-with.jpg" className="d-block w-75 h-75" alt="..."/>
                    </div>

                </div>
                    </div>
                    <div className="col-3">
                        <h4 className="text-dark font-weight-bold">Gym Management System</h4>
                        <br></br>  <br></br>
                        <h5>Address:B2B Gym by Sef Fitness, Best Gym In Aundh & Baner
                        </h5>
                        <h6 className="text-dark font-weight-bold">for more information contact us help@c-dac.com</h6>
                    </div>
                </div>

                <br></br>  <br></br>

            </div>
        )
    }
}

export default AboutUsComponent
