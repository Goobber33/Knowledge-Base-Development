"use client";

import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  Input,
  Image,
} from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import { SearchIcon } from "./SearchIcon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";

export default function HomeNavbar() {
  return (
    <Navbar isBordered className="h-36 w-full shadow-lg relative">
      <NavbarContent justify="start" style={{ marginLeft: "-22rem" }}>
        <NavbarBrand className="mr-4">
          <Image
            src="/KeelWorksLogo.png"
            alt="NextUI"
            className="h-24 w-auto"
          />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="flex-1 justify-center items-center relative">
        <Input
          classNames={{
            base: "max-w-full w-[60rem] h-14",
            mainWrapper: "h-full",
            input: "text-md",
            inputWrapper:
              "h-full font-normal text-slate-950 bg-[#dbeafd] rounded-full p-4",
          }}
          placeholder="What do you want to know?"
          size="sm"
          type="search"
          startContent={
            <SearchIcon className="text-black/50 mb-0.5 text-slate-950 pointer-events-none flex-shrink-0 ml-4" />
          }
        />

        <div className="absolute right-0 gap-4 -mr-80 flex items-center justify-center">
          <button className="text-gray-700 focus:outline-none">
            <FontAwesomeIcon icon={faQuestionCircle} className="w-9 h-9" />
          </button>
          <div className="w-28">
            {" "}
            <Button className="w-full rounded-full bg-white border border-2 border-black hover:bg-slate-100">
              Log In
            </Button>
          </div>

          <div className="w-28">
            {" "}
            <Button className="w-full rounded-full bg-primary text-white">
              Sign Up
            </Button>
          </div>
        </div>
      </NavbarContent>
    </Navbar>
  );
}
