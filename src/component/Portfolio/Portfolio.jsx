import React from 'react'
import './Portfolio.css'
import imageOne from "../../Assets/port1.png";
import imageTwo from "../../Assets/port2.png";
import imageThree from "../../Assets/port3.png";
export default function Portfolio() {
    return <>
        <section className='mt-5' id='portfolio'>
            <div className="container d-flex align-items-center flex-column ">
                <h1 className='text-capitalize fw-bolder fs-1 '>PORTFOLIO COMPONENT</h1>
                <span>
                    <span className='star position-relative'> <i className='fa-solid fa-star'></i></span>
                </span>
                <div className="row g-4 mt-2 mb-5">
                    <div className="col-md-4">
                        <div className="item">
                            <img src={imageOne} alt="port1" className="w-100 rounded-2" />
                            <div className="layer rounded-2 d-flex justify-content-center align-items-center">
                                <i className="fa-solid fa-plus fa-6x text-white"></i>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="item">
                            <img src={imageTwo} alt="port2" className="w-100 rounded-2" />
                            <div className="layer rounded-2 d-flex justify-content-center align-items-center">
                                <i className="fa-solid fa-plus fa-6x text-white"></i>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="item">
                            <img src={imageThree} alt="port3" className="w-100 rounded-2" />
                            <div className="layer rounded-2 d-flex justify-content-center align-items-center">
                                <i className="fa-solid fa-plus fa-6x text-white"></i>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="item">
                            <img src={imageOne} alt="port1" className="w-100 rounded-2" />
                            <div className="layer rounded-2 d-flex justify-content-center align-items-center">
                                <i className="fa-solid fa-plus fa-6x text-white"></i>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="item">
                            <img src={imageTwo} alt="port2" className="w-100 rounded-2" />
                            <div className="layer rounded-2 d-flex justify-content-center align-items-center">
                                <i className="fa-solid fa-plus fa-6x text-white"></i>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="item">
                            <img src={imageThree} alt="port3" className="w-100 rounded-2" />
                            <div className="layer rounded-2 d-flex justify-content-center align-items-center">
                                <i className="fa-solid fa-plus fa-6x text-white"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
}
