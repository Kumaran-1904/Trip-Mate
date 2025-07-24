import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Index from './create-trip/Index.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Header from './components/custom/Header.jsx';
import { GoogleOAuthProvider } from '@react-oauth/google';
import Viewtrip from './view-trip/Index1.jsx'
import Mytrip from './my-trips/Mytrip.jsx';
const router=createBrowserRouter([
  {
    path:'/',
  element:<App />
  },
  {
    path:'/create-trip',
    element:<Index />
  },
  {
    path:'/view-trip/:tripId',
    element:<Viewtrip />
  },
  {
    path:'/my-trips',
    element:<Mytrip />
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_AUTH_CLIENT_ID}>
    <Header/>
    <RouterProvider router={router}/>
    </GoogleOAuthProvider>
  </StrictMode>,
)
