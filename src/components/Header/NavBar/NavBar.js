import React, {useEffect} from "react";
import logo from './../../../assets/logo.svg'
import './NavBar.scss'
import {useMediaQuery} from "react-responsive/src";
import {NavLink} from "react-router-dom";
import {useDispatch} from "react-redux";
import {toggleSideMenu} from "../../../redux/modal-reducer";



const NavBar = () => {
    const dispatch=useDispatch()
    function toggleMenu() {
        dispatch(toggleSideMenu())

    }

    const isDesktop = useMediaQuery({query: '(min-width:1024px)'})
    const isTabletOrMobile = useMediaQuery({query: "(max-width:1024px)"})
    // useEffect(() => {
    //     toggleMenu()
    // }, [isDesktop])


    const MENU_ITEMS = [
        {
            title: "About me",
            path: "/about"
        },
        {
            title: "Relationships",
            path: "/relationships"
        },
        {
            title: "Requirements",
            path: "/requirements"
        },
        {
            title: "Users",
            path: "/users"
        },
        {
            title: "Sign Up",
            path: "/signup"
        },

    ]

    return (
        <nav className='header__body'>
            <div className='logo'>
                <div className='img'><img src={logo} alt="Logo"/></div>
            </div>
            {isTabletOrMobile && <div className="burger__menu" onClick={toggleMenu}>
                <span></span>
            </div>}
            {isDesktop && <div className='header__menu'>
                <ul>
                    {MENU_ITEMS.map((item,index)=>{
                        return <li key={`${index}-${item.title}`}>
                            <div className='menu__item'><NavLink className='link' activeClassName="selected" to={item.path}>
                                {item.title}
                            </NavLink></div>
                        </li>})
                    }
                </ul>
            </div>}
        </nav>
    )
}
export default NavBar