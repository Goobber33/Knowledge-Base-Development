import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { Divider } from "@nextui-org/react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-600 text-white w-full bottom-0 left-0 z-10">
      <div className="max-w-[100rem] mx-auto py-12 px-4 sm:px-6 lg:px-8">
        {/* Main Content */}
        <div className="flex justify-between">
          {/* Column 1 - Company Info */}
          <div className="flex flex-col">
            <h2 className="text-lg font-semibold mb-6">Keelworks</h2>
            <p className="text-md mb-4 w-1/2">
              Lorem ipsum dolor sit amet consectetur. Vel pharetra enim pulvinar
              velit pretium orci. Vitae massa.
            </p>
            <div className="flex space-x-4">
              <FontAwesomeIcon icon={faFacebookF} />
              <FontAwesomeIcon icon={faTwitter} />
              <FontAwesomeIcon icon={faLinkedinIn} />
            </div>
          </div>

          {/* Column 2 - More Links */}
          <div className="flex flex-col ml-80">
            {" "}
            {/* Adjusted margin here */}
            <h2 className="text-2xl font-semibold mb-6">More</h2>
            <ul className="text-sm space-y-3">
              <li>About</li>
              <li>Explore Resources</li>
              <li>Find Opportunities</li>
              <li>Join Our Community</li>
            </ul>
          </div>

          {/* Column 3 - Categories */}
          <div className="flex flex-col">
            <h2 className="text-2xl font-semibold mb-6">Categories</h2>
            <ul className="text-sm space-y-3 mb-4">
              <li>Education</li>
              <li>Housing</li>
              <li>Jobs</li>
              <li>xxxxx</li>
            </ul>
          </div>
        </div>

        <Divider style={{ backgroundColor: "white", margin: "24px 0" }} />

        {/* Bottom Bar */}
        <div className="flex justify-between items-center text-sm py-4">
          <p>KeelWorks © 2023 | All Rights Reserved.</p>
          <a
            href="#"
            className="text-blue-200 hover:text-blue-100 cursor-pointer"
          >
            Privacy policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
