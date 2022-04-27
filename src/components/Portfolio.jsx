import React from 'react'
import jamy from '../assets/jamy.png'
import daily from '../assets/dailyPlanner.png'
import notes from '../assets/notes.png'
import techblog from '../assets/techblog.png'
import weather from '../assets/weather.png'
import teamProfile from '../assets/teamProfile.png'

const Portfolio = () => {
  return (
    <section name='portfolio' className='w-full md:h-screen text-gray-300 bg-[#0b1a31]'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-orange-500'>Projects</p>
                <p className='py-5'>Check out some of my recent work</p>
            </div>

            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                {/* portfolio item start */}
                <div style={{backgroundImage: `url(${jamy})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto img-div'>

                    <div className='opacity-0 group-hover:opacity-100'>
                        <h2 className='font-bold text-white'>JAMY Games - </h2>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                        Full Stack App
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://jamy-game-store.herokuapp.com/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="https://github.com/Mohamed7Aden/JAMY-Games">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                {/* portfolio item end */}
                {/* portfolio item start */}
                <div style={{backgroundImage: `url(${notes})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto img-div'>

                    <div className='opacity-0 group-hover:opacity-100'>
                    <h2 className='font-bold text-white'>Note Taker - </h2>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                        Full Stack App
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://lit-cliffs-81613.herokuapp.com/" target='_blank'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="https://github.com/aden-abdirahman/Note-Taker" target='_blank'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                {/* portfolio item end */}
                {/* portfolio item start */}
                <div style={{backgroundImage: `url(${techblog})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto img-div'>

                    <div className='opacity-0 group-hover:opacity-100'>
                    <h2 className='font-bold text-white'>Tech Blog - </h2>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                        Full Stack App
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://frozen-sea-39956.herokuapp.com/" target='_blank'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="https://github.com/aden-abdirahman/Tech-Blog" target='_blank'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                {/* portfolio item end */}
                {/* portfolio item start */}
                <div style={{backgroundImage: `url(${teamProfile})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto img-div'>

                    <div className='opacity-0 group-hover:opacity-100'>
                    <h2 className='font-bold text-white'>Team Profile Builder - </h2>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                        Full Stack App
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://drive.google.com/file/d/1QQfrXAWq_B3dqKQLaStCZkdwjXvQS1aq/view?usp=sharing" target='_blank'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Video Demo</button>
                            </a>
                            <a href="https://github.com/aden-abdirahman/Team-Profile-Generator" target='_blank'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                {/* portfolio item end */}
                {/* portfolio item start */}
                <div style={{backgroundImage: `url(${daily})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto img-div'>

                    <div className='opacity-0 group-hover:opacity-100'>
                    <h2 className='font-bold text-white'>Daily Planner - </h2>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                        Front End Web-App
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://aden-abdirahman.github.io/Work-Day-Scheduler/" target='_blank'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="https://github.com/aden-abdirahman/Work-Day-Scheduler" target='_blank'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                {/* portfolio item end */}
                {/* portfolio item start */}
                <div style={{backgroundImage: `url(${weather})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto img-div'>

                    <div className='opacity-0 group-hover:opacity-100'>
                    <h2 className='font-bold text-white'>Weather App - </h2>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                        Front End Web-App
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://aden-abdirahman.github.io/Weather-Dashboard/" target='_blank'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="https://github.com/aden-abdirahman/Weather-Dashboard" target='_blank'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                {/* portfolio item end */}
            </div>
        </div>

    </section>
  )
}

export default Portfolio