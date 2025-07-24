import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { doc, getDoc } from "firebase/firestore";
import { db } from '../services/FirebaseConfig';
import Infosection from './Infosection';
import Hotel from './Hotel';
import Footer from './Footer';
import Placestovisit from './Placestovisit';
    const Viewtrip = () => {
      const {tripId}=useParams();

      const [trip,setTrip]=useState([]);

      useEffect(()=>{
        tripId && GetTripData();
      },[tripId])

      const GetTripData=async()=>{
        const docRef=doc(db,"AiTrip",tripId);
        const docSnap=await getDoc(docRef);
        if(docSnap.exists()){
          console.log("Document:",docSnap.data());
          setTrip(docSnap.data());
        }
        else{
          console.log("No Such Doucment");
        }
      }

      return (
        <div className='p-10 md:px-20 lg:px-44 xl:px-56'>
          {/* Information Setion */}
          <Infosection trip={trip}/>
          {/* Recommended Hotel */}
          <Hotel trip={trip}/>
          {/* Daily Plan */}
          <Placestovisit trip={trip}/>
          {/* Footer */}
          <Footer />
        </div>
      )
    }

    export default Viewtrip