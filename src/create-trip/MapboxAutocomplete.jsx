import React, { useState } from 'react';

const MAPBOX_API_KEY = "pk.eyJ1Ijoia3VtYXJhbjE5IiwiYSI6ImNtZDY4ZHNkYTA3Ymsya29tbzhrM2dpbzkifQ.UDBz743IHgHyhz5iBqPMZQ"; // replace this

const MapboxAutocomplete = ({ onSelectPlace }) => {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const fetchPlaces = async (value) => {
    const res = await fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
        value
      )}.json?access_token=${MAPBOX_API_KEY}&autocomplete=true&limit=5`
    );
    const data = await res.json();
    setSuggestions(data.features || []);
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    if (value.length > 2) {
      fetchPlaces(value);
    } else {
      setSuggestions([]);
    }
  };

  const handleSelect = (placeName) => {
    setQuery(placeName);
    setSuggestions([]);
    onSelectPlace(placeName);
  };

  return (
    <div className="w-full">
      <input
        type="text"
        placeholder="Enter a place"
        value={query}
        onChange={handleChange}
        className="p-2 w-full border rounded"
      />
      <ul className="mt-2 bg-white shadow rounded max-h-60 overflow-auto">
        {suggestions.map((place) => (
          <li
            key={place.id}
            className="p-2 hover:bg-gray-100 cursor-pointer"
            onClick={() => handleSelect(place.place_name)}
          >
            {place.place_name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MapboxAutocomplete;
