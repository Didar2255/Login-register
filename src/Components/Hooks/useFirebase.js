import { useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import initializeAuthentication from '../Firebase/Firebase.init';

initializeAuthentication()
const useFirebase = () => {
    const auth = getAuth();
    const [user, setUser] = useState()
    const [error, setError] = useState()

    const handelRegister = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                setUser(result.user)

            })
            .catch((error) => {
                setError(error.message)
            });
    }
    const handelLogin = (email, password, location, navigate) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                const dis = location.state.form || '/hello'
                navigate(dis)
                setUser(result.user)

            })
            .catch((error) => {
                setError(error.message)
            });
    }
    const handelLogOut = () => {
        signOut(auth)
            .then(() => {
                setUser({})
            }).catch((error) => {
                setError(error.message)
            });
    }
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            }
            else {
                setUser({})
            }
        });
    }, [auth])


    return { handelRegister, handelLogin, handelLogOut, user, error }
}
export default useFirebase;