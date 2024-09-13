import React from 'react';
import services from '../services'; // Adjust the path according to your folder structure

const Services = () => {
    return (
        <div className="md:px-10 px-7 mt-12" id="services">
            <h1 className="text-pink-600 font-semibold text-3xl mt-5">My Services</h1>
            <div className="flex flex-col md:flex-row flex-wrap justify-between my-7">
                {services.map((service) => (
                    <div 
                        key={service.id} 
                        className="md:w-[256px] md:h-[254px] bg-[#202023] border border-pink-600 hover:bg-pink-600 flex flex-col items-center justify-center p-5 shadow-sm transition-all duration-500 hover:text-black text-white m-3"
                    >
                        <img src={service.image} alt={service.name} className="w-12 h-12 mb-4" />
                        <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
                        <p className="text-sm text-center">{service.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Services;
