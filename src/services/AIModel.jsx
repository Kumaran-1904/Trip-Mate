// // To run this code you need to install the following dependencies:
// // npm install @google/genai mime
// // npm install -D @types/node

// import { GoogleGenAI } from "@google/genai"

// async function main() {
//   const ai = new GoogleGenAI({
//     apiKey: import.meta.env.VITE_GEMINI_API_KEY
//   })
//   const tools = [
//     {
//       googleSearch: {}
//     }
//   ]
//   const config = {
//     thinkingConfig: {
//       thinkingBudget: -1
//     },
//     tools,
//     responseMimeType: "application/json"
//   }
//   const model = "gemini-2.5-flash"
//   const chatSession = model.startChat();
//   const contents = [
//     {
//       role: "user",
//       parts: [
//         {
//           text: `Generate Travel Plan for Location: Las Vegas, for 3 Days for Couple with a Cheap budget. Give me a Hotels options list with HotelName, Hotel address, Price, hotel image url, geo coordinates, rating, descriptions and suggest itinerary with placeName, Place Details, Place Image Url, Geo Coordinates, ticket Pricing, rating. Time travel each of the location for 3 days with each day plan with best time to visit in JSON format.`
//         }
//       ]
//     },
//     {
//       role: "model",
//       parts: [
//         {
//           text: `**Drafting a Vegas Itinerary**

// I'm currently working on crafting a budget-friendly 3-day Las Vegas itinerary for a couple. I'm focusing on finding affordable hotel options, detailed descriptions, and creating a fun itinerary. My priority is to include details on attractions, pricing, geo-coordinates, and captivating images.


// **Developing Search Strategies**

// I've refined my approach to searching for budget-friendly Las Vegas options. Now, I'm focusing on "cheap hotels Las Vegas couple," "affordable hotels Las Vegas Strip," and exploring price-specific queries like "hotels Las Vegas under $100." For the itinerary, I'll prioritize "free things to do Las Vegas couple" and "cheap attractions."  I've laid out detailed search queries for both hotels and activities.


// **Refining Hotel Queries**

// I'm now focusing on refining hotel search queries.  I've adjusted the searches to include phrases like "cheap hotels Las Vegas couple" and price-specific terms. My goal is to find options under $100 per night, focusing on affordable hotels on and off the Strip. I'll be gathering details like addresses, images, and descriptions, to provide comprehensive choices.


// **Pinpointing Promising Hotels**

// I've got a decent list of cheap hotels. The next steps are to narrow the list, gather key details like addresses, price points, reviews, and descriptions. I'll need to locate image URLs and pinpoint their geographical coordinates, too.


// **Prioritizing Hotel Options**

// I've selected some promising candidates based on budget and reviews: The STRAT, Luxor, Flamingo, The LINQ, and Horseshoe. I'll focus on gathering detailed data for three or four of these options. After that, I will move on to generating an itinerary, considering free and low-cost couple-friendly activities.


// **Expanding the Hotel Focus**

// I've got a selection of cheap hotels I'm now focusing on: The STRAT, Luxor, Flamingo, The LINQ, and Horseshoe. I'll meticulously compile details for a concise shortlist of 3-4 hotels. After that, I'll move on to crafting an itinerary centered around free or low-cost activities perfect for couples. I've begun brainstorming some day trip possibilities!


// **Compiling Hotel & Itinerary Details**

// I've selected hotels and crafted a preliminary itinerary. Now, I'm gathering specific details like addresses, prices, and reviews for the STRAT, Luxor, Flamingo, The LINQ, and Horseshoe. I'll also locate image URLs and pinpoint their locations. I'll then finalize and clarify the itinerary details.


// `
//         },
//         {
//           text: `Here's a 3-day travel plan for a couple visiting Las Vegas on a budget, presented in JSON format. This plan focuses on affordable hotel options and mostly free or low-cost activities, allowing you to experience the city without breaking the bank.

