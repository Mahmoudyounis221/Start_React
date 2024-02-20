import React from 'react'

export default function ContactUs() {
    return <>
        <section>
            <div className="container  d-flex align-items-center flex-column mt-3 mb-3" id='portfolio'>
                <h1 className="text-center text-3xl fw-bolder">CONATCT SECTION</h1>
                <span>
                    <span className='star position-relative'> <i className='fa-solid fa-star'></i></span>
                </span></div>
            <form action="">
                <div className="container bg-white col-md-8">
                    <input required type="text" name="name" id="name" placeholder="User Name" className="form-control my-5" />
                    <input required type="text" name="name" id="name" placeholder="User Age" className="form-control my-5" />
                    <input required type="text" name="name" id="name" placeholder="User Email" class="form-control my-5" />
                    <input type="password" id="name" name="name" className="form-control my-3" placeholder="User PassWord" required />
                    <button type='submit' className='btn btn-info my-2 mb-5 text-white rounded-3 p-2 border-0'>Send Message</button>
                </div>
            </form>
        </section>
    </>
}
