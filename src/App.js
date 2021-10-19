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
import DoctorsDetails from './Components/DoctorsDetails/DoctorsDetails';

import AuthProvider from './Context/AuthProvider';
import Signin from './Components/LogIn/SignIn';
import PrivateRoute from './Private/PrivateRoute';


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
            <Route path="/login">
              <LogIn></LogIn>
            </Route>



            <Route exact path="*">
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
