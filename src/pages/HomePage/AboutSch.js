import React from 'react';
import Cubics from "../../resource/kybici.jpg";

import {Button} from  'react-bootstrap';

import '../../resource/style.css';


import { library } from '@fortawesome/fontawesome-svg-core'


import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

library.add(faEnvelope);



const AboutSch = () => {
    return (
        <div className="bg-light pb-10" id='about'>
            <div className="row py-5 ">
                <div className="col text-center mb-3">
                    <h2 className="text-danger display-2">Наша школа</h2>
                    <p className="lead text-secondary">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam, a.
                        Omnis, numquam!</p>
                </div>
            </div>

            <div className="row justify-content-around">
                <div className="about-sch col-8 col-sm-8 col-md-5 col-lg-5 ">

                    <h2> О школе </h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias animi architecto cumque eos et id
                        inventore maiores porro provident quis ratione recusandae soluta sunt, voluptas voluptate.
                        Deleniti distinctio dolorem, ducimus eos laboriosam libero mollitia nesciunt quae veritatis
                        voluptates. Ab, atque deserunt dolores eos eum eveniet explicabo harum hic, iusto laboriosam
                        odio officiis, quas tempore vel velit veritatis voluptas! Accusantium deserunt error excepturi
                        exercitationem impedit minima, omnis qui ullam. Alias culpa earum eius est expedita facilis,
                        fugiat id molestiae nemo nesciunt odit placeat rem totam velit vitae. Amet aperiam beatae
                        dignissimos!</p>
                    <Button variant="outline-primary">Read more</Button>
                </div>
                <div className=" col-8 col-sm-8 col-md-5 col-lg-5">
                    <img
                        style={{ boxShadow: '6px 9px 5px 1px rgba(0,0,0,0.49)'}}
                        className="d-block w-100"
                        src={Cubics}
                         alt="cube"
                    />
                </div>

            </div>
            <div className='row bg-light' style={{height: '100px'}}>
                l
            </div>

            <div className='row bg-danger p-3 justify-content-around'>

                    <h3 className="text-light">Записаться на пробный урок</h3>
                    <a href="mailto:info@ivan.school">

                        <Button variant="warning">Отправить письмо</Button>
                    </a>

            </div>
        </div>
    );
};

export default AboutSch;
