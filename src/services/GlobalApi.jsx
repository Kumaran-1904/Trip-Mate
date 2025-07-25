import axios from "axios"

const Base_URL='https://places.googleapis.com/v1/places:searchText'

const config={
    headers:{
        'Content-Type':'Application/json',
        'X-Goog-Api-Key':import.meta.env.VITE_GOOGLE_PLACE_API_KEY,
        'X-Goog-FieldMask': 'places.photos,places.displayName,places.id'
    }
}

export const GetPlaceDetails=(data)=>axios.post(Base_URL,data,config)