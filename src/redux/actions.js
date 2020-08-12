import {
    NEXT_URL, PREV_URL, REFRESH_USERS,
    SET_USERS,
    START_LOADING,
    STOP_LOADING
} from "./app-reducer";
export const setNextUrl=next=>{
    return{
        type:NEXT_URL,
        payload:next
    }
}
export const setPrevUrl=prev=>{
    return{
        type:PREV_URL,
        payload:prev
    }
}
export const setUsers=(data)=>{
    return{
        type:SET_USERS,
        payload:data
    }
}
export const startLoading=()=> ({type:START_LOADING})
export const refreshUsers=()=>({type:REFRESH_USERS})
export const stopLoading=()=>({type:STOP_LOADING})
