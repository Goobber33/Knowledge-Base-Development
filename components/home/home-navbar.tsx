"use client";

import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  Input,
  Image,
} from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { Button } from "@nextui-org/react";
import { SearchIcon } from "../SearchIcon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import MobileSidebar from "./mobile.sidebar";
import About from "@/app/sign-up/page";

export default function HomeNavbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const router = useRouter();

  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];

  return (
    <Navbar isBordered className="h-36 w-full shadow-lg relative lg:h-36">
      <NavbarContent
        justify="start"
        className="lg:ml-[-22rem] ml-4 lg:mr-0 mr-4"
      >
        <NavbarBrand className="ml:44 ">
          <Image
            src="/KeelWorksLogo.png"
            alt="NextUI"
            className="h-12 lg:h-24 w-auto"
          />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="flex-1 justify-center items-center relative">
        <div className="hidden lg:block">
          <Input
            classNames={{
              base: "max-w-full w-full lg:w-[60rem] h-10 lg:h-14",
              mainWrapper: "h-full",
              input: "text-sm lg:text-md",
              inputWrapper:
                "h-full font-normal text-slate-950 bg-[#dbeafd] rounded-full p-2 lg:p-4",
            }}
            placeholder="What do you want to know?"
            size="sm"
            type="search"
            startContent={
              <SearchIcon className="text-black/50 mb-0.5 text-slate-950 pointer-events-none flex-shrink-0 ml-2 lg:ml-4" />
            }
          />
        </div>

        <div className="absolute right-0 gap-2 lg:gap-4 -mr-10 lg:-mr-80 flex items-center justify-center">
          <button className="text-gray-700 focus:outline-none hidden lg:block">
            <FontAwesomeIcon icon={faQuestionCircle} size="2x" />
          </button>
          <div className="hidden lg:block w-20 lg:w-28">
            <Button className="w-full rounded-full bg-white border border-2 border-black hover:bg-slate-100">
              Log In
            </Button>
          </div>

          <div className="hidden lg:block w-20 lg:w-28">
            <Button
              className="w-full rounded-full bg-primary text-white"
              onClick={() => router.push("/sign-up")} // Use the correct path to your sign-in page
            >
              Sign Up
            </Button>
          </div>
        </div>

        {/* Mobile Menu Icon */}
      </NavbarContent>
      <div className="lg:hidden">
        <MobileSidebar />
      </div>
    </Navbar>
  );
}
