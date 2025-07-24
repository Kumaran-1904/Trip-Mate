import React from 'react';
import { Link } from 'react-router-dom';

const PlaceCarditem = ({ place }) => {
  if (!place || !place.placeName) return null;

  return (
    <Link
      to={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(place.placeName)}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="shadow-md border rounded-xl p-4 flex gap-5 hover:scale-[1.03] transition-all duration-300 hover:shadow-lg cursor-pointer bg-white">
        {/* Image Section */}
        {place.placeImageUrl ? (
          <img
            src="/b4.jpg"
            alt={place.placeName}
            className="w-[130px] h-[130px] rounded-xl object-cover"
            referrerPolicy="no-referrer"
          />
        ) : (
          <div className="w-[130px] h-[130px] rounded-xl bg-gray-200 flex items-center justify-center text-sm text-gray-600">
            No Image
          </div>
        )}

        {/* Info Section */}
        <div className="flex flex-col justify-between">
          <h2 className="font-bold text-lg text-[#1f2937]">{place.placeName}</h2>
          <p className="text-sm text-gray-500 mt-1">{place.placeDetails}</p>

          {place.ticketPricing && (
            <h2 className="mt-2 text-sm text-green-600 font-medium">💰 {place.ticketPricing}</h2>
          )}
          {place.rating && (
            <h2 className="text-sm text-yellow-600 mt-1">⭐ {place.rating}</h2>
          )}
        </div>
      </div>
    </Link>
  );
};

export default PlaceCarditem;
