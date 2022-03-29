import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, createUserWithEmailAndPassword } from "firebase/auth";
import { useState, useEffect} from 'react';
import initializeAuthentication from "../components/Login/Firebase/Firebase.init";
initializeAuthentication();
const useFirebase = () => {
    const [user, setUser] = useState({});
    
    const auth = getAuth();
    const signInUsingGoogle = () => {
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider)
        
        

    }
    const handleUserRegister = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
        .then((result) => {
            console.log(result.user);
        })
          .catch((error) => {
            const errorMessage = error.message;
          });
      };

    useEffect(()=>{
        const unsubscribed = onAuthStateChanged(auth, user =>{
            if(user){
                setUser(user);
            }
            else{
                setUser({})
            }
        });
        return () => unsubscribed;
    }, [])
    const logOut = () => {
        signOut(auth)
        .then(() => { });
    }
    return {
        user,
        signInUsingGoogle,
        logOut,
        handleUserRegister
    }
}
export default useFirebase; 