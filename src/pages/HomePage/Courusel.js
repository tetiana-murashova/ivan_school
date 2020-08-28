import React from 'react';
import Carousel  from 'react-bootstrap/Carousel';


import CarouselFirst from '../../resource/car-5.jpg';
import CarouselSecond from '../../resource/car-4.jpg';
import CarouselThird from '../../resource/car-6.jpg';


const CarouselMy = () => {


    return (

        <>

            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={CarouselFirst}
                        alt="First slide"
                    />
                    <Carousel.Caption className="bg-danger"  style={{zIndex: '2',  position: 'absolute', left:'0', top:'90px', bottom: 'auto'}}>
                        <h3>Школа Иванушка Мельбурн</h3>
                        <p>Русский язык для детей</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={CarouselSecond}
                        alt="Third slide"
                    />

                    <Carousel.Caption className="bg-danger " style={{zIndex: '2',  position: 'absolute', left:'0', top:'90px', bottom: 'auto'}}>
                        <h3>Школа Иванушка Мельбурн</h3>
                        <p>Русский язык для детей</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={CarouselThird}
                        alt="Third slide"
                    />

                    <Carousel.Caption className="bg-danger"  style={{zIndex: '2',  position: 'absolute', left:'0', top:'90px', bottom: 'auto'}}>
                        <h3>Школа Иванушка Мельбурн</h3>
                        <p>Русский язык для детей</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>


        </>
    )
}

export default CarouselMy;
