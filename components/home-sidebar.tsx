import Link from "next/link";
import React from "react";

export default function Sidebar() {
  return (
    <div className="bg-white border-2 space-y-6 w-96 h-80 text-slate-900 p-4 flex flex-col justify-center items-center pb-6">
      <div className="flex-grow"></div>
      <div className="space-y-6 text-xl font-medium">
        <Link href="#" className="block text-left">
          Home
        </Link>
        <Link href="#" className="block text-left">
          Top Questions
        </Link>
        <Link href="#" className="block text-left">
          How it Works?
        </Link>
        <Link href="#" className="block text-left">
          FAQ&apos;s
        </Link>
      </div>
    </div>
  );
}
