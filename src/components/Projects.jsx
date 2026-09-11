import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'
import project1 from '../assets/project1.png'
import project2 from '../assets/project2.png'
import project3 from '../assets/project3.png'
import project4 from '../assets/project4.png'
import project5 from '../assets/project5.png'
import project6 from '../assets/project6.png'

const Projects = ({ darkMode }) => {
    const projects = [
        {
            id: 1,
            title: 'E-Commerce Marketo',
            desc: 'Marketo is an e-commerce application with features for browsing products, managing cart, and placing orders.',
            image: project1,
            tags: ['React','Tailwind CSS', 'Node', 'Express', 'Mongodb'],
            github:'https://github.com/sanjai2614/Ecommerce_frontend',
            demo:'https://marketo-ecommerce.vercel.app/'
        },
        {
            id: 2,
            title: 'SkyChat',
            desc: 'A real-time chat application that allows users to communicate instantly through a simple and interactive messaging interface.',
            image: project2,
            tags: ['React', 'Tailwind CSS', 'Node', 'Express', 'MongoDB', 'Socket.IO'],
            github:'https://github.com/sanjai2614/skychat-client',
            demo:'https://skychat-app.vercel.app/'
        },
        {
            id: 3,
            title: 'RBAC Admin panel',
            desc: 'An RBAC admin panel with role-based access control, email verification, login authentication, and forgot password functionality.',
            image: project3,
            tags: ['React', 'Tailwind CSS', 'Node', 'Express', 'MongoDB', 'resend'],
            github:'https://github.com/sanjai2614/rbac_client',
            demo:'https://rbac-admin-app.vercel.app/'
        },
        {
            id: 4,
            title: 'Personal Portfolio',
            desc: 'A responsive personal portfolio website built to showcase my personal projects and experience.',
            image: project4,
            tags: ['React', 'Tailwind CSS', 'EmailJS', 'AOS'],
            github:'https://github.com/sanjai2614/Portfolio',
            demo:'https://sanjai-personalportfolio.vercel.app/'
        },
        {
            id: 5,
            title: 'Google Login',
            desc: 'Google authentication integrated using Firebase, allowing users to securely sign in and access the application with their Google account.',
            image: project5,
            tags: ['React', 'Tailwind CSS','firebase'],
            github:'https://github.com/sanjai2614/firebase-google-login',
            demo:'https://firebase-google-login.vercel.app/'
        },
        {
            id: 6,
            title: 'Fake Store',
            desc: 'Fake Store API integrated CRUD application built using Redux Toolkit, with functionality to create, read, update, and delete products.',
            image: project6,
            tags: ['React', 'Tailwind CSS', 'redux'],
            github:'https://github.com/sanjai2614/Fake-store',
            demo:'https://fake-store-api-practice.vercel.app/'
        },
    ]
    
    const allProjects=`https://github.com/sanjai2614?tab=repositories`

    return (
        <section id='projects'
            // style={{ backgroundColor: darkMode ? '#111827' : '#f9fafb' }}
            className='relative py-24'>
            <div className='container mx-auto px-6'>
                <div className='text-center mb-10 ' data-aos='fade-up'>

                    <h2 style={{ color: darkMode ? 'white' : '#1f2937' }}
                        className='text-3xl sm:text-4xl font-bold mb-3'>
                        My <span style={{
                            background: 'linear-gradient(to right,#f97316,#f59e0b)',
                            WebkitBackgroundClip: 'text',
                            backgroundClip: 'text',
                            color: 'transparent'
                        }}>

                            Projects
                        </span>
                    </h2>
                    <p className='max-w-xl mx-auto' style={{ color: darkMode ? '#d1d5db' : '#6b7280' }}>
                        A showcase of my recent work
                    </p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12'>
                    {projects.map((project, index) => (
                        <div key={project.id}
                            style={{
                                background: darkMode
                                    ? 'linear-gradient(to right,#1f2937,#111827)'
                                    : 'linear-gradient(to right,#ffffff,#f9fafb)',
                                borderColor: darkMode ? '#374151' : '#e5e7eb'
                            }}
                            className='group rounded-xl border duration-300 hover:border-orange-500/50 transition-all'
                            data-aos='fade-up'
                            data-aos-delay={index * 100}>
                            <div className='h-36 sm:h-45 overflow-hidden rounded-t-xl'>
                                <img src={project.image} alt={project.title}
                                    className='w-full h-full object-cover sm:object-top group-hover:scale-102 transition-transform duration-500' />
                            </div>
                            <div className='p-4 '>
                                <h3 className='text-lg font-bold mb-2'
                                    style={{ color: darkMode ? 'white' : '#1f2937' }}>
                                    {project.title}
                                </h3>
                                <p className='text-sm mb-3'
                                    style={{ color: darkMode ? '#d1d5db' : '#6b7280' }}>
                                    {project.desc}
                                </p>
                                <div className='flex flex-wrap gap-1.5 mb-4'>
                                    {project.tags.map((tag, idx) => (
                                        <span key={idx}
                                            style={{
                                                backgroundColor: darkMode ? '#374151' : '#f3f4f6',
                                                color: darkMode ? '#d1d5db' : '#4b5563'
                                            }}
                                            className='px-2 py-1 text-xs rounded-full'>
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <div className='flex gap-2'>
                                    {/* Code */}
                                    <a href={project.github} target="_blank" rel="noopener noreferrer"
                                        style={{
                                            backgroundColor: darkMode ? '#374151' : '#f3f4f6',
                                            color: darkMode ? 'white' : '#374151'
                                        }}
                                        className='flex-1 flex items-center justify-center gap-1.5 px-3 py-2 text-sm
                                            rounded-lg hover:opacity-90 transition-colors'
                                        data-aos='zoom-in'
                                        data-aos-delay='300'>
                                        <FaGithub className='text-sm' />
                                        <span>Code</span>
                                    </a>
                                    {/* Demo */}
                                    <a href={project.demo} target="_blank" rel="noopener noreferrer"
                                        style={{ background: 'linear-gradient(to right,#f97316,#f59e0b)' }}
                                        className='flex-1 flex items-center justify-center gap-1.5 px-3 py-2
                                            text-white  text-sm rounded-lg hover:shadow-lg hover:shadow-orange-500/25 transition-all'
                                        data-aos='zoom-in'
                                        data-aos-delay='400'>
                                        <FaExternalLinkAlt className='text-sm' />
                                        <span>Demo</span>
                                    </a>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>

                <div className='text-center mt-10'>
                    <a href={allProjects} target="_blank" rel="noopener noreferrer"
                        style={{ background: 'linear-gradient(to right,#f97316,#f59e0b)' }}
                        className='inline-flex items-center font-semibold gap-2 px-7 py-4
                           text-white  text-sm rounded-full hover:shadow-lg hover:shadow-orange-500/25 transition-all'
                        data-aos='zoom-in'
                        data-aos-delay='400'>
                        <FaGithub />
                        <span>View All Projects</span>
                        <FaExternalLinkAlt className='text-sm' />
                    </a>
                </div>
            </div>

        </section>
    )
}

export default Projects
