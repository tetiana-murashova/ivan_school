import React from 'react';
import logo from'../resource/logo-my.svg';

import {Affix} from "rsuite";
import Navigation from "./Navigation";



import SocialIcon from "./SocialIcon";



function Header(props) {


    return (
        <>

        <div className="row justify-content-between" >
            <div className="col-xs-8 col-8  mr-0">
                <img src={logo}
                     alt="logo"
                     width={200}
                />
                <p className="d-sm-none ml-2 text-danger" >ph: 0432380274</p>
            </div>
            <div className="col-xs-4 col-4">

<SocialIcon />


            </div>
        </div>

            <Affix >
                <Navigation />

            </Affix>
    </>
    );
}

export default Header;
