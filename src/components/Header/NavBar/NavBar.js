import React, {useEffect, useState} from "react";
import logo from './../../../assets/logo.svg'
import './NavBar.scss'
import SideBar from "../../SideBar/SideBar";
import {useMediaQuery} from "react-responsive/src";
import {NavLink} from "react-router-dom";


const NavBar = (props) => {
    const [isMenuActive, setActive] = useState(false)

    function toggleMenu() {
        setActive(!isMenuActive)
    }

    const isDesktop = useMediaQuery({query: '(min-width:1024px)'})
    const isTabletOrMobile = useMediaQuery({query: "(max-width:1024px)"})
    useEffect(() => {
        setActive(false)
    }, [isDesktop])


    const MENU_ITEMS = [
        {
            title: "About Me",
            path: "/about"
        },
        {
            title: "Relationship",
            path: "/relationship"
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
            {isMenuActive ? <SideBar/> : null}
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