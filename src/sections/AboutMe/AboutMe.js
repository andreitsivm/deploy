import React from "react";
import image from '../../assets/man-laptop-v1.svg'
import './AboutMe.scss'


const AboutMe = (props) => {


    return (
        <div className=" about" id="about">
            <div className="title"><h1>Let's get acquainted</h1></div>
            <div className="about__info">
                <div className='image'>
                    <img id="img" src={image} alt="man with laptop"/>
                </div>
                <div className="info">
                    <div className="info__title"><h2>I am cool frontend developer</h2></div>
                    <div className="info__text">
                        <p>We will evaluate how clean your approach to writing CSS and Javascript code is. You can use
                            any CSS and Javascript 3rd party libraries without any restriction.
                            <br/><br/>
                            If 3rd party css/javascript libraries are added to the project via bower/npm/yarn you will
                            get bonus points. If you use any task runner (gulp/webpack) you will get bonus points as
                            well.
                            Slice service directory page PSD mockup​ into HTML5/CSS3. </p>
                        <div className="button">
                            <a href="#signup" className="a-about">Sing up now</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe