import React from 'react'

const Contact = () => {
  return (
    <section name='contact' className='w-full h-screen bg-[#0b1a31] flex justify-center items-center p-4'>

        <form method='POST' action="https://getform.io/f/e2255267-7c42-4907-87f7-5ff617211f6b" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-orange-500 text-gray-300'>Contact Me</p>
                <p></p>
            </div>
            <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' />
            <textarea className='bg-[#ccd6f6] p-2' name="message" rows="10"placeholder='Message'></textarea>
            <button className='text-white border-2 hover:bg-orange-500 hover:border-orange-500 px-4 py-3 my-8 mx-auto flex items-center'>Hire Me</button>
        </form>

    </section>
  )
}

export default Contact