import Link from "next/link";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGraduationCap,
  faHouse,
  faScaleBalanced,
  faSquarePlus,
  faSuitcase,
} from "@fortawesome/free-solid-svg-icons";

export default function Sidebar() {
  return (
    <div className="bg-white border-2 space-y-6 w-96 h-screen text-slate-900 p-4 flex justify-center">
      <div></div>
      <div className="space-y-6 text-xl ml-14">
        <h1 className="text-2xl pb-2">Categories</h1>
        <Link href="#" className="block text-left">
          <FontAwesomeIcon icon={faSquarePlus} style={{ color: "#333333" }} />
          <span className="ml-6">Create New</span>
        </Link>
        <Link href="#" className="block text-left">
          <FontAwesomeIcon
            icon={faGraduationCap}
            style={{ color: "#333333" }}
          />
          <span className="ml-6">Education</span>
        </Link>
        <Link href="#" className="block text-left">
          <FontAwesomeIcon icon={faSuitcase} />
          <span className="ml-6">Employment</span>
        </Link>
        <Link href="#" className="block text-left">
          <FontAwesomeIcon icon={faHouse} />
          <span className="ml-6">Housing</span>
        </Link>
        <Link href="#" className="block text-left">
          <FontAwesomeIcon icon={faScaleBalanced} />
          <span className="ml-6">Legal Advocacy</span>
        </Link>
      </div>
    </div>
  );
}
