import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div className="relative w-full h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80')" }}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Content */}
      <motion.div
        className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6 sm:px-10 md:px-20"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          className="text-white text-3xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-6 drop-shadow-lg"
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.2 }}
        >
          <span className="text-[#ff7f50]">Discover Your Next Adventure with AI:</span>
          <br />
          Personalized Itineraries at Your Fingertips
        </motion.h1>

        <p className="text-gray-200 text-md sm:text-lg max-w-2xl mb-10 drop-shadow-md">
          AI-powered travel planning tailored to your dream destination. Start exploring today!
        </p>

        <Link to="/create-trip">
          <motion.button
            className="bg-[#ff7f50] hover:bg-[#ff5722] text-white text-lg font-semibold px-8 py-3 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started — It's Free!
          </motion.button>
        </Link>
      </motion.div>
    </div>
  );
};

export default Hero;
