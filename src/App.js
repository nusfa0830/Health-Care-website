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
import NotFound from './Components/NotFound/NotFound';
import Procedure from './Components/Procedure/Procedure';
import AuthProvider from './Context/AuthProvider';
import PrivateRoute from './Private/PrivateRoute';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            <Route path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <PrivateRoute path="/doctors">
              <Doctors>
              </Doctors>
            </PrivateRoute>
            <Route path="/doctors/:doctorId">
              <DoctorsDetails>
              </DoctorsDetails>
            </Route>
            <Route path="/login">
              <LogIn></LogIn>
            </Route>
            <PrivateRoute path="/procedure">
              <Procedure>
              </Procedure>
            </PrivateRoute>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
