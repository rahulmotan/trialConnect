import * as constants from '../constants/AppConstants'

const reducerDoctorProfile = (state = {

    firstName: '',
    lastName: '',
    password: '',
    email: '',
    phone: '',
    userId: '',
    username: '',
    specialization: ''


}, action) => {
    let modifiedState;
    switch (action.type) {
        case constants.PROFILE_FIRST_NAME_CHANGED_DOC: {
            modifiedState = Object.assign({}, state);
            modifiedState.firstName = action.firstName;
            return modifiedState
        }
        case constants.PROFILE_LAST_NAME_CHANGED_DOC: {
            modifiedState = Object.assign({}, state);
            modifiedState.lastName = action.lastName;
            return modifiedState
        }

        case constants.PROFILE_PASSWORD_CHANGED_DOC: {
            modifiedState = Object.assign({}, state);
            modifiedState.password = action.password;
            return modifiedState
        }

        case constants.PROFILE_EMAIL_CHANGED_DOC: {
            modifiedState = Object.assign({}, state);
            modifiedState.email = action.email;
            return modifiedState
        }

        case constants.PROFILE_PHONE_CHANGED_DOC: {
            modifiedState = Object.assign({}, state);
            modifiedState.phone = action.phone;
            return modifiedState
        }

        case constants.PROFILE_SPEC_CHANGED_DOC: {
            modifiedState = Object.assign({}, state);
            modifiedState.specialization = action.specialization;
            return modifiedState
        }

        case constants.FIND_UPDATED_USER_DOC: {
            modifiedState = Object.assign({}, state);
            modifiedState.firstName = action.doctor.firstName;
            modifiedState.lastName = action.doctor.lastName;
            modifiedState.password = action.doctor.password;
            modifiedState.email = action.doctor.email;
            modifiedState.phone = action.doctor.phone;
            modifiedState.username = action.doctor.username;
            modifiedState.specialization = action.doctor.specialization;
            return modifiedState
        }

        case constants.UPDATE_DOC: {
            modifiedState = Object.assign({}, state);
            if ((state.firstName !== undefined && state.firstName !== "") &&
                (state.lastName !== undefined && state.lastName !== "") &&
                (state.password !== undefined && state.password !== "") &&
                (state.email !== undefined && state.email !== "") &&
                (state.phone !== undefined && state.phone !== "") &&
                (state.specialization !== undefined && state.specialization !== "" && state.specialization !== null)
            ) {
                const user = {
                    firstName: state.firstName,
                    lastName: state.lastName,
                    password: state.password,
                    email: state.email,
                    phone: state.phone,
                    specialization: state.specialization
                };
                fetch('https://tconnect-webapp.herokuapp.com/api/doctor/' + action.docId, {
                    method: 'put',
                    body: JSON.stringify(user),
                    headers: {
                        'content-type': 'application/json'
                    }
                }).then(response => (response.json()))
                    .then(doctor => {
                        modifiedState = Object.assign({}, state);
                        modifiedState.firstName = doctor.firstName;
                        modifiedState.lastName = doctor.lastName;
                        modifiedState.password = doctor.password;
                        modifiedState.email = doctor.email;
                        modifiedState.phone = doctor.phone;
                        modifiedState.specialization = doctor.specialization;
                        alert('Updated successfully!');
                        return modifiedState;
                    })
            } else {
                alert('Please fill out all the fields');
                return state;
            }
            return modifiedState;
        }
        default:
            return state;
    }

};

export default reducerDoctorProfile;