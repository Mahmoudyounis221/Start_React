import React from 'react'
import './Home.css'
import avatar from '../../Assets/avatar.svg'
export default function Home() {
    return <>
        <section className="main text-center  text-white d-flex align-items-center">
            <div className="container d-grid py-5 ">
                <figure>
                    <img src={avatar} alt="" width={250} />
                </figure>
                <h1 className='fw-bolder'>START FRAMEWORK</h1>
                <span>
                    <span className='star position-relative'> <i className='fa-solid fa-star'></i></span>
                    <p className='mt-3 fw-bold '>Graphic Artist - Web Designer - Illustrator</p>
                </span>
            </div>

        </section>
    </>
}
