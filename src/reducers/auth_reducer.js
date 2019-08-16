const initState = {
    isLogged: false,
    token: null,
    loginErrorMsg: '',
    loginBtnDisabled: false,

    regMsgClass: 'warning-text',
    regMsg: 'Username and/or Password should be characters and/or numbers with minimal length of 6',
    regBtnDisabled: false,

    loggedUser: null,
    role: null
}

export default function (state = initState, action) {
    switch (action.type) {
        case 'LOGIN_SUCCESS':
            return {
                ...state,
                loginBtnDisabled: false,
                isLogged: true,
                token: action.token
            }
        case 'LOGIN_ERROR':
            return {
                ...state,
                loginBtnDisabled: false,
                loginErrorMsg: action.loginErrorMsg
            }
        case 'REGISTER_SUCCESS':
            return {
                ...state,
                regBtnDisabled: false,
                regMsgClass: 'success-text',
                regMsg: action.regMsg
            }
        case 'REGISTER_ERROR':
            return {
                ...state,
                regBtnDisabled: false,
                regMsgClass: 'error-text',
                regMsg: action.regMsg
            }
        case 'LOAD_USER':
            return {
                ...state,
                loggedUser: action.loggedUser,
                role: action.role,
                isLogged: true
            }
        case 'LOGOUT_USER':
            return {
                ...state,
                role: null,
                loggedUser: null,
                isLogged: false,
                token: null
            }
        default:
            return state;
    }
}