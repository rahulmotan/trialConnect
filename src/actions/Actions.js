
import * as constants from '../constants/AppConstants'


/*export const alertActions = {
    success,
    error
};
function success(message, dispatch){
    return dispatch({type:'SUCCESS',message});
}

function error(message, dispatch){
    return dispatch({type:'ERROR',message});
}*/

export const findAllTrials = dispatch => {
    console.log("Entered Action.js");
    fetch('https://clinicaltrialsapi.cancer.gov/v1/clinical-trials')
        .then(response => response.json())
        .then(jsonObject => (dispatch({
            type: 'GET_ALL_TRIALS',
            trials: jsonObject.trials,
            init:false
        })))
};

export const onClickTrials = dispatch => {
    console.log("Trial Clicked");
    return dispatch({
        type: 'CLICKED',
        newMessage: 'New Message'
    })
}

export const updateFirstName = (dispatch,firstName) => (
    dispatch({
        type: constants.FIRST_NAME_CHANGED,
        firstName: firstName})
)

export const updateLastName = (dispatch,lastName) => (
    dispatch({
        type: constants.LAST_NAME_CHANGED,
        lastName: lastName})
)

export const updateUsername = (dispatch,username) => (
    dispatch({
        type: constants.USER_NAME_CHANGED,
        username: username})
)

export const updatePassword = (dispatch,password) => (
    dispatch({
        type: constants.PASSWORD_CHANGED,
        password: password})
)
export const updateRole = (dispatch,role) => (
    dispatch({
        type: constants.ROLE_CHANGED,
        role: role})
)

export const register = (dispatch) =>(
    dispatch({type: constants.REGISTER})
)