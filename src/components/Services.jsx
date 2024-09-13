import React from 'react';
import services from '../../public/services';

const Services = () => {
    return (
        <div className="md:px-10 px-7 mt-12" id="services">
            <h1 className="text-pink-600 font-semibold text-3xl mt-5">My Services</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-7">
                {services.map((service) => (
                    <div 
                        key={service.id} 
                        className="bg-[#202023] border border-pink-600 hover:bg-pink-600 flex flex-col items-center justify-center p-5 shadow-sm transition-all duration-500 hover:text-black text-white"
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
