"use client";
import React, { useState } from "react";
import Image from "next/image";
import Logo from "@/images/foo-fest-logo.webp";
import Link from "next/link";

import NavigationLink from "./NavigationLink";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Styrer, om menuen er åben
  const [isBurgerActive, setIsBurgerActive] = useState(false); // Styrer burger-menuen

  // Toggler menuens åben/luk status
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsBurgerActive(!isBurgerActive); // Skift burger-menuens tilstand
  };

  return (
    <nav className="absolute flex justify-between items-center py-[1.5rem] px-[64px] w-full z-50 bg-transparent ">
      {/* logo */}
      <div className="hidden md:block">
        <Link href={"/"} className="text-2xl font-light text-white hover:text-black hidden md:block">
          <Image src={Logo} width={35} alt="logo" />
        </Link>
      </div>

      <Link href={"#"} className="text-2xl font-light text-white relative group">
        Tickets
        <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
      </Link>

      <button onClick={toggleMenu} className="text-2xl font-light text-white relative group">
        Menu
        <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
      </button>

      {isMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-20 backdrop-blur-lg flex justify-center items-center z-50" onClick={() => setIsMenuOpen(false)}>
          <div onClick={(e) => e.stopPropagation()}>
            <ul className="space-y-3 text-center text-3xl">
              <li>
                <NavigationLink href={"/"} text={"Home"} />
              </li>
              <li>
                <NavigationLink href={"/lineup"} text={"Line-Up"} />
              </li>
              <li>
                <NavigationLink href={"/about"} text={"About"} />
              </li>
              <li>
                <NavigationLink href={"#"} text={"Contact"} />
              </li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
