import React, { useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { GetPlaceDetails } from '../services/GlobalApi';

const Infosection = ({ trip }) => {

  useEffect(() => {
    if (trip) GetPlacePhoto();
  }, [trip]);

  const GetPlacePhoto = async () => {
    const data = {
      textQuery: trip?.userSelection?.location
    };
    try {
      const result = await GetPlaceDetails(data);
      console.log(result.data);
    } catch (error) {
      console.error("Error fetching place details:", error);
    }
  };

  return (
    <div className="relative w-full">
      {/* Image with gradient overlay */}
      <div className="relative rounded-xl overflow-hidden h-[300px] sm:h-[360px]">
        <img
          src='/placeholder.jpeg'
          alt="Destination"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
      </div>

      {/* Info section */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mt-6 gap-4">
        <div className="flex flex-col gap-2">
          <h2 className="font-extrabold text-2xl sm:text-3xl text-[#1f2937]">{trip?.userSelection?.location}</h2>

          <div className="flex flex-wrap gap-3 mt-2">
            <span className="px-3 py-1 bg-gray-200 text-gray-600 rounded-full text-sm font-medium flex items-center gap-1">
              🗓️ {trip.userSelection?.noOfDays} Days
            </span>
            <span className="px-3 py-1 bg-gray-200 text-gray-600 rounded-full text-sm font-medium flex items-center gap-1">
              💰 {trip.userSelection?.budget} Budget
            </span>
            <span className="px-3 py-1 bg-gray-200 text-gray-600 rounded-full text-sm font-medium flex items-center gap-1">
              🚀 {trip.userSelection?.traveler} Traveler
            </span>
          </div>
        </div>

        <Button className="bg-[#1d4ed8] hover:bg-[#1e40af] text-white font-medium px-5 py-2 rounded-lg shadow transition-all duration-300">
          Share ➤
        </Button>
      </div>
    </div>
  );
};

export default Infosection;
