import React from 'react';


import ChildFirst from '../../resource/ch-1.jpg';
import ChildSecond from '../../resource/ch-2.jpg';
import ChildThird from '../../resource/ch-3.jpg';


const ChildFooter = () => {
    return (
        <>
            <div className="p-5 bg-light" id="contact">
                <div className="container-fluid">

                    <div className="row">
                        <div className="col text-center mb-3">
                            <h2 className="text-danger display-2">Название</h2>
                            <p className="lead text-secondary">Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                Nam, a. Omnis, numquam!</p>
                        </div>
                    </div>

                    <div className="row justify-content-around">
                        <div className="col-9 col-sm-9 col-md-9 col-lg-3">
                            <img
                                style={{ boxShadow: '6px 9px 5px 1px rgba(0,0,0,0.49)'}}
                                className="d-block w-100 m-2"
                                src={ChildFirst}
                                alt="child"
                            />

                        </div>
                        <div className="col-9 col-sm-9 col-md-9 col-lg-3">
                            <img
                                style={{ boxShadow: '6px 9px 5px 1px rgba(0,0,0,0.49)'}}
                                className="d-block w-100 m-2"
                                src={ChildSecond}
                                alt="child"
                            />
                        </div>
                        <div className="col-9 col-sm-9 col-md-9 col-lg-3">
                            <img
                                style={{ boxShadow: '6px 9px 5px 1px rgba(0,0,0,0.49)'}}
                                className="d-block w-100 m-2"
                                src={ChildThird}
                                alt="child"
                            />
                        </div>



                        </div>
                    </div>
                </div>
            </>

    );
};

export default ChildFooter;
