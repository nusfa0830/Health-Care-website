import userEvent from '@testing-library/user-event';
import React from 'react';
import { Badge, Button } from 'react-bootstrap';
import useFirebase from '../../Hooks/useFirebase';

const LogIn = () => {
    const { logInWithGoogle, user, handleLogout } = useFirebase();
    return (
        <div className="" >
            <div className="bg--light body-name d-flex justify-content-start  p-5">
                <h1>Please LogIn  {user.displayName} </h1>
            </div>
            <div className=" h-50 w-50 px-5 ">
                <div class="form-floating mb-3">
                    <input type="text" class="form-control" id="floatingInput" placeholder="Your Name" />
                    <label for="floatingInput">Name</label>
                </div>
                <div class="form-floating mb-3">
                    <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
                    <label for="floatingInput">Email address</label>
                </div>

            </div>

            {/* conditional rendering of button */}
            <div className="  h-50 w-50 d-flex justify-content-around py-3">

                {user.displayName ? <Button onClick={handleLogout} className="btn-danger ">
                    Google LogOut
                </Button>

                    :
                    <Button onClick={logInWithGoogle} className="btn-primary">
                        Google LogIn
                    </Button>
                } </div>

            <div className="  h-50 w-50 d-flex justify-content-around py-3">

                {user.displayName ? <Button onClick={handleLogout} className="btn-danger ">
                    Google LogOut
                </Button>

                    :
                    <Button onClick={logInWithGoogle} className="btn-primary">
                        Google LogIn
                    </Button>
                } </div>

        </div>
    );
};

export default LogIn;