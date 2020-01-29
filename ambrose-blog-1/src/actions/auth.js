export const login_success = () => {
    return {
        type: 'LOGIN_SUCCESS'
    }
}

export const login_error = () => {
    return {
        type: 'LOGIN_FAILURE'
    }
}

export function auth(email,password) {
    if(email === user.email && password === user.password){
        return true
    } else {
        return false
    }
}

export const loginUser = (email, password) => dispatch => {
    if(auth(email, password) == true){
        dispatch(login_success)
    } else {
        dispatch(login_error)
    }   
}