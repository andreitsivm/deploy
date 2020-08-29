
const OPEN_MODAL="OPEN_MODAL";
const CLOSE_MODAL= "CLOSE_MODAL";
const SET_MESSAGE="SET_MESSAGE";
const CLEAR_MESSAGE="CLEAR_MESSAGE";
const SIDE_MENU_TOGGLE="SIDE_MENU_TOGGLE"

const initialState={
    modalIsOpen:false,
    message:null,
    isSideMenuActive:false
}
export const modalReducer=(state=initialState,action)=> {
    switch (action.type) {
        case OPEN_MODAL:{
            return {
                ...state,modalIsOpen: true
            }
        }
        case CLOSE_MODAL:{
            return {
                ...state,modalIsOpen: false
            }
        }
        case SET_MESSAGE:{
            return {
                ...state,message: action.payload
            }
        }
        case CLEAR_MESSAGE:{
            return {
                ...state,message: null
            }
        }
        case SIDE_MENU_TOGGLE:{
            return {
                ...state,isSideMenuActive: !state.isSideMenuActive
            }
        }
        default:{
            return state
        }
    }
}
export const toggleSideMenu=()=>({type:SIDE_MENU_TOGGLE})
export const clearMessage=()=>({type:CLEAR_MESSAGE})
export const openModal=()=>({type:OPEN_MODAL})
export const closeModal=()=>({type:CLOSE_MODAL})
export const setMessage=(text)=>({ type:SET_MESSAGE,payload:text})
