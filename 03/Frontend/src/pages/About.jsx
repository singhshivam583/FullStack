import React from 'react'

function About() {
  return (
    <section className='relative flex items-top justify-center min-h-[700px] bg-gray-50 sm:items-center sm:pt-0'>
        <div className='max-w-6xl mx-auto sm:px-6 lg:px-8 sm:text-xl'>
            <div className='shadow grid grid-cols-1 md:grid-cols-2 p-6 gap-6 rounded-lg  bg-white'>
                <div className='flex flex-col justify-center items-center border rounded-lg p-4'>
                    <div className='flex justify-center items-center p-4 w-56 bg-gray-100 rounded-[50%]'>
                      <img className='rounded-[50%]' src="https://avatars.githubusercontent.com/u/5479305?v=
                      4" alt="Profile Picture" />
                    </div>
                    <p className='pt-4'>
                      Hi, I am a software engineer specializing in building web applications with JavaScript and Node.js.
                    </p>
                </div>
                <div className='w-auto'>
                    <div className='flex flex-col gap-6'>
                      <div className='flex justify-between p-4 border'>
                        <div className=''>
                          <h3>Shivam Singh</h3>
                          <h6>Web Developer</h6>
                          <p>RANKING: <span> 1/10 </span></p>
                        </div>
                        <div>
                            <button className='bg-gray-100 rounded-full px-2 '>
                              Edit Profile
                            </button>
                        </div>
                      </div>
                      <div className='border'>
                          <ul>
                            <li>
                              <a>About</a>
                            </li>
                          </ul>
                      </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About