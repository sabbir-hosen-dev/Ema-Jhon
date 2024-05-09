import React from 'react'
import { useShopContext } from '../Hook/useShopContext'
import { Navigate } from 'react-router'

function PrivetRoute({children}) {
  const {user} = useShopContext()
  
  if(user.signIn){
    return children
  }else{
   return <Navigate to="/login" replace />
  }
}

export default PrivetRoute
