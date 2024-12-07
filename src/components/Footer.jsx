"use client";
import Link from "next/link";
import Image from 'next/image';
import Logo from '@/images/foo-fest-logo.webp';

const Footer = () => {
  return (
    <footer className="bg-[#121212] text-black p-6 md:p-12 flex flex-col md:flex-row justify-between items-center">
      <div className="flex flex-col items-center md:items-start mb-6 md:mb-0 md:w-1/2">
        <div className="flex items-center mb-4 mt-10">
          <Image src={Logo} width={35} alt="logo" />
          <span className="text-white text-xl m-5 font-semibold">FOO FEST</span>
        </div>

        <ul className="flex flex-wrap gap-4 justify-center md:justify-start">
          <li>
            <Link href={"/booking"} className="text-gray-300 hover:text-white hover:underline underline-offset-2 transition-all duration-200 ease-in-out">
              Tickets
            </Link>
          </li>
          <li>
            <Link href={"/booking"} className="text-gray-300 hover:text-white hover:underline underline-offset-2 transition-all duration-200 ease-in-out">
              Program
            </Link>
          </li>
          <li>
            <Link href={"/about"} className="text-gray-300 hover:text-white hover:underline underline-offset-2 transition-all duration-200 ease-in-out">
              About
            </Link>
          </li>
          <li>
            <Link href={"/contact"} className="text-gray-300 hover:text-white hover:underline underline-offset-2 transition-all duration-200 ease-in-out">
              Contact
            </Link>
          </li>
        </ul>
      </div>

      <div id="Footer" className="flex flex-col items-center md:items-end md:w-1/2 mt-16">
        <h4 className="text-lg text-white font-medium mb-4 text-center md:text-left">Subscribe to be the first to know!</h4>
        <form className="flex flex-col md:flex-row gap-4 w-full md:w-auto">
          <input
            type="email"
            placeholder="Enter your email..."
            alt="Email entering form-field"
            className="w-full px-4 py-2 rounded-md border border-gray-300 text-black focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all duration-300"
          />
          <button
            type="submit"
            alt="Button to click to subscribe with chosen email"
            className="px-6 py-2 bg-red-800 text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 hover:bg-black hover:text-white transition-colors duration-300 ease-in-out"
          >
            Subscribe
          </button>
        </form>
      </div>
    </footer>
  );
};

export default Footer;
