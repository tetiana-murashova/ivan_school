import React from 'react';
import '../resource/style.css';
import {NavLink} from "react-bootstrap";


const NavMiddle = () => {
    return (

        <>

            <div className=" bg-danger " >

                    <div className="row justify-content-around pt-4" >

                        <div className="nav-2-button col-4 col-md-2 col-lg-2 m-2">
                            <NavLink href="#about"><h5 className=" text-dark">О школе</h5></NavLink>
                        </div>
                        <div className="nav-2-button  col-4 col-md-2 col-lg-2 m-2">
                            <NavLink href="/timetable"><h5 className=" text-dark">Расписание</h5></NavLink>
                        </div>

                        <div className="nav-2-button col-4 col-md-2 col-lg-2 m-2">
                            <NavLink href="/gallery"><h5 className=" text-dark">Галерея</h5></NavLink>
                        </div>

                        <div className="nav-2-button  col-4 col-md-2 col-lg-2 m-2">
                            <NavLink href="/advices"><h5 className=" text-dark">Советы <br /> родителям </h5></NavLink>
                        </div>
                    </div>



                <div className="row justify-content-around pb-4" >
                    <div className="nav-2-button col-4 col-md-2 col-lg-2 m-2">
                        <NavLink href="/teachers"><h5 className=" text-dark">Наши учителя</h5></NavLink>
                    </div>
                    <div className="nav-2-button  col-4 col-md-2 col-lg-2 m-2">
                        <NavLink href="/material"><h5 className=" text-dark">Материалы</h5></NavLink>
                    </div>

                    <div className="nav-2-button  col-4 col-md-2 col-lg-2 m-2">
                        <a href="https://www.education.vic.gov.au/about/department/Pages/datesterm.aspx"
                           target="_blank"  rel="noopener noreferrer" ><h5 className=" text-dark">Школьный <br />календарь 2020</h5></a>
                    </div>
                    <div className="nav-2-button  col-4 col-md-2 col-lg-2 m-2">
                        <NavLink href="/contacts"><h5 className=" text-dark">Контакты</h5></NavLink>
                    </div>
                </div>

            </div>
            </>

    );
};

export default NavMiddle;
