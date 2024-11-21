import React from 'react'
// import { FaEnvelope, FaPhone, FaMapMarkedAlt } from "react-icons/fa";




function Contact ()  {
  return (
    <div className='bg-black text-white py-20'>
    <div className='container mx-auto px-8 md:px-16 lg:px-24'>
        <h1 className='text-4xl font-bold text-center mb-12'>Contact Me</h1>
        <div className='flex flex-col md:flex-row items-center md:space-x-12'>
            <div className='flex-1'>
               <h3 className='text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>Let's Talk</h3>
               <p>I'm open to dicsussing projects or partnership opportunties.</p>  
               <div className='mb-4 mt-4'>
                {/* <FaEnvelope className='inline-block text-green-400 mr-4'></FaEnvelope> */}
                <a href="#" className='hover:underline'>
                    youremail@example.com
                </a>
               </div>
               <div className='mb-4 mt-4'>
                {/* <FaPhone className='inline-block text-green-400 mr-4'></FaPhone> */}
                <span>+923149342020</span>
               </div>
               <div className='mb-4 mt-4'>
                {/* <FaMapMarkedAlt className='inline-block text-green-400 mr-4'></FaMapMarkedAlt> */}
                <span>Street,City,Country</span>
               </div>
            </div>
            <div className='flex-1 w-full'>
                <form>
                    <div>
                        <label htmlFor='name' className='block mb-2'>Your Name</label>
                        <input type='text' 
                        className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none
                        focus:border-green-400'
                        placeholder='Enter your Name'/>
                    </div>
                    <div>
                        <label htmlFor='name' className='block mb-2'>Email</label>
                        <input type='email' 
                        className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none
                        focus:border-green-400'
                        placeholder='Enter your Email'/>
                    </div>
                    <div>
                        <label htmlFor='message' className='block mb-2'>Message</label>
                        <textarea type='email' 
                        className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none
                        focus:border-green-400'
                        rows="5"
                        placeholder='Enter your Message'/>
                    </div>
                    <button className='bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline
        transform transition-transform duration-300 hover:scale-105 px-8 py-2 rounded-full'>Send</button>
                </form>
            </div>
        </div>
    </div>
</div>
  )
}

export default Contact;
