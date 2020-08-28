import React from 'react';
import {Form, Button} from 'react-bootstrap';

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {NavLink} from "react-bootstrap";



const FooterMy = () => {
    return (
       <div className='row bg-dark justify-content-around'>
           <div className="col-9 col-sm-9 col-md-3 m-2">


               <div >
                   <div className="row mb-5 mt-3 w-100">
                       <a href="mailto:info@ivan.school"  className="text-decoration-none text-light">
                           <FontAwesomeIcon icon={['fas', 'envelope-open-text']} className=" mb-0  h2" />
                           <p className="ml-3 mt-2  mb-4 d-inline">info@ivan.school</p>

                       </a>
                   </div>

                   <div className="row mb-5">
                       <a href="https://www.facebook.com/groups/1387739428198576" className="text-decoration-none text-light">
                           <FontAwesomeIcon icon={['fab', 'facebook-square']} className=" mb-0  h2" />
                           <p className="ml-3 mb-4 d-inline  text-decoration-none " >Facebook</p>
                       </a>
                   </div>


                   <div className="row mb-5 social-icon text-light">
                       <FontAwesomeIcon icon={['fas', 'phone-square-alt']} className=" mb-0  h2" />
                       <p className="ml-3 d-inline  text-decoration-none  ">0432 380 274</p>

                   </div>
               </div>


           </div>
           <div className="col-9 col-sm-9 col-md-3 m-2 text-light">

               <NavLink href="/"><p className="my-2 text-light">Home</p></NavLink>
               <NavLink href="/timetable"><p className="my-2 text-light">Timetable</p></NavLink>
               <NavLink href="/gallery"><p className="my-2 text-light">Gallery</p></NavLink>
               <NavLink href="/teachers"><p className="my-2 text-light">Our Teachers</p></NavLink>
           </div>
           <div className="col-9 col-sm-9 col-md-3 m-2">
               <Form className="text-light">
                   <Form.Group controlId="formBasicEmail">
                       <Form.Label>Email address</Form.Label>
                       <Form.Control type="email" placeholder="Enter email" />
                       <Form.Text className="text-light">
                           We'll never share your email with anyone else.
                       </Form.Text>
                   </Form.Group>

                   <Form.Group controlId="formBasicPassword">
                       <Form.Label>Сообщение</Form.Label>
                       <Form.Control type="text" placeholder="Your Message..." />
                   </Form.Group>

                   <Button variant="warning" type="submit">
                       Submit
                   </Button>
               </Form>
           </div>
       </div>
    );
};

export default FooterMy;
