"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Image } from "@nextui-org/react";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import React, { useState } from "react";

export default function SignUp() {

    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    };

  return (
    <div className="flex flex-col items-center w-full">
      <div className="py-6">
        <Image
          src="/KeelWorksLogo.png"
          alt="NextUI"
          width={300}
          height={200}
        />
      </div>
      <div className="w-full flex justify-center my-12">
        <div className="w-3/12">
          <h1 className="text-4xl font-semibold text-left">Create account!</h1>
        </div>
      </div>
      <div className="w-full flex justify-center mb-8">
        <div className="w-3/12">
          <Label htmlFor="username" className="text-slate-400 text-md">Username</Label>
          <Input id="username" type="text" className="w-full text-left border border-2 h-12 mt-1" />
        </div>
      </div>
      <div className="w-full flex justify-center mb-8">
        <div className="w-3/12">
          <Label htmlFor="email" className="text-slate-400 text-md">Email address</Label>
          <Input id="email" type="email" className="w-full text-left border border-2 h-12 mt-1" />
        </div>
      </div>
      <div className="w-full flex justify-center mb-8">
        <div className="w-3/12 relative">
          <Label htmlFor="password" className="text-slate-400 text-md">Password</Label>
          <Input
            id="password"
            type={showPassword ? 'text' : 'password'}
            className="w-full text-left border border-2 h-12 mt-1 pr-10" // pr-10 to make space for the icon
          />
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5">
            <button
              onClick={togglePasswordVisibility}
              className="focus:outline-none"
            >
              {showPassword ? (
                <EyeOffIcon className="h-6 w-6 text-gray-700" />
              ) : (
                <EyeIcon className="h-6 w-6 text-gray-700" />
              )}
            </button>
          </div>
          {/* ... */}
        </div>
      </div>
    </div>
  );
}
