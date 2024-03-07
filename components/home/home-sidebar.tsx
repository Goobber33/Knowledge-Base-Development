"use client";

import Link from "next/link";
import React, { useState } from "react";

export default function Sidebar() {
  const [activeLink, setActiveLink] = useState("Home");

  const links = ["Home", "Top Questions", "How it Works?", "FAQ's"];

  return (
    <div className="bg-white border-r-2 border-t-none w-96 h-80 text-slate-900 p-4 flex flex-col justify-center items-center pt-24 overflow-hidden pl-48">
      <div className="space-y-6 text-xl font-medium w-80">
        {links.map((link) => (
          <Link href="#" key={link}>
            <div
              onClick={() => setActiveLink(link)}
              className={`block text-left px-4 py-2 rounded-full ${
                activeLink === link
                  ? "bg-blue-500 text-white"
                  : "hover:bg-blue-100"
              }`}
            >
              {link}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
