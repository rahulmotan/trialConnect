import * as constants from '../constants/AppConstants'
import {AppConstants} from '../constants/AppConstants'

export const findAllTrials = (dispatch) => {
    console.log("Entered Action.js");
    fetch('https://clinicaltrialsapi.cancer.gov/v1/clinical-trials')
        .then(response => response.json())
        .then(jsonObject => (dispatch({
            type: 'GET_ALL_TRIALS',
            trials: jsonObject.trials,
            init: false
        })))
};

export const findTrialById = (dispatch, trialId) => (
    fetch('https://clinicaltrialsapi.cancer.gov/v1/clinical-trial/' + trialId)
        .then(response => response.json())
        .then(jsonObject => (dispatch({
            type: 'GET_TRIAL_BY_ID',
            trial: jsonObject,
        })))
);

export const updateFirstName = (dispatch, firstName) => (
    dispatch({
        type: constants.FIRST_NAME_CHANGED,
        firstName: firstName
    })
);

export const updateLastName = (dispatch, lastName) => (
    dispatch({
        type: constants.LAST_NAME_CHANGED,
        lastName: lastName
    })
);

export const updateUsername = (dispatch, username) => (
    dispatch({
        type: constants.USER_NAME_CHANGED,
        username: username
    })
);

export const updatePassword = (dispatch, password) => (
    dispatch({
        type: constants.PASSWORD_CHANGED,
        password: password
    })
);
export const updateRole = (dispatch, role) => (
    dispatch({
        type: constants.ROLE_CHANGED,
        role: role
    })
);

export const register = (dispatch) => (
    dispatch({type: constants.REGISTER})
);

export const loginUsername = (dispatch, lUsername) => {
    dispatch({
        type: constants.LOGIN_USERNAME_CHANGED,
        lUsername: lUsername
    })
}

export const loginPassword = (dispatch, lPassword) => {
    dispatch({
        type: constants.LOGIN_PASSWORD_CHANGED,
        lPassword: lPassword
    })
}

export const loginRole = (dispatch, lRole) => {
    dispatch({
        type: constants.LOGIN_ROLE_CHANGED,
        lRole: lRole
    })
}

export const login = (dispatch, username, password, role) => {
    console.log('inside login');
    console.log(username);
    if (role === "Doctor") {
        if ((username !== undefined && username !== '') &&
            (password !== undefined && password !== '')
        ) {
            return fetch('https://tconnect-webapp.herokuapp.com/api/findDoctorByCredentials/doctor', {
                method: 'post',
                body: JSON.stringify({
                    username: username,
                    password: password
                }),
                headers: {
                    'content-type': 'application/json'
                }
            }).then(response => (response.json()))
                .then(doctor => {
                    console.log(doctor);
                    if (doctor.username !== undefined && doctor.username !== '' && doctor.username !== null) {
                        localStorage.setItem('user', JSON.stringify(doctor));
                        localStorage.setItem('role', JSON.stringify(role));
                        window.location.href = '/doctor/dashboard/' + doctor.username;
                        return dispatch({
                            type: AppConstants.actions.SET_USER,
                            user: doctor
                        })
                    } else {
                        alert('User does not exist');
                    }
                });
        } else {
            alert("Please fill out all the fields");
        }
    } else if (role === "Patient") {
        if ((username !== undefined && username !== "") &&
            (password !== undefined && password !== "")
        ) {
            console.log(role);
            fetch('https://tconnect-webapp.herokuapp.com/api/findPatientByCredentials/patient', {
                method: 'post',
                body: JSON.stringify({
                    username: username,
                    password: password
                }),
                headers: {
                    'content-type': 'application/json'
                }
            }).then(response => (response.json()))
                .then(patient => {
                    console.log(patient);
                    if (patient.username !== undefined && patient.username !== '' && patient.username !== null) {
                        localStorage.setItem('user', JSON.stringify(patient));
                        localStorage.setItem('role', JSON.stringify(role));
                        window.location.href = '/home/' + patient.username + '/dashboard';
                        dispatch({
                            type: AppConstants.actions.SET_USER,
                            user: patient
                        })
                    }
                    else {
                        alert("User Does not exist!!!");
                    }
                });
        }
        else {
            alert("Please fill all fields!!");
        }
    }

    else if (role === "Admin") {
        if ((username !== undefined && username !== "") &&
            (password !== undefined && password !== "")
        ) {
            console.log(role);
            fetch('https://tconnect-webapp.herokuapp.com/api/findAdminByCredentials/admin', {
                method: 'post',
                body: JSON.stringify({
                    username: username,
                    password: password
                }),
                headers: {
                    'content-type': 'application/json'
                }
            }).then(response => (response.json()))
                .then(admin => {
                    console.log(admin);
                    if (admin.username !== undefined && admin.username !== '' && admin.username !== null) {
                        localStorage.setItem('user', JSON.stringify(admin));
                        localStorage.setItem('role', JSON.stringify(role));
                        window.location.href = '/admin';
                        dispatch({
                            type: AppConstants.actions.SET_USER,
                            user: admin
                        })
                    }
                    else {
                        alert("User Does not exist!!!");
                    }
                });
        }
        else {
            alert("Please fill all fields!!");
        }
    }
};