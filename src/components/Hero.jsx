"use client";
import { useEffect } from "react";
import Image from "next/image";
import IndexHeroImage from "@/images/foo-fest-hero-w-text.png";
import IndexFansHero from "@/images/fans-for-parallax.png";
import { gsap } from "gsap";

const Hero = () => {
  useEffect(() => {
    const tl = gsap.timeline();

    // Initial states
    gsap.set(".text-layer-1 p", {
      xPercent: gsap.utils.wrap([100, -100]),
      opacity: 0,
    });

    gsap.set(".text-layer-2 p", {
      xPercent: gsap.utils.wrap([100, -100]),
      opacity: 0,
    });

    // Animationssekvens
    tl.to([".text-layer-1 p", ".text-layer-2 p"], {
      xPercent: 0,
      opacity: 1,
      duration: 1,
      stagger: 0.4,
      ease: "circ.inOut",
    })
      .to(
        ".liquid-overlay",
        {
          clipPath: `circle(70% at 60% 40%)`,
          duration: 0.8,
          ease: "power2.in",
        },
        "-=0.6" // Justeret til at starte lidt tidligere, men ikke så meget at det ødelægger flowet
      )
      .to(".liquid-overlay", {
        clipPath: `circle(65% at 85% 20%)`,
        duration: 0.3,
        ease: "power1.out",
      })
      .to(".liquid-overlay", {
        clipPath: `circle(0% at 100% 0%)`,
        duration: 0.5,
        ease: "power4.in",
      });
  }, []);

  return (
    <div className="relative w-full h-screen">
      {/* Loading overlay */}
      <div
        className="liquid-overlay fixed inset-0 bg-white_color z-50"
        style={{
          clipPath: "circle(100% at 50% 50%)",
        }}
      >
        {/* Sort tekst på hvid baggrund */}
        <div className="text-layer-1 absolute bottom-10 w-full text-black_color flex flex-col items-start p-4">
          <div className="hero-text overflow-hidden">
            <p className="ml-14 text-xl font-bold sm:text-lg md:text-xl lg:text-2xl xl:text-9xl">March</p>
          </div>
          <div className="hero-text overflow-hidden">
            <p className="ml-14 text-xl font-bold sm:text-lg md:text-xl lg:text-2xl xl:text-9xl">24th ─ 28th</p>
          </div>
          <div className="hero-text overflow-hidden">
            <p className="ml-14 text-xl font-medium sm:text-lg md:text-xl lg:text-2xl xl:text-9xl">2025</p>
          </div>
        </div>
      </div>

      {/* Main hero */}
      <div className="relative h-full">
        <Image src={IndexHeroImage} alt="Hero background for index" layout="fill" objectFit="cover" priority={true} className="z-0" />
        <div className="absolute inset-0 z-40">
          <Image src={IndexFansHero} alt="Fans Image" width={3000} height={100} priority={true} className="w-full h-full object-cover" />
        </div>

        {/* Hvid tekst på hero baggrund */}
        <div className="text-layer-2 absolute bottom-10 w-full text-white_color flex flex-col items-start p-4 z-40">
          <div className="hero-text overflow-hidden">
            <p className="ml-14 text-xl font-bold sm:text-lg md:text-xl lg:text-2xl xl:text-9xl">March</p>
          </div>
          <div className="hero-text overflow-hidden">
            <p className="ml-14 text-xl font-bold sm:text-lg md:text-xl lg:text-2xl xl:text-9xl">24th ─ 28th</p>
          </div>
          <div className="hero-text overflow-hidden">
            <p className="ml-14 text-xl font-medium sm:text-lg md:text-xl lg:text-2xl xl:text-9xl">2025</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
