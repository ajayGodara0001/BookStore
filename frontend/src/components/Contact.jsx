import React from 'react'
import Navbar from './Navbar'

function Contact() {
    return (
        <>
            <Navbar />
            <div className='bg-white min-h-screen'>
                <div className=' p-4 m-4 flex flex-col justify-center items-center'>
                    <h1 className='md:text-4xl text-2xl font-bold self-start md:ml-40'>Contact Us </h1>
                    <div>
                        <label htmlFor="name" className='text-xl'>Name:</label>
                        <br />
                        <input
                            type="text"
                            id="name"
                            width={700}
                            placeholder="Type your name"
                            className="input md:min-w-96 w-full mt-1 input-bordered input-secondary bg-white  " />
                    </div>
                    <br />
                    <div>
                        <label htmlFor="email" className='text-xl'>Email:</label>
                        <br />
                        <input
                            type="email"
                            id='email'
                            placeholder="Type email address"
                            className="input md:min-w-96 w-full  mt-1 input-bordered input-secondary bg-white   " />
                    </div>
                    <br />
                    <div>
                        <label htmlFor="message" className='text-xl'>Message:</label>
                        <br />
                        <textarea
                            type="text"
                            id='message'
                            placeholder="Type your message"
                            className="input  md:min-w-96 w-60 h-40 md:min-h-40 mt-1 input-bordered input-secondary bg-white " />
                    </div>

                    <div className='self-start md:ml-72 mt-10'>
                        <button type='submit' className='bg-pink-500 cursor-pointer px-3 py-2  rounded-lg ml-0 '>Submit</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact
