import initializeFirebaseApp from "../Firebase/Firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";


initializeFirebaseApp();

const useFirebase = () => {
    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();
    const [user, setUser] = useState({});
    const [error, setError] = useState("");


    const logInWithGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then((result) => setUser(result.user))
            .catch((error) => setError(error.message));
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setError("");
            }
        });
    }, []);

    const handleLogout = () => {
        signOut(auth)
            .then(() => {
                setUser({});
            })
            .catch((error) => {
                setError("");
            });
    };


    return {
        logInWithGoogle, user, error, handleLogout
    }
}
export default useFirebase;