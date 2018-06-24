import React from 'react'
import RegisterContainer from './containers/Register'
import TrialContainer from './containers/Trials'
import NavbarContainer from './containers/NavBar'
import LoginContainer from './containers/Login'
import PatientProfileContainer from './containers/PatientProfile'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import DashboardContainer from './containers/Dashboard'

class App extends React.Component {
    render() {
        return (
            <Router>
                <section>
                    <NavbarContainer/>
                    <section className="container-fluid">
                        <Route path='/register' component={RegisterContainer}/>
                        <Route path='/login' component={LoginContainer}/>
                        <Route path='/update/patientProfile' component={PatientProfileContainer}/>
                        <section className="container">
                            <Route path='/search/:searchText/results' component={TrialContainer}/>
                        </section>
                        <section>
                            <Route path={'/home/pa/dashboard'} component={DashboardContainer}/>
                        </section>
                    </section>
                </section>
            </Router>
        )
    }
}

export default App