// \`\`\`json
// {
//   "Las Vegas Travel Plan": {
//     "Budget": "Cheap",
//     "Target Audience": "Couple",
//     "Duration": "3 Days",
//     "Hotels Options": [
//       {
//         "HotelName": "The STRAT Hotel, Casino & Tower",
//         "HotelAddress": "2000 Las Vegas Blvd S, Las Vegas, NV 89104, United States",
//         "PriceRange": "$50 - $150 per night (plus resort fees, subject to change)",
//         "HotelImageUrl": "https://www.google.com/search?q=The+STRAT+Hotel+Casino+%26+Tower+Las+Vegas+images&tbm=isch",
//         "GeoCoordinates": {
//           "latitude": 36.147386,
//           "longitude": -115.155389
//         },
//         "Rating": "7.3/10 (Very good)",
//         "Description": "The STRAT Hotel, Casino & Tower is a landmark on the northern end of the Las Vegas Strip, known for its iconic 1,149-foot observation tower. It offers a casino, multiple dining options, a resort-style pool, and thrilling rides at the top of the tower. It often provides good value for a Strip-adjacent location. [3, 17, 18, 19, 32]"
//       },
//       {
//         "HotelName": "Luxor Hotel & Casino",
//         "HotelAddress": "3900 S Las Vegas Blvd, Las Vegas, NV 89119, United States",
//         "PriceRange": "$40 - $120 per night (plus resort fees, subject to change)",
//         "HotelImageUrl": "https://www.google.com/search?q=Luxor+Hotel+Casino+Las+Vegas+images&tbm=isch",
//         "GeoCoordinates": {
//           "latitude": 36.09556,
//           "longitude": -115.17583
//         },
//         "Rating": "7.5/10 (Good)",
//         "Description": "The Luxor Hotel and Casino stands out with its distinctive pyramid shape and Egyptian theme on the southern end of the Las Vegas Strip. It features a large casino, multiple pools, and various entertainment options like the Blue Man Group and the 'Titanic: The Artifact Exhibition'. It's often a more budget-friendly option while still being on the Strip. [5, 20, 21, 27, 33]"
//       },
//       {
//         "HotelName": "Flamingo Las Vegas Hotel & Casino",
//         "HotelAddress": "3555 S Las Vegas Blvd, Las Vegas, NV 89109, United States",
//         "PriceRange": "$60 - $180 per night (plus resort fees, subject to change)",
//         "HotelImageUrl": "https://www.google.com/search?q=Flamingo+Las+Vegas+Hotel+Casino+images&tbm=isch",
//         "GeoCoordinates": {
//           "latitude": 36.11611,
//           "longitude": -115.17056
//         },
//         "Rating": "7.6/10 (Very good)",
//         "Description": "The Flamingo Las Vegas is a historic and centrally located hotel on the Las Vegas Strip. It offers a vibrant atmosphere, a large pool area (Go Pool Dayclub is 21+), and a wildlife habitat with exotic birds and fish, providing a unique escape amidst the Strip's energy. Its prime location makes it convenient for exploring. [15, 28, 29, 30]"
//       }
//     ],
//     "Itinerary": {
//       "Day 1": {
//         "Theme": "Arrival & Central Strip Wonders",
//         "Activities": [
//           {
//             "PlaceName": "Hotel Check-in & Relaxation",
//             "PlaceDetails": "Settle into your chosen hotel, unpack, and take some time to relax by the pool or explore the hotel's amenities. This helps you acclimate before hitting the Strip.",
//             "PlaceImageUrl": "N/A (hotel specific)",
//             "GeoCoordinates": "N/A (hotel specific)",
//             "TicketPricing": "N/A (included with hotel stay/resort fee)",
//             "Rating": "N/A",
//             "BestTimeToVisit": "Afternoon (check-in time)"
//           },
//           {
//             "PlaceName": "Fountains of Bellagio",
//             "PlaceDetails": "Witness the iconic choreographed water show set to music in front of the Bellagio hotel. Shows run every 30 minutes in the afternoon and every 15 minutes in the evening.",
//             "PlaceImageUrl": "https://www.google.com/search?q=Fountains+of+Bellagio+images&tbm=isch",
//             "GeoCoordinates": {
//               "latitude": 36.1125,
//               "longitude": -115.1762
//             },
//             "TicketPricing": "Free",
//             "Rating": "4.8/5",
//             "BestTimeToVisit": "Evening (for the best visual experience with lights)"
//           },
//           {
//             "PlaceName": "Bellagio Conservatory & Botanical Garden",
//             "PlaceDetails": "Explore the stunning, ever-changing seasonal floral displays inside the Bellagio hotel. The themes change five times a year, offering a fresh experience with each visit.",
//             "PlaceImageUrl": "https://www.google.com/search?q=Bellagio+Conservatory+Botanical+Garden+images&tbm=isch",
//             "GeoCoordinates": {
//               "latitude": 36.1132,
//               "longitude": -115.1769
//             },
//             "TicketPricing": "Free",
//             "Rating": "4.7/5",
//             "BestTimeToVisit": "Late afternoon/early evening (can get crowded)"
//           },
//           {
//             "PlaceName": "Walk the LINQ Promenade",
//             "PlaceDetails": "Stroll down this vibrant outdoor entertainment district featuring shops, restaurants, bars, and street performers. It's a lively area with plenty of photo opportunities.",
//             "PlaceImageUrl": "https://www.google.com/search?q=LINQ+Promenade+Las+Vegas+images&tbm=isch",
//             "GeoCoordinates": {
//               "latitude": 36.1170,
//               "longitude": -115.1717
//             },
//             "TicketPricing": "Free (activities within may have costs)",
//             "Rating": "4.6/5",
//             "BestTimeToVisit": "Evening (for lively atmosphere and lights)"
//           },
//           {
//             "PlaceName": "Fremont Street Experience (Downtown Las Vegas)",
//             "PlaceDetails": "Head downtown for a completely different Las Vegas vibe. Enjoy the Viva Vision light shows on the massive overhead canopy, live music on multiple stages, and street performers. Takes about 15-20 minutes by bus or rideshare from the Strip.",
//             "PlaceImageUrl": "https://www.google.com/search?q=Fremont+Street+Experience+images&tbm=isch",
//             "GeoCoordinates": {
//               "latitude": 36.1706,
//               "longitude": -115.1437
//             },
//             "TicketPricing": "Free (shows and street entertainment)",
//             "Rating": "4.7/5",
//             "BestTimeToVisit": "Evening (shows start after dark)"
//           }
//         ]
//       },
//       "Day 2": {
//         "Theme": "Nature, Art & Local Charm",
//         "Activities": [
//           {
//             "PlaceName": "Flamingo Wildlife Habitat",
//             "PlaceDetails": "Discover a peaceful oasis at the Flamingo hotel, home to Chilean flamingos, exotic birds, turtles, and fish. It's a beautiful, free escape from the bustling Strip.",
//             "PlaceImageUrl": "https://www.google.com/search?q=Flamingo+Wildlife+Habitat+Las+Vegas+images&tbm=isch",
//             "GeoCoordinates": {
//               "latitude": 36.1167,
//               "longitude": -115.1708
//             },
//             "TicketPricing": "Free",
//             "Rating": "4.6/5",
//             "BestTimeToVisit": "Morning (fewer crowds, animals are active)"
//           },
//           {
//             "PlaceName": "Welcome to Fabulous Las Vegas Sign",
//             "PlaceDetails": "Pose for an iconic photo at the famous 'Welcome to Fabulous Las Vegas' sign. Expect a small line, but it moves quickly. Located on the south end of the Strip.",
//             "PlaceImageUrl": "https://www.google.com/search?q=Welcome+to+Fabulous+Las+Vegas+Sign+images&tbm=isch",
//             "GeoCoordinates": {
//               "latitude": 36.0827,
//               "longitude": -115.1717
//             },
//             "TicketPricing": "Free",
//             "Rating": "4.7/5",
//             "BestTimeToVisit": "Morning (before it gets too hot and crowded)"
//           },
//           {
//             "PlaceName": "Seven Magic Mountains",
//             "PlaceDetails": "Drive out to this colorful art installation in the desert, featuring seven towering stacks of brightly painted boulders. It's a unique photo opportunity and a stark contrast to the city.",
//             "PlaceImageUrl": "https://www.google.com/search?q=Seven+Magic+Mountains+images&tbm=isch",
//             "GeoCoordinates": {
//               "latitude": 35.8890,
//               "longitude": -115.2770
//             },
//             "TicketPricing": "Free",
//             "Rating": "4.5/5",
//             "BestTimeToVisit": "Late morning or late afternoon (to avoid midday heat and harsh sun for photos)"
//           },
//           {
//             "PlaceName": "Ethel M Chocolates Factory & Botanical Cactus Garden",
//             "PlaceDetails": "Tour the Ethel M Chocolate Factory (self-guided viewing aisle) and explore one of the world's largest botanical cactus gardens, beautifully lit up in the evenings during the holidays.",
//             "PlaceImageUrl": "https://www.google.com/search?q=Ethel+M+Chocolates+Factory+Botanical+Cactus+Garden+images&tbm=isch",
//             "GeoCoordinates": {
//               "latitude": 36.0460,
//               "longitude": -115.0505
//             },
//             "TicketPricing": "Free",
//             "Rating": "4.5/5",
//             "BestTimeToVisit": "Late afternoon (pleasant for walking in the garden)"
//           },
//           {
//             "PlaceName": "Container Park (Downtown Las Vegas)",
//             "PlaceDetails": "Visit this unique open-air shopping, dining, and entertainment complex made from repurposed shipping containers. Often features free live music and a fun, local vibe.",
//             "PlaceImageUrl": "https://www.www.google.com/search?q=Downtown+Container+Park+Las+Vegas+images&tbm=isch",
//             "GeoCoordinates": {
//               "latitude": 36.1685,
//               "longitude": -115.1408
//             },
//             "TicketPricing": "Free (admission, activities within may have costs)",
//             "Rating": "4.5/5",
//             "BestTimeToVisit": "Evening (lively atmosphere, often live entertainment)"
//           }
//         ]
//       },
//       "Day 3": {
//         "Theme": "Unique & Relaxed Experiences",
//         "Activities": [
//           {
//             "PlaceName": "Pinball Hall of Fame",
//             "PlaceDetails": "Relive your childhood at this non-profit museum featuring the world's largest collection of pinball machines. You can play many of them for a small fee per game.",
//             "PlaceImageUrl": "https://www.google.com/search?q=Pinball+Hall+of+Fame+Las+Vegas+images&tbm=isch",
//             "GeoCoordinates": {
//               "latitude": 36.1017,
//               "longitude": -115.1633
//             },
//             "TicketPricing": "Free admission, games typically $0.25 - $1.00 per play",
//             "Rating": "4.7/5",
//             "BestTimeToVisit": "Morning or early afternoon (less crowded)"
//           },
//           {
//             "PlaceName": "Explore Themed Hotel Lobbies (e.g., Venetian, Paris)",
//             "PlaceDetails": "Wander through the extravagant lobbies and public areas of some of Las Vegas' most famous hotels. The Venetian offers stunning Italian-themed architecture and canals, while Paris Las Vegas boasts a replica Eiffel Tower and Arc de Triomphe.",
//             "PlaceImageUrl": "https://www.google.com/search?q=The+Venetian+Resort+Las+Vegas+lobby+images&tbm=isch AND https://www.google.com/search?q=Paris+Las+Vegas+Hotel+Casino+lobby+images&tbm=isch",
//             "GeoCoordinates": {
//               "The Venetian": {"latitude": 36.1211, "longitude": -115.1706},
//               "Paris Las Vegas": {"latitude": 36.1118, "longitude": -115.1729}
//             },
//             "TicketPricing": "Free (to explore public areas)",
//             "Rating": "4.7/5 (for atmosphere)",
//             "BestTimeToVisit": "Anytime during the day, less crowded in the morning"
//           },
//           {
//             "PlaceName": "Downtown Art District (18b Arts District)",
//             "PlaceDetails": "Discover local art galleries, boutiques, and street art in this revitalized area just south of Fremont Street. Often has free art walks and events, especially on the first Friday of the month.",
//             "PlaceImageUrl": "https://www.google.com/search?q=Las+Vegas+Arts+District+images&tbm=isch",
//             "GeoCoordinates": {
//               "latitude": 36.1593,
//               "longitude": -115.1481
//             },
//             "TicketPricing": "Free (admission to galleries may vary)",
//             "Rating": "4.3/5",
//             "BestTimeToVisit": "Afternoon"
//           },
//           {
//             "PlaceName": "Hotel Pool Relaxation",
//             "PlaceDetails": "Spend your final afternoon enjoying the amenities of your hotel. Lounge by the pool, soak up the sun, and relax before your departure.",
//             "PlaceImageUrl": "N/A (hotel specific)",
//             "GeoCoordinates": "N/A (hotel specific)",
//             "TicketPricing": "N/A (included with resort fee)",
//             "Rating": "N/A",
//             "BestTimeToVisit": "Afternoon"
//           },
//           {
//             "PlaceName": "Departure Preparation",
//             "PlaceDetails": "Pack your bags, check out from the hotel, and head to the airport for your departure, taking with you memories of an exciting yet budget-friendly Las Vegas trip.",
//             "PlaceImageUrl": "N/A",
//             "GeoCoordinates": "N/A",
//             "TicketPricing": "N/A",
//             "Rating": "N/A",
//             "BestTimeToVisit": "Late afternoon/evening (depending on flight)"
//           }
//         ]
//       }
//     }
//   }
// }
// \`\`\``
//         }
//       ]
//     },
//     {
//       role: "user",
//       parts: [
//         {
//           text: `INSERT_INPUT_HERE`
//         }
//       ]
//     }
//   ]

//   const response = await ai.models.generateContentStream({
//     model,
//     config,
//     contents
//   })
//   let fileIndex = 0
//   for await (const chunk of response) {
//      output += chunk.text;
//     console.log(chunk.text)
//   }
//   fs.writeFileSync("travel_plan.json", jsonContent);
//   console.log("\n✅ Travel plan saved to travel_plan.json");
// }

// main()
