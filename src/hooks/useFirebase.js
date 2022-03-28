import { useEffect, useState } from "react"
import { GoogleAuthProvider,getAuth,signInWithPopup , onAuthStateChanged ,signOut, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword  } from "firebase/auth";
import firebaseAuthentication from "../Firebase/firebase.init";

firebaseAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error , setError] = useState("");
    const auth = getAuth();

    // google Sign in method
    const googleSignIn = () => {
        const googleProvider = new GoogleAuthProvider();
       return signInWithPopup(auth, googleProvider)
        
        .catch(error => {
            setError(error.message)
        })

    };

    // manage users 
    useEffect(() => {
       const unsubscirbe =  onAuthStateChanged(auth, (user) => {
            if(user) {
                setUser(user)
            }
        })
        return unsubscirbe;
    },[])


    // signup functionality
    async function signUp(email,password,name) {
        await createUserWithEmailAndPassword(auth, email, password)

        // update profile
        await updateProfile(auth.currentUser , {displayName : name})

        const user = auth.currentUser;
        setUser(user);

    };

    // login functionality
    function login (email, password) {
        return signInWithEmailAndPassword( auth,email, password)
    }

    // logout functionality
    const logOut = () => {
        signOut(auth)
        .then(() => {
            setUser({})
        })
    };



    return {googleSignIn,user, logOut,signUp, login}

}

export default useFirebase;