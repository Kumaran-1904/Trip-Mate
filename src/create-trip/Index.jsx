import React, { useEffect, useState } from 'react'
import { Input } from "@/components/ui/input"
import { AI_PROMPT, SelectBudgetOptions, SelectTravelsList } from '../constants/options'
import MapboxAutocomplete from '../create-trip/MapboxAutocomplete';
import { Button } from "@/components/ui/button"
import { FcGoogle } from "react-icons/fc";
import { DialogClose } from "@radix-ui/react-dialog";
import { useNavigate } from 'react-router-dom';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { X } from "lucide-react"
import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import { doc, setDoc } from "firebase/firestore";
import { db } from '../services/FirebaseConfig';
import { VscLoading } from "react-icons/vsc";

const Index = () => {
  const [place, setPlace] = useState('');
  const [openDialog, setOpenDialog] = useState(false);
  const [formData, setformData] = useState({});
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleInputchange = (name, value) => {
    setformData(formData => ({
      ...formData,
      [name]: value,
    }))
  }

  const prompt = AI_PROMPT
    .replace("{location}", formData.location)
    .replace("{totalDays}", formData.noOfDays)
    .replace("{traveler}", formData.traveler)
    .replace("{budget}", formData.budget);

  const payload = {
    contents: [{
      parts: [{ text: prompt }]
    }]
  }

  const login = useGoogleLogin({
    onSuccess: (codeResp) => {
      GetUserProfile(codeResp);
      setOpenDialog(false);
    },
    onError: (error) => console.log(error)
  })

  const GetUserProfile = (tokenInfo) => {
    axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${tokenInfo?.access_token}`, {
      headers: {
        Authorization: `Bearer ${tokenInfo?.access_token}`,
        Accept: 'Application/json'
      }
    }).then((resp) => {
      localStorage.setItem('user', JSON.stringify(resp.data));
      setOpenDialog(false);
      OnGenerateTrip();
    })
  }

  const OnGenerateTrip = async () => {
    setLoading(true);
    const user = JSON.parse(localStorage.getItem('user'));

    if (!user || Object.keys(user).length === 0) {
      setLoading(false);
      setOpenDialog(true);
      return;
    }

    if (formData?.noOfDays > 5 || (!formData?.location || !formData?.budget || !formData?.traveler)) {
      alert("Please fill all required fields for trips longer than 5 days!");
      setLoading(false);
      return;
    }

    const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
    try {
      let response = await fetch(apiKey, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await response.json();
      const generatedText = data?.candidates?.[0]?.content?.parts?.[0]?.text || "No output generated.";
      await SaveAiTrip(generatedText);
    } catch (err) {
      console.error("API call failed:", err);
    } finally {
      setLoading(false);
    }
  };

  const SaveAiTrip = async (TripData) => {
    const userData = localStorage.getItem('user');
    if (!userData) return;

    const user = JSON.parse(userData);
    const docId = Date.now().toString();

    const cleanedTripData = TripData.replace(/```json|```/g, '').trim();

    let parsedTripData;
    try {
      parsedTripData = JSON.parse(cleanedTripData);
    } catch (e) {
      parsedTripData = { text: cleanedTripData };
    }

    await setDoc(doc(db, "AiTrip", docId), {
      userSelection: formData,
      tripData: parsedTripData,
      userEmail: user.email,
      id: docId
    });

    navigate('/view-trip/' + docId);
  };

  return (
    <div className="min-h-screen px-5 sm:px-10 md:px-32 lg:px-56 xl:px-72 py-10 bg-gradient-to-br from-[#f8f9fa] via-[#eef2f3] to-[#e0f7fa] text-[#2e2e2e]">
      <h2 className="font-bold text-3xl text-[#1e293b]"> Tell us Your Travel Preferences ✈️</h2>
      <p className="mt-3 text-gray-600 text-xl">
        Just provide some basic information, and Trip Mate will generate a customized itinerary based on your preferences
      </p>

      <div className="mt-14 flex flex-col gap-10">
        {/* Destination */}
        <div>
          <h2 className="text-xl my-3 font-medium">🌍 What is your Dream Destination?</h2>
          <MapboxAutocomplete onSelectPlace={(value) => handleInputchange('location', value)} />
        </div>

        {/* Days */}
        <div>
          <h2 className="text-xl my-3 font-medium">📅 How many days are you planning the trip?</h2>
          <Input
            type="number"
            placeholder="{Ex:3}"
            onChange={(e) => handleInputchange('noOfDays', e.target.value)}
          />
        </div>

        {/* Budget */}
        <div>
          <h2 className="text-xl my-3 font-medium">💰 What is Your Budget?</h2>
          <div className="grid grid-cols-3 gap-5 mt-5">
            {SelectBudgetOptions.map((item, index) => (
              <div key={index}
                onClick={() => handleInputchange('budget', item.title)}
                className={`p-4 border cursor-pointer rounded-lg hover:shadow-lg transition-all duration-300
                ${formData?.budget == item.title ? 'shadow-lg border-black' : ''}`}
              >
                <h2 className='text-4xl'>{item.icon}</h2>
                <h2 className='font-bold text-lg'>{item.title}</h2>
                <h2 className='text-sm text-gray-600'>{item.desc}</h2>
              </div>
            ))}
          </div>
        </div>

        {/* Traveler */}
        <div>
          <h2 className="text-xl my-3 font-medium">👥 Who do you plan on travelling with on your next adventure?</h2>
          <div className="grid grid-cols-3 gap-5 mt-5">
            {SelectTravelsList.map((item, index) => (
              <div key={index}
                onClick={() => handleInputchange('traveler', item.people)}
                className={`p-4 border cursor-pointer rounded-lg hover:shadow-lg transition-all duration-300
                ${formData?.traveler == item.people ? 'shadow-lg border-black' : ''}`}
              >
                <h2 className='text-4xl'>{item.icon}</h2>
                <h2 className='font-bold text-lg'>{item.title}</h2>
                <h2 className='text-sm text-gray-600'>{item.desc}</h2>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Generate Button */}
      <div className="my-10 justify-end flex">
        <Button
          className='cursor-pointer'
          disabled={loading}
          onClick={OnGenerateTrip}
        >
          {loading ? <VscLoading className='h-7 w-7 animate-spin' /> : 'Generate Trip'}
        </Button>
      </div>

      {/* Dialog for Google Login */}
      <Dialog open={openDialog} onOpenChange={setOpenDialog}>
        <DialogContent>
          <DialogClose asChild>
            <button className="absolute top-4 right-4 rounded-sm opacity-70 ring-offset-white transition-opacity hover:opacity-100 focus:outline-none">
              <X className="h-4 w-4" />
              <span className="sr-only">Close</span>
            </button>
          </DialogClose>

          <DialogHeader>
            <DialogTitle>Welcome To Trip Mate</DialogTitle>
            <DialogDescription />
          </DialogHeader>

          <div className="max-w-xl mx-auto bg-white rounded-xl shadow-lg p-4 flex items-center gap-6">
            <img
              src="/Tmlogo.png"
              alt="Logo"
              className="h-28 w-28 object-contain rounded-md"
            />
            <div className="flex flex-col justify-center space-y-2">
              <h2 className="text-xl font-bold text-gray-800">Sign In With Google</h2>
              <p className="text-gray-600">
                Sign in with the app using Google authentication securely
              </p>
              <Button
                onClick={login}
                className="mt-2 flex items-center gap-2 bg-white text-black border shadow-md hover:bg-gray-100"
              >
                <FcGoogle className="text-xl" />
                Sign In with Google
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default Index;
