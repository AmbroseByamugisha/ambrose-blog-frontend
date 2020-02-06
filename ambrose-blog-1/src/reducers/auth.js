export default(
    state ={
        loggedIn: false,
        loginError: false
    }, action
) => {
    switch(action.type) {
        case 'LOGIN_SUCCESS':
            return {
                ...state,
                loggedIn: true,
                loginError: false
            }
        case 'LOGIN_FAILURE':
            return {
                ...state,
                loggedIn: false,
                loginError: true
            }
        case 'LOGOUT_SUCCESS':
            return {
                ...state,
                loggedIn: false
            }
        default:
            return state
    }
}