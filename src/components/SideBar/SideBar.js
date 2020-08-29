import React from "react";
import './SideBar.scss'
import {NavLink} from "react-router-dom";
import Portal from "../Portal/Portal";
import {useDispatch, useSelector} from "react-redux";
import {toggleSideMenu} from "../../redux/modal-reducer";
import logo from "../../assets/logo.svg";


const SideBar = () => {
    const dispatch=useDispatch()

    return (<Portal >
            <div className="menu__overlay"onClick={()=>{dispatch(toggleSideMenu())}} >

        <div className="side-menu" >
            <div className="logo">
                <div className='img'><img src={logo} alt="Logo"/></div>
            </div>
            <div className="menu_block">
                <ul>
                    <li>
                        <div className="menu__item"><NavLink to="/1" className="link" activeClassName="selected">About me </NavLink></div>
                    </li>
                    <li>
                        <div className="menu__item"><NavLink to="/2" className="link" activeClassName="selected">Relationships </NavLink></div>
                    </li>
                    <li>
                        <div className="menu__item"><NavLink to="/3" className="link" activeClassName="selected">Users </NavLink></div>
                    </li>
                    <li>
                        <div className="menu__item"><NavLink to="/4" className="link" activeClassName="selected">Sign Up </NavLink></div>
                    </li>
                    <li>
                        <div className="menu__item"><NavLink to="/5" className="link" activeClassName="selected">Terms and Conditions</NavLink>
                        </div>
                    </li>
                </ul>
            </div>
            <div>
                <ul>
                    <li>
                        <div className="menu__item"><NavLink to="/6" className="link" activeClassName="selected">How it works</NavLink></div>
                    </li>
                    <li>
                        <div className="menu__item"><NavLink to="/7" className="link" activeClassName="selected">Partnership</NavLink></div>
                    </li>
                    <li>
                        <div className="menu__item"><NavLink to="/8" className="link" activeClassName="selected">Help</NavLink></div>
                    </li>
                    <li>
                        <div className="menu__item"><NavLink to="/9" className="link" activeClassName="selected">Leave testimonial</NavLink></div>
                    </li>
                    <li>
                        <div className="menu__item"><NavLink to="/10" className="link" activeClassName="selected">Contact us</NavLink></div>
                    </li>
                </ul>
            </div>
            <div className="menu_block">
                <ul>
                    <li>
                        <div className="menu__item"><NavLink to="/11" className="link" activeClassName="selected">Articles</NavLink></div>
                    </li>
                    <li>
                        <div className="menu__item"><NavLink to="/12" className="link" activeClassName="selected">Our news</NavLink></div>
                    </li>
                    <li>
                        <div className="menu__item"><NavLink to="/13" className="link" activeClassName="selected">Testimonials</NavLink></div>
                    </li>
                    <li>
                        <div className="menu__item"><NavLink to="/14" className="link" activeClassName="selected">Licenses</NavLink></div>
                    </li>
                    <li>
                        <div className="menu__item"><NavLink to="/15" className="link" activeClassName="selected" >Privacy Policy</NavLink></div>
                    </li>
                </ul>
            </div>
        </div></div></Portal>
    )
}

export default SideBar