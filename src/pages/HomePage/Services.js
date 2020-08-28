import React from 'react';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faDiceFive, faChild,faBook } from '@fortawesome/free-solid-svg-icons'

library.add(faDiceFive, faChild, faBook);

const Services = () => {
    return (
        <div className="bg-light py-5">


        <div className="row">
            <div className="col text-center mb-3">
                <h2 className="text-danger display-2">Русский для детей</h2>
                <p className="lead text-secondary">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam, a.
                    Omnis, numquam!</p>
            </div>

        </div>


            <div className="row text-center">
                <div className="col-lg-4 col-sm-10 mx-auto mb-5">
                    <FontAwesomeIcon icon={['fas', 'child']} className=" mb-0 fa-6x text-warning mb-3" />

                    <h2 className="text-secondary">Дети </h2>
                    <p className="text-muted my-4">Классы от 1,5 до 7 лет. Группы до 5 человек Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, possimus beatae. Architecto vel, amet excepturi nisi quidem aliquid facilis in.</p>

                </div>
                <div className="col-lg-4 col-sm-10 mx-auto mb-5">
                    <FontAwesomeIcon icon={['fas', 'book']} className=" mb-0 fa-6x text-warning mb-3" />

                    <h2 className="text-secondary">Учебники</h2>
                    <p className="text-muted my-4">Программа разработанна специально для детей билингвов  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, possimus beatae. Architecto vel, amet excepturi nisi quidem aliquid facilis in.</p>

                </div>
                <div className="col-lg-4 col-sm-10 mx-auto mb-5">
                    <FontAwesomeIcon icon={['fas', 'dice-five']} className=" mb-0 fa-6x text-warning mb-3" />

                    <h2 className="text-secondary">Игры</h2>
                    <p className="text-muted my-4">Учеба проходит в игровой форме Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, possimus beatae. Architecto vel, amet excepturi nisi quidem aliquid facilis in.</p>

                </div>
            </div>
        </div>
    );
};

export default Services;
