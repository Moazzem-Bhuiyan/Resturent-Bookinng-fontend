import React, { useContext } from 'react'
import { AuthContext } from './AuthProvider'
import { Navigate } from 'react-router-dom';

export default function PrivateAuth({children}) {

  const {user,loading}=useContext(AuthContext);

  if(loading){
    return <span>Loaging....</span>
  }
  if (user){
    return children
  }



  return (
    <Navigate to = '/auth/signin'></Navigate>
  )
}
