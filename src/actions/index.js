import axios from 'axios';
import {AUTH_USER} from './types';

export const signup = ({email, password},callback) => dispatch =>{
debugger
         dispatch({
             type: AUTH_USER,
             payload: password 
         })
         callback();
         localStorage.setItem('token',password)
}


//axios.post('http://localhost:3030/sign',{email,password}){email:email,password:password}

export const signout = () => {
    localStorage.removeItem('token');

    return {
        type:  AUTH_USER,
        paylaod: ''
    }
}