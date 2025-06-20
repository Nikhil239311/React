import React from 'react';


import shapehand from './assets/shpaehand.png'

export default function Content() {
    return (
        <>
          
            <section className="min-h-screen bg-white text-black px-6 py-12 relative overflow-hidden">
              
                <header className="flex flex-col lg:flex-row justify-between items-center mb-12 gap-6">
                    <h1 className="font-bold text-lg flex items-center gap-2">
                        🌀 ANISH KUMAR SINHA
                    </h1>
                    <nav className="flex gap-6">
                        <a href="#home">Home</a>
                        <a href="#about">About</a>
                        <a href="#resume">Resume</a>
                        <a href="#skills">Skills</a>
                        <a href="#projects">Projects</a>
                        <a href="#contact">Contact</a>
                        <a><span className="theme-icon">🌙</span></a>
                    </nav>
                </header>
                        <button className='but' >Hello !</button>
                <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-12">
                    <div className="max-w-xl">
                       

                        <h2 className="text-4xl font-bold leading-tight mt-6">
                            I’m{' '}
                            <span className="inline-flex items-center gap-1 bg-neutral-800 text-yellow-500 border border-yellow-500 rounded px-2 py-1">
                                <span className="ani">Anish</span>
                                <span>👋</span>
                            </span>
                        </h2>

                        <p className="text-lg mt-4 mb-6">
                            UI/UX Designer, Front-End Developer & Thinker.
                            <p> Based in India.</p>
                        </p>

                        <div className="button-wrapper flex gap-4 mb-6">
                            <button className="custom-button red">Download CV</button>
                            <button className="custom-button black">Get in Touch</button>
                        </div>


                        <div className="anish">

                            <img
                                src="src/assets/Anish.png"
                                alt="Pointing Hand"
                                className="relative z-10 w-32 h-auto"
                            />
                        </div>

                        <div className="flex flex-wrap items-center gap-4 mb-4">
                            <a href="https://www.facebook.com/" className="circle-icon"><i className='bx bxl-facebook'></i></a>
                            <a href="https://www.instagram.com/" className="circle-icon"><i className='bx bxl-instagram'></i></a>
                            <a href="https://x.com/" className="circle-icon"><i className='bx bxl-twitter'></i></a>
                            <a href="https://github.com/" className="circle-icon"><i className='bx bxl-github'></i></a>
                            <a href="https://www.linkedin.com/" className="circle-icon"><i className='bx bxl-linkedin-square'></i></a>
                            <a href="https://telegram.org/" className="circle-icon"><i className='bx bxl-telegram'></i></a>
                            <a href="https://www.snapchat.com/" className="circle-icon"><i className='bx bxl-snapchat'></i></a>

                        </div>
                    </div>

                </div>


                <h6 className='mail1'>sinhaanishkumar@outlook.com  | </h6>
                <br></br><br></br>




                <header className="flex flex-col lg:flex-row justify-between items-center mb-12 gap-6">

                    <h1 className="font-bold text-lg flex items-center gap-2">
                        🌀 ANISH KUMAR SINHA
                    </h1>
                    <nav className="flex gap-6">
                        <a href="#home">Home</a>
                        <a href="#about">About</a>
                        <a href="#resume">Resume</a>
                        <a href="#skills">Skills</a>
                        <a href="#projects">Projects</a>
                        <a href="#contact">Contact</a>
                        <a><span className="theme-icon">🌙</span></a>
                    </nav>
                </header>

                <div className="relative w-full min-h-[400px] px-6 py-4">
                    <div className="image-stack z-10">
                        <img src={shapehand} alt="Shape Overlay" className="base-image w-[300px]" />
                    </div>

                    <div className="flex flex-wrap items-center gap-4 mb-4">
                        <a href="https://www.facebook.com/" className="circle-icon"><i className='bx bxl-facebook'></i></a>
                        <a href="https://www.instagram.com/" className="circle-icon"><i className='bx bxl-instagram'></i></a>
                        <a href="https://x.com/" className="circle-icon"><i className='bx bxl-twitter'></i></a>
                        <a href="https://github.com/" className="circle-icon"><i className='bx bxl-github'></i></a>
                        <a href="https://www.linkedin.com/" className="circle-icon"><i className='bx bxl-linkedin-square'></i></a>
                        <a href="https://telegram.org/" className="circle-icon"><i className='bx bxl-telegram'></i></a>
                        <a href="https://www.snapchat.com/" className="circle-icon"><i className='bx bxl-snapchat'></i></a>
                    </div>



                </div>

            </section>
            <div className="yellow1">
                <img src="src/assets/yellow1.png" alt="Shape Overlay" class="imgyello1" />
            </div>
            <div className="para">

                <h3 className="parah3">
                    <span className="big-letter">T</span>his is it. :)  &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; ____________________________________________________________________

                </h3>
                <p className="text-sm leading-relaxed text-gray-700 mb-2">
                    Anish Kr. Sinha is an Indian UI/UX Designer & Front End Developer with a passion for designing beautiful and functional user experiences...
                </p>

                <p className="text-sm leading-relaxed text-gray-700 mb-2">
                    He holds a Bachelor’s degree in Computer Applications and has designed websites for small businesses, events, and nonprofits.
                </p>

                <p className="text-sm leading-relaxed text-gray-700 mb-2">
                    His interests also include branding, print design, and 3D floor plans.
                </p>

                <p className="text-sm leading-relaxed text-gray-700">
                    When not designing, he's watching series, sketching, or exploring YouTube tutorials.
                </p>

                <h6 className='mail'>sinhaanishkumar@outlook.com  | </h6>
            </div> <h5>__________________________________________________________</h5>
            <div class="yellow">
                <img src="src/assets/yellow.png" alt="Shape Overlay" class="imgyello" />
            </div>

            <div class="grey">
                <img src="src/assets/greyshape.png" alt="Shape Overlay" class="imggrey" />
            </div>

        </>
    );
}
