import axios from 'axios'
import {USERNAME_CHNAGE,PASSWORD_CHANGE,LOGIN_SUCCESS,LOGIN_FAIL} from './types'

// login Url
const LOGIN_URL = "http://192.168.200.34:3000/login"

export const usernameChanged = (text) => {
    return{
        type: USERNAME_CHNAGE,
        payload: text
    }
}

export const passwordChanged = (text) =>{
    return{
        type: PASSWORD_CHANGE,
        payload: text
    }
}

export const userLogin = (username,password) => {

    return dispatch => {
        axios.post(LOGIN_URL,{
            username: username,
            password: password
        })
            .then((response) => {

                if(response.data.length > 0){
                    loginDone(dispatch,response)
                }else{
                    loginFail(dispatch,response)
                }})
            .catch((response) => loginFail(dispatch,response))
    }
}

const loginDone = (dispatch,response) =>{
    dispatch({
        type: LOGIN_SUCCESS,
        payload: response.data
    })
}

const loginFail = (dispatch, response) =>{
    dispatch({
        type: LOGIN_FAIL,
        payload: (response.message) ? response.message : 'Invalid Login'
    })
}
