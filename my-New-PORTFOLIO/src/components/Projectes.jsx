import React from "react";
import img1 from "./assets/lion.jpg"; // Ensure this path is correct
import lion from "./assets/lion.jpg"; // Imported lion image

const Projects = [
    {
        id: 1,
        name: "Muneeb Durrani",
        technologies: "React Js",
        img1: img1,
        github: "https://github.com/MunibDurrani",
    },
    {
        id: 2,
        name: "John Doe",
        technologies: "React and Node.js",
        img1: lion, // Using the lion image here
        github: "https://github.com/example",
    },
    {
        id: 3,
        name: "Jane Smith",
        technologies: "JavaScript and CSS",
        img1: img1,
        github: "https://github.com/example",
    },
];

function Projectes() {
    return (
        <div className='bg-black text-white py-20' id="project">
            <div className='container mx-auto px-8 md:px-16 lg:px-24'>
                <h1 className='text-4xl font-bold text-center mb-12'>My Projects</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {Projects.map((project) => (
                        <div
                            key={project.id}
                            className='bg-gray-800 p-6 rounded-lg hover:shadow-lg transform transition-transform duration-300 hover:scale-105'
                        >
                            <img
                                src={project.img1}
                                alt={project.name}
                                className='rounded-lg mb-4 w-full h-48 object-cover'
                            />
                            <h3 className='text-2xl font-bold mb-2'>{project.name}</h3>
                            <p className='text-gray-400 mb-4'>{project.technologies}</p>
                            <a
                                href={project.github}
                                className='inline-block bg-gradient-to-r from-green-400 to-blue-500 text-white py-2 px-4 rounded-full'
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                GitHub
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Projectes;
