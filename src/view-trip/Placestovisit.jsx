import React from 'react';
import PlaceCarditem from './PlaceCarditem';

const Placestovisit = ({ trip }) => {
  const itinerary = trip?.tripData?.itinerary;

  if (!itinerary || !itinerary.day1?.places) return null;

  const dayData = itinerary.day1;

  return (
    <div className="mt-10">
      <h2 className="font-bold text-2xl text-[#1f2937]">🌟 Top 6 Places to Visit</h2>
      <p className="text-sm text-gray-500 mb-6">
        🕐 Best Time to Visit: <span className="font-medium text-[#1d4ed8]">{dayData?.bestTimeToVisit}</span>
      </p>

      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2">
        {dayData?.places?.map((place, index) => (
          <PlaceCarditem key={index} place={place} />
        ))}
      </div>
    </div>
  );
};

export default Placestovisit;
