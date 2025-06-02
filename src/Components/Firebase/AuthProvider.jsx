import React, { createContext, useEffect, useState } from 'react';
import { auth } from './Firebase';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import Login from '../Root/Login';
export const AuthContext =createContext()

const AuthProvider = ({children}) => {
    const [user, setUser] =useState(null)
    const [loading, setLoading] = useState(true);
    // console.log(user)

    const createUser =(email, password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const LogIn =(email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // hold login info
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser);
            setLoading(false);
            // if(currentUser?.email){
            //     const userData ={email: currentUser.email}
            //     axios.post("http://localhost:3000/jwt", userData, {
            //         withCredentials: true,
            //     })
            //     .then(result=>{console.log(result.data)})
            //     .catch(error=>{console.log(error)})
            // }
        });
        return ()=>{
            unsubscribe();
        }
    },[])

    // logout
    const logOut =()=>{
        return signOut(auth);
    }

    const authData={
        user,
        setUser,

        createUser,
        LogIn,
        logOut,

        loading,
        setLoading

    }
    return <AuthContext.Provider value={authData}>
        {children}
    </AuthContext.Provider>
};

export default AuthProvider;