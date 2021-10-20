
import React from 'react';
import { useHistory, useLocation } from "react-router";
import { Button } from 'react-bootstrap';

import MenuBar from '../Menubar/MenuBar';
import useAuth from '../../Hooks/useAuth';
import Footer from '../Footer/Footer';





const LogIn = () => {
    const { logInWithGoogle, user, setUser, gitHubSignIn, handleLogout, setIsLoading } =
        useAuth();
    const location = useLocation();
    const history = useHistory();

    const handleGoogleSignin = () => {
        logInWithGoogle()
            .then((result) => {
                history.push(location.state?.from || "/home");
                // console.log(location.state?.from,"google er te");
                setUser(result.user);
            })
            .finally(() => setIsLoading(false));
    };

    const handleGitSignin = () => {
        gitHubSignIn()
            .then((result) => {
                history.push(location.state?.from || "/home");
                // console.log(location.state?.from, "facebook er te");
                setUser(result.user);
                // console.log("facebbok user", result.user)
            })
            .finally(() => setIsLoading(false));
    };

    return (
        <div className="" >
            <div className="py-5">
                <MenuBar></MenuBar>
            </div>
            <div className="bg--light body-name d-flex justify-content-start  p-5">
                <h1>Please LogIn  {user.displayName} </h1>
            </div>
            <div className=" h-50 w-50 px-5 ">
                <div className="form-floating mb-3 row">
                    <input type="text" className="form-control form-control-sm col-sm-12 " id="floatingInput" placeholder="Your Name" />
                    <label for="floatingInput colFormLabelSm">Name</label>
                </div>
                <div className="form-floating mb-3 row">
                    <input type="email" className="form-control form-control-sm col-sm-12" id="floatingInput" placeholder="name@example.com" />
                    <label for="floatingInput colFormLabelSm " className="py-1">Email address</label>
                </div>

                <div className="form-floating mb-3 row">
                    <input type="password" className="form-control form-control-sm col-sm-12 " id="exampleInputPassword1" placeholder="password" />
                    <label for="exampleInputPassword1 colFormLabelSm">Password</label>
                </div>

            </div>

            {/* conditional rendering of button */}
            <div className="  h-50 w-50 d-flex justify-content-around py-3">

                {user.displayName ? <Button onClick={handleLogout} className="btn-danger ">
                    Google LogOut
                </Button>

                    :
                    <Button onClick={handleGoogleSignin} className="btn-primary">
                        Google LogIn
                    </Button>
                } </div>
            {/* github login */}
            <div className="  h-50 w-50 d-flex justify-content-around py-3">

                {user.displayName ? <Button onClick={handleLogout} className="btn-danger ">
                    GitHub LogOut
                </Button>

                    :
                    <Button onClick={handleGitSignin} className="btn-success">
                        GitHub LogIn
                    </Button>
                } </div>
            <div><Footer></Footer></div>
        </div>
    );
};

export default LogIn;