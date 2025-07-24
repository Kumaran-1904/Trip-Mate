export const SelectBudgetOptions = [
  {
    id: 1,
    title: 'Cheap',
    desc: 'Stay conscious of costs',
    icon: '🪙'
  },
  {
    id: 2,
    title: 'Moderate',
    desc: 'Keep cost on the average side',
    icon: '💰'
  },
  {
    id: 3,
    title: 'Luxury',
    desc: 'Enjoy premium experiences',
    icon: '💎'
  }
]

export const SelectTravelsList = [
  {
    id: 1,
    title: 'Just Me',
    desc: 'A solo traveler exploring the world',
    icon: '🧍‍♂️',
    people: '1 Person'
  },
  {
    id: 2,
    title: 'A Couple',
    desc: 'Two travelers in tandem',
    icon: '👫',
    people: '2 People'
  },
  {
    id: 3,
    title: 'Family',
    desc: 'A group of fun-loving adventurers',
    icon: '👨‍👩‍👧‍👦',
    people: '3 to 5 People'
  },
  {
    id: 4,
    title: 'Friends Group',
    desc: 'An adventure with close friends',
    icon: '🧑‍🤝‍🧑',
    people: '6 to 10 People'
  },
  {
    id: 5,
    title: 'Corporate',
    desc: 'Team building and business outings',
    icon: '💼',
    people: 'More than 10'
  }
]

// export const AI_PROMPT='Generate Travel Plan for Location: {location}, for {totalDays} Days for {traveler} with a {budget} budget. Give me a Hotels options list with HotelName, Hotel address, Price, hotel image url, geo coordinates, rating, descriptions and suggest itinerary with placeName, Place Details, Place Image Url, Geo Coordinates, ticket Pricing, Time t travel each of the location for {totalDays} days with each day plan with best time to visit in JSON format.'
export const AI_PROMPT = `
I want you to act as a travel planner.

Create a detailed {totalDays}-day travel itinerary for a {traveler} visiting {location} within a budget of {budget}.

🔒 IMPORTANT RULES:
- Return the output STRICTLY as a valid JSON object.
- DO NOT include any markdown (like triple backticks) or explanation text.
- Use the EXACT FIELD NAMES as shown below — do not change or rename them.
- The field names and structure MUST remain consistent for every response.

📌 JSON Format:
{
  "itinerary": {
    "day1": {
      "bestTimeToVisit": "Morning",
      "places": [
        {
          "placeName": "Place 1 Name",
          "placeDetails": "Short description",
          "ticketPricing": "INR 200 per person",
          "rating": 4.5,
          "placeImageUrl": "https://upload.wikimedia.org/.../valid-image.jpg"
        },
        {
          "placeName": "Place 2 Name",
          "placeDetails": "...",
          "ticketPricing": "Free",
          "rating": 4.7,
          "placeImageUrl": "https://upload.wikimedia.org/.../image2.jpg"
        }
        // include total of 6 places exactly
      ]
    }
  },
  "hotelOptions": [
    {
      "name": "Hotel Name",
      "description": "Short description",
      "hotelAddress": "Full Address",
      "pricePerNight": "INR 2500",
      "rating": 4.3,
      "geoCoordinates": {
        "latitude": 00.000,
        "longitude": 00.000
      }
    }
    // include exactly 5 hotel options
  ],
  "placesToVisit": [
    {
      "placeName": "Place A",
      "placeDetails": "Brief description",
      "ticketPricing": "INR 100 per person",
      "openingTime": "9:00 AM",
      "closingTime": "6:00 PM"
    },
    {
      "placeName": "Place B",
      "placeDetails": "Brief description",
      "ticketPricing": "Free Entry",
      "openingTime": "10:00 AM",
      "closingTime": "5:00 PM"
    }
  ]
}

📸 For each placeImageUrl, return only **real, working image URLs** (e.g., from Wikimedia Commons or Unsplash). These should directly display the image when opened in a browser.

🚫 DO NOT add any explanation, intro, or formatting.
✅ JSON must start with { and end with } only.
✅ Ensure structure and field names are always consistent.
✅ Return exactly 4 hotels and 6 itinerary places with only the requested fields.
`;
