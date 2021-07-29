import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ListEmployeeComponent from './components/ListEmployeeComponent';
import HeaderComponent from './components/HeaderComponent';
import InfoComponent from './components/InfoComponent';
import FooterComponent from './components/FooterComponent';
import CreateEmployeeComponent from './components/CreateEmployeeComponent';
import UpdateEmployeeComponent from './components/UpdateEmployeeComponent';
import ViewEmployeeComponent from './components/ViewEmployeeComponent';
import LoginTrainerComponent from './components/LoginTrainerComponent';
import RegisterTrainerComponent from './components/RegisterTrainerComponent';
import ListTrainerComponent  from './components/ListTrainerComponent';
import ListMemberComponent from './components/ListMemberComponent';
import ViewTrainerComponent from './components/ViewTrainerComponent';
import ManageMeasurementComponent from './components/ManageMeasurementComponent';
import DashboardComponent from './components/DashboardComponent';
import ViewPlanComponent  from './components/ViewPlanComponent';
import ViewProfileComponent from './components/ViewProfileComponent';
import  ViewMeasurement from './components/ViewMeasurement';
import AboutUsComponent from './components/AboutUsComponent';
function App() {
  return (
    <div>

        <Router>
            <Route path = "/" exact component = {LoginTrainerComponent}></Route>
             { }
                <div className="container">
                    <Switch>

                        <Route path = "/register" exact component = {RegisterTrainerComponent}></Route>
                        <Route path = "/register/:id" exact component = {RegisterTrainerComponent}></Route>
                        <Route path = "/manage_trainer" component = {ListTrainerComponent}></Route>
                        <Route path = "/view_trainer" component = {ViewTrainerComponent}></Route>
                        <Route path = "/info" component = {InfoComponent}></Route>
                        <Route path = "/manage_member" component = {ListMemberComponent}></Route>
                        <Route path = "/manage_measurement" component = {ManageMeasurementComponent}></Route>
                        <Route path = "/dashboard" component = {DashboardComponent}></Route>
                        <Route path = "/view_plan" component = {ViewPlanComponent}></Route>
                        <Route path = "/view_profile" component = {ViewProfileComponent}></Route>
                        <Route path = "/view_measurement" component = {ViewMeasurement}></Route>
                        <Route path = "/about_us" component = {AboutUsComponent}></Route>

                          <Route path = "/employees" component = {ListEmployeeComponent}></Route>
                          <Route path = "/add-employee/:id" component = {CreateEmployeeComponent}></Route>
                          <Route path = "/view-employee/:id" component = {ViewEmployeeComponent}></Route>
                          {/* <Route path = "/update-employee/:id" component = {UpdateEmployeeComponent}></Route> */}
                    </Switch>
                </div>
              <FooterComponent />
        </Router>
    </div>
    
  );
}

export default App;
