import React from 'react';
import { Link } from 'react-router-dom';

const Hotel = ({ trip }) => {
  return (
    <div className="mt-10">
      <h2 className="font-bold text-2xl text-[#1f2937]">🏨 Hotel Recommendations</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
        {trip?.tripData?.hotelOptions?.map((item, index) => (
          <Link
            to={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(item?.hotelName)},${encodeURIComponent(item?.hotelAddress)}`}
            target="_blank"
            rel="noopener noreferrer"
            key={index}
            className="h-full"
          >
            <div className="bg-white shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 rounded-xl overflow-hidden flex flex-col h-full">
              <img
                src="/b2.jpg"
                alt={item?.hotelName}
                className="w-full h-40 object-cover"
              />
              <div className="p-4 flex flex-col gap-2 flex-grow">
                <h2 className="font-semibold text-lg text-[#111827]">{item?.name}</h2>
                <p className="text-sm text-gray-500 flex items-center gap-1">📍 {item?.hotelAddress}</p>
                <p className="text-sm text-gray-600">💰 {item?.pricePerNight}</p>
                <p className="text-sm text-yellow-600">⭐ {item?.rating}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Hotel;
