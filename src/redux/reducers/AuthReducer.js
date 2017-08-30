import { USERNAME_CHNAGE,
    PASSWORD_CHANGE,
    LOGIN_SUCCESS,
    LOGIN_FAIL} from '../action/types'
const INITIAL_STATE = { username: 'dev', password: '123456',error:''}

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case USERNAME_CHNAGE:
            return{...state,username: action.payload}
        case PASSWORD_CHANGE:
            return{...state,password: action.payload}
        case LOGIN_SUCCESS:
            return action.payload || []
        case LOGIN_FAIL:
            return {...state,INITIAL_STATE,error: action.payload}
        default:
            return state
    }
}