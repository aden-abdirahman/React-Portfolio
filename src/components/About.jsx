import React from 'react'

const About = () => {
  return (
    <section name='about' className='w-full h-screen bg-[#0b1a31] text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-orange-500'>About</p>
                </div>
                <div></div>
                </div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                    <div className='sm:text-right text-4xl font-bold'>
                        <p>Education</p>
                    </div>
                    <div>
                        <ul>
                            <li className='pb-4'><span className='font-bold'>Sauk Rapids/Rice High School -</span><br />
Located in Sauk Rapids, Minnesota, this school gave the skills i need to excell. The robotics and media courses taught here were my first introduction to the world of tech.</li>
                            <li className='pb-4'><span className='font-bold'>Ohio State University - Software Engineering Program -</span><br />A full-time immersive program that gives you the tools necessary to enter the competitive world of softwafe development. The technologies taught in this program are cutting-edge and up to date. I gained the most in-demand skills in the field and experience working on both front end and back end technologies.

                            </li>
                        </ul>
                    </div>
                </div>
        </div>

    </section>
  )
}

export default About