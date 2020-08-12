export const SET_USERS = "SET_USERS"
export const SET_POSITIONS = "SET_POSITIONS"
export const START_LOADING = "START_LOADING"
export const STOP_LOADING = "STOP_LOADING"
export const NEXT_URL = "NEXT_URL"
export const PREV_URL="PREV_URL"
export const REFRESH_USERS="REFRESH_USERS"


const initialState = {
    positions: {},
    loading: false,
    users: [],
    next: null,
    prev: null,
    trigger:false
}
export const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case REFRESH_USERS:{
            return {
                ...state,trigger: !state.trigger
            }
        }
        case NEXT_URL: {
            return {
                ...state, next: action.payload
            }
        }
        case PREV_URL:{
            return {
                ...state,prev:action.payload
            }
        }
        case START_LOADING: {
            return {
                ...state, loading: true
            }
        }
        case STOP_LOADING: {
            return {
                ...state, loading: false
            }
        }
        case SET_USERS: {
            return {
                ...state, users: action.payload
            }
        }
        case SET_POSITIONS: {
            return {
                ...state, positions: action.payload
            }
        }
        default:
            return state
    }
}