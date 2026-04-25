import about from '../assets/about.png'

const About = ({darkMode}) => {
  return (
    <section id="about" className={`min-h-screen overflow-hidden flex items-center justify-center pt-24 sm:pt-14 px-4 sm:px-6`}>

        <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center lg:mt-8">

            <figure
            data-aos='fade-up'
            data-aos-delay='300'
            className="flex flex-wrap justify-center gap-4 relative order-2 lg:order-1">
                <div className="relative w-72 h-72 lg:w-96 lg:h-96">
                    {/* image */}
                    <div className="absolute -inset-4 lg:-inset-15 bg-linear-to-l from-[#f97316] via-[#fb923c] to-[#f59e0b]
                    rotate-12 star-shape z-0"
                    data-aos='zoom-in'
                    data-aos-delay='600'>
                        </div>
                        <img 
                        src={about} alt="About Image" 
                        className='absolute inset-0 w-full h-full object-cover z-10 transition-all duration-300'
                        data-aos='zoom-in'
                        data-aos-delay='400'/>
                </div>
            </figure>

            <article
            data-aos='fade-left'
            data-aos-delay='300'
            className='text-center lg:text-left relative order-1 lg:order-2'>
                <header>
                    <h1 className='text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6
                    text-transparent bg-linear-to-r from-orange-400 to-orange-600 bg-clip-text'
                    data-aos='fade-up'
                    data-aos-delay='400'>
                        About Me
                    </h1>
                </header>
                <p className={`text-sm sm:text-base lg:text-lg mb-6 sm:mb-8 leading-relaxed
                    bg-linear-to-r from-orange-900/10 to-orange-900/5 p-4 sm:p-6 rounded-xl sm:rounded-2xl backdrop-blur-sm
                    ${darkMode?'text-gray-300':'text-gray-700'}`}
                    data-aos='fade-up'
                    data-aos-delay='500'>
                    I’m Sanjai, a MERN stack developer passionate about building modern and responsive web applications. I work with React, Node.js, Express, and MongoDB, along with Tailwind CSS and Bootstrap to create clean, user-friendly, efficient, and scalable interfaces.

I also have intermediate knowledge in Next.js, Python, and Docker, helping me build scalable applications and improve my development workflow.

                </p>
                {/* Experience */}
                <div className='flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-6 lg:gap-8 mb-6 sm:mb-8'>
                    <div className='text-center'
                    data-aos='zoom-in'
                    data-aos-delay='600'>
                        <div className='text-2xl sm:text-3xl lg:text-4xl font-bold text-orange-400'>
                            0 +
                            </div>
                        <div className={`text-xs sm:text-sm lg:text-base
                            ${darkMode?'text-gray-300':'text-gray-600'}`}>
                                Years Experience
                        </div>
                    </div>
                    {/* Project */}
                    <div className='text-center'
                    data-aos='zoom-in'
                    data-aos-delay='700'>
                        <div className='text-2xl sm:text-3xl lg:text-4xl font-bold text-orange-400'>
                            25 +
                            </div>
                        <div className={`text-xs sm:text-sm lg:text-base
                            ${darkMode?'text-gray-300':'text-gray-600'}`}>
                                Projects Completed
                        </div>
                    </div>
                    {/* Technologies */}
                    <div className='text-center'
                    data-aos='zoom-in'
                    data-aos-delay='700'>
                        <div className='text-2xl sm:text-3xl lg:text-4xl font-bold text-orange-400'>
                            8 +
                            </div>
                        <div className={`text-xs sm:text-sm lg:text-base
                            ${darkMode?'text-gray-300':'text-gray-600'}`}>
                                Technologies
                        </div>
                    </div>
                    <a href="#skills">
                     <button className={`w-full sm:w-auto border-2 border-orange-500 inline-flex items-center 
                         justify-center px-2 py-3 sm:px-6 hover:shadow-[0_0_40px_rgb(255,165,0,0.7)]
                         rounded-full text-base sm:text-lg font-semibold transition-all 
                         duration-300 transform
                         ${darkMode?'text-white bg-orange-500/10':'text-gray-800 bg-white/90'}`}
                         data-aos='fade-up'
                         data-aos-delay='800'>
                             Learn More
                         </button>
                    </a>
                </div>

            </article>

        </div>
      
    </section>
  )
}

export default About
