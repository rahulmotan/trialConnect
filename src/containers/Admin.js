import React, { Component } from 'react';
import { connect } from "react-redux";
import * as actions from '../actions/AdminActions'

const stateToPropertiesMapper = ({ adminReducer }) => {

    return {
        doctors: adminReducer.doctors,
        patients: adminReducer.patients,
        role: adminReducer.role
    }
};

const dispatcherToPropsMapper = dispatch => {
    return {
        findAllDoctors: () => (actions.findAllDoctors(dispatch)),
        findAllPatients: () => (actions.findAllPatients(dispatch)),
        deleteDoctor: (doctorId) => (actions.deleteDoctor(dispatch, doctorId)),
        deletePatient: (patientId) => (actions.deletePatient(dispatch, patientId)),
        updateFirstName: (firstName) => (actions.updateFirstName(dispatch, firstName)),
        updateLastName: (lastName) => (actions.updateLastName(dispatch, lastName)),
        updateUsername: (username) => (actions.updateUsername(dispatch, username)),
        updatePassword: (password) => (actions.updatePassword(dispatch, password)),
        updateRole: (role) => (actions.updateRole(dispatch, role)),
        add: () => (actions.add(dispatch))
    }
};

let doctors = {};


class Admin extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.findAllDoctors();
        this.props.findAllPatients();
    }

 /*    componentWillUpdate() {
        this.props.findAllDoctors();
        this.props.findAllPatients();
    } */

    render() {

        let firstNameInput;
        let lastNameInput;
        let usernameInput;
        let passwordInput;
        let roleInputPatient;
        let roleInputDoctor;

        return (
            <div>
                <div className="row">

                    <div class="col-3">
                        <div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                            <a class="nav-link active" id="v-pills-view-user-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">View Users</a>
                            <a class="nav-link" id="v-pills-add-user-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false">Add Users</a>
                        </div>
                    </div>
                    <div class="col-9">
                        <div class="tab-content" id="v-pills-tabContent">
                            <div class="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-view-user-tab">
                                <div className='container'>
                                    <div >
                                        <div className='card' style={{ "marginTop": "1%" }}>
                                            <ul className='nav nav-tabs nav-fill'>
                                                <li className='nav-item active'>
                                                    <a href='#' className='nav-link active' id='doctors-tab' data-toggle="tab"
                                                        href="#doctors"
                                                        role="tab" aria-controls="doctors" aria-selected="false"><strong
                                                            className='text-secondary'>Doctors</strong></a>
                                                </li>
                                                <li className='nav-item'>
                                                    <a className='nav-link' href='#' id='patients-tab' data-toggle="tab"
                                                        href="#patients"
                                                        role="tab" aria-controls="patients" aria-selected="true"><strong
                                                            className='text-secondary'>Patients</strong></a>
                                                </li>

                                            </ul>
                                            <div className='tab-content pt-3'>
                                                <div className='tab-pane fade show active' id='doctors' role="tabpanel"
                                                    aria-labelledby="doctors-tab">
                                                    <div className='container'>
                                                        < table className="table  table-hover table-responsive-md">
                                                            <thead>
                                                                <tr>
                                                                    <th className="th-lg">First Name</th>
                                                                    <th className="th-lg">Last Name</th>
                                                                    <th className="th-lg">Email</th>
                                                                    <th className="th-lg">Phone</th>
                                                                    <th className="th-lg">Specialization</th>
                                                                    <th className="th-lg"></th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                {this.props.doctors.map((doctor, index) => {
                                                                    return <tr key={index}>
                                                                        <td>
                                                                            {doctor.firstName}
                                                                        </td>
                                                                        <td>
                                                                            {doctor.lastName}
                                                                        </td>
                                                                        <td>
                                                                            {doctor.email}
                                                                        </td>
                                                                        <td>
                                                                            {doctor.phone}
                                                                        </td>
                                                                        <td>
                                                                            {doctor.specialization}
                                                                        </td>
                                                                        <td>
                                                                            <i class="fa fa-times" onClick={() => this.props.deleteDoctor(doctor.id)} style={{ "color": "red" }}></i>
                                                                        </td>
                                                                    </tr>
                                                                }
                                                                )}
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                                <div className='tab-pane fade' id='patients' role="tabpanel"
                                                    aria-labelledby="patients-tab">
                                                    <div className='container'>
                                                        < table className="table  table-hover table-responsive-md">
                                                            <thead>
                                                                <tr>
                                                                    <th className="th-lg">First Name</th>
                                                                    <th className="th-lg">Last Name</th>
                                                                    <th className="th-lg">Email</th>
                                                                    <th className="th-lg">Phone</th>
                                                                    <th className="th-lg"></th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                {this.props.patients.map((patient, index) => {
                                                                    return <tr key={index}>
                                                                        <td>
                                                                            {patient.firstName}
                                                                        </td>
                                                                        <td>
                                                                            {patient.lastName}
                                                                        </td>
                                                                        <td>
                                                                            {patient.email}
                                                                        </td>
                                                                        <td>
                                                                            {patient.phone}
                                                                        </td>
                                                                        <td>
                                                                            <i class="fa fa-times" onClick={() => this.props.deletePatient(patient.id)} style={{ "color": "red" }}></i>
                                                                        </td>

                                                                    </tr>
                                                                }
                                                                )}
                                                            </tbody>
                                                        </table>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                            </div>
                            <div class="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-add-user-tab">
                            <div className="col-md-6 col-md-offset-3">
            <h1>Add User</h1>
           
                <div>
                    <label htmlFor="firstName">First Name</label>
                    <input  required type="text" className="form-control" name="firstName" ref={node => firstNameInput = node}
                           onChange={() => {
                            this.props.updateFirstName(firstNameInput.value)
                           }}/>

                </div>
                <div>
                    <label htmlFor="lastName">Last Name</label>
                    <input required type="text" className="form-control" name="lastName" ref={node => lastNameInput = node}
                           onChange={() => {
                            this.props.updateLastName(lastNameInput.value)
                           }}/>
                </div>
                <div>
                    <label htmlFor="username">Username</label>
                    <input required type="text" className="form-control" name="username" ref={node => usernameInput = node}
                           onChange={() => {
                               this.props.updateUsername(usernameInput.value)
                           }}/>
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input required type="password" className="form-control" name="password" ref={node => passwordInput = node}
                           onChange={() => {
                            this.props.updatePassword(passwordInput.value)
                           }}/>
                </div>
                <p></p>
                <label>Role</label>

                
                    <div className="radio">
                        <label>
                            <input required type="radio" value="Doctor" checked={this.props.role === "Doctor"}
                                   ref={node => roleInputDoctor = node} onChange={() => {
                                    this.props.updateRole(roleInputDoctor.value)
                            }}/>
                            Doctor
                        </label>
                    </div>
                    <div className="radio">
                        <label>
                            <input type="radio" value="Patient" checked={this.props.role === "Patient"}
                                   ref={node => roleInputPatient = node} onChange={() => {
                                    this.props.updateRole(roleInputPatient.value)
                            }}/>
                            Patient
                        </label>
                    </div>
                

                <div className="form-group">
                    <button className="btn btn-primary" onClick={() => {
                        this.props.add()
                    }}>Add
                    </button>

                </div>

            
        </div>



                            </div>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
};
const AdminContainer = connect(stateToPropertiesMapper, dispatcherToPropsMapper)(Admin);
export default AdminContainer