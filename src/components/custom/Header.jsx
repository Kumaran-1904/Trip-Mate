import React, { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import { useGoogleLogin, googleLogout } from '@react-oauth/google';
import axios from 'axios';
import { FcGoogle } from "react-icons/fc";
import { X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import {
  Popover,
  PopoverTrigger,
  PopoverContent
} from "@/components/ui/popover";

const Header = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));

  useEffect(() => {
    // console.log("User Info:", user);
  }, [user]);

  const login = useGoogleLogin({
    onSuccess: (tokenResponse) => {
      getUserProfile(tokenResponse);
    },
    onError: (error) => console.error("Login Failed:", error)
  });

  const getUserProfile = (tokenInfo) => {
    axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${tokenInfo?.access_token}`, {
      headers: {
        Authorization: `Bearer ${tokenInfo?.access_token}`,
        Accept: 'application/json'
      }
    }).then((res) => {
      localStorage.setItem('user', JSON.stringify(res.data));
      setUser(res.data);
      setOpenDialog(false);
    }).catch(err => {
      console.error("Profile Fetch Error:", err);
    });
  };

  const handleLogout = () => {
    googleLogout();
    localStorage.clear();
    setUser(null);
    window.location.reload();
  };

  return (
    <header className="bg-gradient-to-b from-[#f8f9fa] via-[#eef2f3] to-[#e0f7fa] shadow-md">
      <div className="flex flex-wrap items-center justify-between px-4 py-3 text-[#1f2937]">
        {/* Logo */}
        <div className="w-[5%] min-w-[50px]">
          <img
            src="/Tmlogo.png"
            alt="Logo"
            className="w-14 h-14 rounded-full object-cover"
          />
        </div>

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl font-bold flex-1 text-center sm:text-left">
          <span className="text-[#ff5722]">Trip</span>
          <span className="text-black"> Mate</span>
        </h1>

        {/* User Section */}
        {user ? (
          <div className="flex items-center gap-5">
            <a href='/my-trips'>
              <Button className="rounded-full text-sm sm:text-base px-4 py-2 bg-[#1f2937] hover:bg-[#111827] text-white">
                My Trips
              </Button>
            </a>
            <Popover>
              <PopoverTrigger>
                <img
                  src={user?.picture}
                  className="h-[35px] w-[35px] rounded-full"
                  alt="User"
                />
              </PopoverTrigger>
              <PopoverContent>
                <h2
                  className="cursor-pointer font-medium text-sm text-red-600 hover:underline"
                  onClick={handleLogout}
                >
                  Logout
                </h2>
              </PopoverContent>
            </Popover>
          </div>
        ) : (
          <div className="mt-2 sm:mt-0 sm:ml-auto">
            <button
              onClick={() => setOpenDialog(true)}
              className="cursor-pointer text-sm sm:text-base w-24 h-9 rounded bg-[#1f2937] text-white font-semibold hover:bg-[#111827] transition"
            >
              Sign In
            </button>
          </div>
        )}
      </div>

      {/* Dialog for Sign In */}
      <Dialog open={openDialog} onOpenChange={setOpenDialog}>
        <DialogContent className="bg-white rounded-xl shadow-2xl">
          <DialogClose asChild>
            <button className="absolute top-4 right-4 rounded-sm opacity-70 hover:opacity-100 focus:outline-none">
              <X className="h-4 w-4" />
              <span className="sr-only">Close</span>
            </button>
          </DialogClose>

          <DialogHeader>
            <DialogTitle className="text-xl font-bold text-[#1f2937]">Welcome To Trip Mate</DialogTitle>
            <DialogDescription />
          </DialogHeader>

          <div className="max-w-xl mx-auto rounded-xl p-4 flex items-center gap-6">
            <img
              src="/Tmlogo.png"
              alt="Logo"
              className="h-28 w-28 object-contain rounded-md"
            />
            <div className="flex flex-col justify-center space-y-2">
              <h2 className="text-lg font-bold text-[#1f2937]">Sign In With Google</h2>
              <p className="text-gray-600">
                Sign in securely to access your saved trips.
              </p>
              <Button
                onClick={login}
                className="mt-2 flex items-center gap-2 bg-white text-black border shadow hover:bg-gray-100"
              >
                <FcGoogle className="text-xl cursor-pointer" />
                Sign In with Google
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </header>
  );
};

export default Header;
