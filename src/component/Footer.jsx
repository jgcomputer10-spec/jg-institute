"use client";

import Link from "next/link";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { MdLocationOn, MdEmail } from "react-icons/md";
import { FiPhone } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="bg-[#a9c2cf] text-gray-800">

      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-4 gap-10">

          {/* LEFT */}
          <div>
            <h2 className="text-3xl font-bold mb-6">
              Janajog<span className="text-blue-600">.</span>
            </h2>

            <div className="flex gap-4 text-xl">
              <FaFacebookF className="cursor-pointer hover:text-blue-600" />
              <FaTwitter className="cursor-pointer hover:text-blue-600" />
              <FaInstagram className="cursor-pointer hover:text-blue-600" />
            </div>
          </div>

          {/* SITEMAP */}
          <div>
            <h3 className="font-semibold mb-4">Sitemap</h3>
            <ul className="space-y-2 text-gray-700">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/course">Courses</Link></li>
              <li><Link href="#">Mentor</Link></li>
              <li><Link href="/contact">Contact Us</Link></li>
            </ul>
          </div>

          {/* COMPANY */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-gray-700">
              <li><Link href="#">Our Team</Link></li>
              <li><Link href="#">Career</Link></li>
              <li><Link href="#">Services</Link></li>
              <li><Link href="#">Affiliates</Link></li>
            </ul>
          </div>

          {/* CONTACT */}
          <div className="space-y-4">

            <div className="flex items-center gap-3">
              <MdLocationOn className="text-blue-600 text-xl" />
              <p>THELAMARA CENTER , SONITPUR ASSAM 784149
            </div>

            <div className="flex items-center gap-3">
              <FiPhone className="text-blue-600 text-xl" />
              <p>91 70024 16852</p>
            </div>

            <div className="flex items-center gap-3">
              <MdEmail className="text-blue-600 text-xl" />
              <p>janasanjogcomputerinstitute@gmail.com</p>
            </div>

          </div>

        </div>

        {/* DIVIDER */}
        <div className="border-t border-gray-400 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">

          <p>
            @2025 Agency. All Rights Reserved by Janajog Computer Institute. Designed by <Link href="www.bnmi.com" className="font-semibold">BNMI</Link>
          </p>

          <div className="flex gap-4">
            <Link href="#">Privacy policy</Link>
            <span>|</span>
            <Link href="#">Terms & conditions</Link>
          </div>

        </div>

      </div>
    </footer>
  );
}