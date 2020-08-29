import React from "react";
import NavBar from "./NavBar/NavBar";
import {useSelector} from "react-redux";
import SideBar from "../SideBar/SideBar";




const Header = (props) => {
    const isMenuActive=useSelector(state=>state.modal.isSideMenuActive)
    return (<>
                <NavBar/>
            {isMenuActive ? <SideBar /> : null}
            </>
    )
}
export default Header
