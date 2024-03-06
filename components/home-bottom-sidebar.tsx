import Link from "next/link";
import '@fortawesome/fontawesome-svg-core/styles.css';
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGraduationCap,
  faHouse,
  faScaleBalanced,
  faSquarePlus,
  faSuitcase,
} from "@fortawesome/free-solid-svg-icons";

export default function SidebarB() {
  return (
    <div className="bg-white border-2 space-y-6 w-96 h-screen text-slate-900 p-4 flex justify-center">
      <div></div>
      <div className="space-y-6 text-xl ml-14">
        <h1 className="text-2xl pb-2">Categories</h1>
        <Link href="#" className="block text-left">
          <FontAwesomeIcon icon={faSquarePlus} className="h-6" style={{ color: "#333333" }} />
          <span className="ml-6">Create New</span>
        </Link>
        <Link href="#" className="block text-left">
          <FontAwesomeIcon
            icon={faGraduationCap}
            style={{ color: "#333333" }}
            className="h-6"
          />
          <span className="ml-4">Education</span>
        </Link>
        <Link href="#" className="block text-left">
          <FontAwesomeIcon className="h-6" icon={faSuitcase} />
          <span className="ml-5">Employment</span>
        </Link>
        <Link href="#" className="block text-left">
          <FontAwesomeIcon className="h-6" icon={faHouse} />
          <span className="ml-5">Housing</span>
        </Link>
        <Link href="#" className="block text-left">
          <FontAwesomeIcon className="h-6" icon={faScaleBalanced} />
          <span className="ml-4">Legal Advocacy</span>
        </Link>
      </div>
    </div>
  );
}
