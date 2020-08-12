import React from "react";
import Banner from "../sections/Banner/Banner";
import AboutMe from "../sections/AboutMe/AboutMe";
import Users from "../sections/Users/Users";
import Form from "../sections/Form/Form";

const Content = (props) => {
    return (
        <>
            <Banner/>
            <AboutMe/>
            <Users/>
            <Form/>
        </>
    )
}

export default Content