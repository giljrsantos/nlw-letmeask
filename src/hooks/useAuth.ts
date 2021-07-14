/* eslint-disable react-hooks/rules-of-hooks */
import { useContext } from 'react'
import { AuthContext  } from '../contexts/AuthContext';

export function userAuth(){
    const value = useContext(AuthContext);

    return value;
}

