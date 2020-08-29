import React from "react";
import {useMediaQuery} from "react-responsive/src";
import './Banner.scss'





const Banner = () => {

    const isMobile=useMediaQuery({
        query:'(max-width:767px)'
    })
    const isTableOrMobile=useMediaQuery({
        query:'(min-width:768px)'
    })

    return (
        <div className='banner'>
            <div className='title'>
                    <h1>Test assignment <br/> for frontend <br/> developer position</h1>
                </div>
            <div className='simple__text'>
                {isMobile&&<p>We kindly remind you that your test assignment
                    should be submitted as a link to github/bitbucket repository</p>}
                {isTableOrMobile&&<p>We kindly remind you that your test assignment
                should be submitted as a link to github/bitbucket repository. Please be patient, we consider and respond to every application that meets minimum requirements.
                We look forward to your submission. Good luck! The photo has to scale in the banner
                area on the different screens</p>}</div>
                <a id="banner__button" href="#signup"><div className="btn banner__button">Sign up now</div></a>
        </div>
    )
}
export default Banner