"use client"
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { UserDetailsConstext } from '@/context/UserDetailContext';

function Provider({children}: {children: React.ReactNode})  {

    const [userDetails, setUserDetails] = useState<any>();
    useEffect(() => {
        CreateNewUser();
    }, []);

    const CreateNewUser = async() => {
        const result=await axios.post('/api/users');
        console.log(result.data);
        setUserDetails(result.data);
    }

  return (
    <UserDetailsConstext.Provider value={{userDetails, setUserDetails}}>
        <div>{children}</div>
    </UserDetailsConstext.Provider>
  )
}

export default Provider

