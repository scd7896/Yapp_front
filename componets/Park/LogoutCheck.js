import Router from 'next/router'

import {useSelector } from 'react-redux'
import { useEffect } from 'react'
import cookies from '../../methods/cookies'

export default function LogoutCheck(){
    
    var {user} = useSelector(state => state);
    
    useEffect(() => {
        if(user.userToken == ''){
            Router.push('/');
        }
    },[user])
    

    return null;
}