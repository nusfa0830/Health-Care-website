import initializeFirebaseApp from "../Firebase/Firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, GithubAuthProvider, signOut } from "firebase/auth";
import { useEffect, useState } from "react";


initializeFirebaseApp();

const useFirebase = () => {
    const googleProvider = new GoogleAuthProvider();
    const gitHubProvider = new GithubAuthProvider();
    const auth = getAuth();
    const [user, setUser] = useState({});
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(true);


    const logInWithGoogle = () => {
        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
            .then((result) => setUser(result.user))
            .catch((error) => setError(error.message));
    }



    const handleGithubSignIn = () => {
        signInWithPopup(auth, gitHubProvider)
            .then(result => {
                const { displayName, photoURL, email } = result.user;
                const loggedInUser = {
                    name: displayName,
                    email: email,
                    photo: photoURL
                }
                setUser(loggedInUser);
            })
    }
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({});
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, []);

    const handleLogout = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => { })
            .finally(() => setIsLoading(false));
    };











    return {
        logInWithGoogle, user, error, handleLogout, setUser,
        isLoading,
        setIsLoading, handleGithubSignIn
    }
}
export default useFirebase;