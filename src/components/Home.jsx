import React from 'react';
import Img from '../assets/me.png'
import img2 from '../assets/me.png'

const Home = () => {
    return (
        <div className='md:px-10 px-7 mt-8 my-14 md:h-screen bg-[#202023]' id='home'>
            <div>
                <div className='flex flex-col md:flex-row items-center justify-between w-full'>
                    {/* text content */}
                    <div className='text-white'>
                        <h6 className='text-3xl mt-12'>Hello, I'm</h6>
                        <h1 className='font-semibold md:text-5xl my-4 text-3xl'>Angel Gurung</h1>
                        <p className='md:w-96'>I am a Fullstack web developer and UI
        designer. I have honed my skills in Web Development, and I have a core understanding
        of advanced UI design principles. Let’s create something amazing together!

</p>
                        <div className='mt-5'>
                            <button className='transition-all duration-500 bg-pink-600 py-2 px-4 rounded text-black hover:bg-black hover:text-white'>
                                About me
                            </button> 
                            <button className='outline py-1.5 px-6 rounded border-none ml-5 text-white bg-transparent hover:bg-pink-600 hover:text-black'>
                                Projects
                            </button>
                        </div>
                    </div>
                    {/* image */}
                    <div className='order-first md:order-last relative md:mt-10 mt-6'>
                        <img src={img2} alt="Angel Gurung" className="md:mb-6" />
                    </div>
                </div>
            </div>
            <div className='h-24 bg-[#181824] w-full mx-auto absolute left-0 hidden md:block'></div>
        </div>
    );
};

export default Home;
