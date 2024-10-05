import React, { createContext, useEffect, useState } from 'react'
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../../public/Firebase/firebase';



export const AuthContext = createContext(null);

const auth = getAuth(app);

export default function AuthProvider({children}) {

  const provider = new GoogleAuthProvider();

  const [user,setUser]=useState(null)
  const [loading,setLoading]=useState(true)

  const createUser = (email,password)=>{
    setLoading(true);
    return createUserWithEmailAndPassword(auth,email,password)

  }

  const signIn =(email,password)=>{
    setLoading(true);
    return signInWithEmailAndPassword(auth,email,password)
  };

  const googleIn =()=>{

    setLoading(true);
    return signInWithPopup(auth,provider)
  };
  const logOut =()=>{
    return signOut(auth)
  };

  useEffect(()=>{

    const unSubscribe = onAuthStateChanged(auth,currentUser =>{
      console.log('current user ', currentUser);
      setUser(currentUser)
      setLoading(false)
    })

    return()=>{
      unSubscribe();
    }


  },[])



  const authinfo ={

    user,
    createUser,
    loading,
    signIn,
    googleIn,
    logOut

  }

  return (

    <AuthContext.Provider value={authinfo}>

      {children}

    </AuthContext.Provider>
  )


}
