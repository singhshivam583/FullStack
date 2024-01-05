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
                    <p className='text-base pt-4'>
                      Hi, I am a software engineer specializing in building web applications with JavaScript and Node.js.
                    </p>
                </div>
                <div className='w-auto'>
                    <div className='flex flex-col gap-6'>
                      <div className='flex justify-between p-4 border rounded-lg'>
                        <div className='flex flex-col'>
                          <h3 className='flex item-start font-bold '>Shivam Singh</h3>
                          <h6 className='flex item-start font-semibold text-orange-700 text-[1rem]'>Web Developer</h6>
                          <p className='flex item-start font-semibold text-[1rem]'>Ranking :&nbsp;<span className=' text-orange-700'> 1/10 </span></p>
                        </div>
                        <div>
                            <button className=' text-base bg-gray-100 rounded-full px-2 border-2 hover:border-orange-700 '>
                              Edit Profile
                            </button>
                        </div>
                      </div>
                      <div className=' text-base border rounded-lg'>
                          <div>
                            <a className='font-bold hover:text-orange-700 hover:underline'>About</a>
                          </div>
                          <div className=' border-t py-4'>
                            <div className='flex px-6 justify-between'>
                              <div>
                                <label>User ID :</label>
                              </div>
                              <div className=' text-orange-700'>
                                <p>1234567890</p>
                              </div>
                            </div>
                            <div className='flex px-6 justify-between'>
                              <div>
                                <label>Name :</label>
                              </div>
                              <div className=' text-orange-700'>
                                <p>1234567890</p>
                              </div>
                            </div>
                            <div className='flex px-6 justify-between'>
                              <div>
                                <label>Email :</label>
                              </div>
                              <div className=' text-orange-700'>
                                <p>1234567890</p>
                              </div>
                            </div>
                            <div className='flex px-6 justify-between'>
                              <div>
                                <label>Phone :</label>
                              </div>
                              <div className=' text-orange-700'>
                                <p>1234567890</p>
                              </div>
                            </div>
                            <div className='flex px-6 justify-between'>
                              <div>
                                <label>Profession :</label>
                              </div>
                              <div className=' text-orange-700'>
                                <p>1234567890</p>
                              </div>
                            </div>
                          </div>
                      </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About