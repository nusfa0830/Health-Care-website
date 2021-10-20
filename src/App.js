import logo from './logo.svg';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from './Components/Home/Home';
import Doctors from './Components/Doctors/Doctors';
import LogIn from './Components/LogIn/LogIn';


import AuthProvider from './Context/AuthProvider';

import PrivateRoute from './Private/PrivateRoute';
import Page from './Components/Page/Page';
import OnlineDoctor from './Components/Online-Consult/OnlineDoctor';
import Register from './Components/Register/Register';
import NotFound from './Components/NotFound/NotFound';
import DoctorsDetails from './Components/DoctorsDetails/DoctorsDetails';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/" >
              <Home>
              </Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/doctors">
              <Doctors></Doctors>
            </Route>
            <Route path="/doctors/:doctorId">
              <DoctorsDetails></DoctorsDetails>
            </Route>
            <Route path="/appoinment">
              <Register></Register>
            </Route>
            <Route path="/login">
              <LogIn></LogIn>
            </Route>
            <PrivateRoute path="/pages">
              <Page></Page>
            </PrivateRoute>

            <PrivateRoute path="/online-doctors">
              <OnlineDoctor></OnlineDoctor>
            </PrivateRoute>


            <Route exact path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
