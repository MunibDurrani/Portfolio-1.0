
import React from 'react';


const Services = [
    {
        id: 1,
        title: "Web Design",
        description: "Creating visuallay appealing and user-firendly webdesign.",
    },
    {
        id: 2,
        title: "FrontEnd Development",
        description: "Building responsive and interactive user interface.",
    },
    {
        id: 3,
        title: "Backend Development",
        description: "Development robust server side logic database",
    },
    {
        id: 4,
        title: "Fullstack Development",
        description: "Creating visuallay appealing and user-firendly webdesign.",
    }, {
        id: 5,
        title: "Web Design",
        description: "Creating visuallay appealing and user-firendly webdesign.",
    },
    {
        id: 6,
        title: "Web Design",
        description: "Creating visuallay appealing and user-firendly webdesign.",
    },
]

function Service() {
    return (

        <div className='bg-black text-white py-20 id="service"'>
            <div className='container mx-auto px-8 md:px-16 lg:px-24'>
                <h1 className='text-4xl font-bold text-center mb-12'>My Services</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:cols-grid-3 gap-8'>
                    {Services.map(Service => (
                        <div key={Service.id}
                            className='bg-gray-800 px-6 pb-6 rounded-lg hover:shadow-lg tranform
                    transition-tranform duration-300 hover:scale-105'>
                            <div className='text-right  text-2xl font-bold text-transparent bg-clip-text
                    bg-gradient-to-r from-green-600 to-blue-400'>
                                {Service.id}
                            </div>
                            <h3 className='mt-2 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400'
                            >{Service.title}</h3>
                            <p className='mt-2 text-gray-300'>{Service.description}</p>
                            <a href='#' className='mt-4 inline-block text-green-400 hover:text-blue-500'>Read More</a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Service;
                                












