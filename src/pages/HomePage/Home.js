import React from 'react';

import '../../resource/style.css';
import Courusel from './Courusel';
import Services from "./Services";
import AboutSch from "./AboutSch";
import NavMiddle from "../../components/NavMiddle";
import ChildFooter from "./ChildFooter";
import FooterMy from "../../components/FooterMy"







const Home = () =>  {



        return (
<>
            <Courusel />

            <Services />

            <NavMiddle />
            <AboutSch />

            <ChildFooter />
            <FooterMy />

</>

        );
    }


export default Home;



