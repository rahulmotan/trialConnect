import {combineReducers} from 'redux'
import reducerTrials from './TrialsReducer'
import reducerRegister from './RegisterReducer'
import reducerLogin from './LoginReducer'
import reducerPatientProfile from './PatientProfileReducer'

const rootReducer = combineReducers({
    trialsReducer: reducerTrials,
    registerReducer: reducerRegister,
    loginReducer: reducerLogin,
    patientProfileReducer: reducerPatientProfile
});

export default rootReducer