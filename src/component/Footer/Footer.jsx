import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom';
export default function Footer() {
    return <>
        <section id='Footer' className='p-4'>
            <div className="conatier p-4 text-center  text-white">
                <div className="row w-100">
                    <div className="col-md-4"><div>
                    </div>
                        <h3>LOCATION</h3>
                        <p>2215 John Daniel Drive</p>
                        <p>Clark, MO 65243</p>
                    </div>
                    <div className="col-md-4"><div>
                    </div>
                        <h3>AROUND THE WEB</h3>
                        < div className="socail-links">
                            <Link to="#!"><i className="mx-1 text-white fab fa-facebook border border-1 rounded-5 p-2"></i></Link>
                            <Link to="#!"><i className="mx-1 text-white fab fa-twitter border border-1 rounded-5 p-2"></i></Link>
                            <Link to="#!"><i className="mx-1 text-white fab fa-linkedin border border-1 rounded-5 p-2"></i></Link>
                            <Link to="#!"><i className="mx-1 text-white fa fa-globe border border-1 rounded-5 p-2"></i></Link>

                        </div>
                    </div>
                    <div className="col-md-4"><div>
                    </div>
                        <h3>ABOUT FREELANCER</h3>
                        <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
                    </div>
                </div>

            </div>

        </section>
        <div className='fw-bolder bg-dark text-white d-flex justify-content-center py-2'>
            <p className='py-2'>Copyright © Your Website 2021</p>
        </div>
    </>
}
