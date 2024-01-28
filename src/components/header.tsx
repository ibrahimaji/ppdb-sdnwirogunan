"use client";
import Image from "next/image";
import React from "react";
import { useScrollPosition } from "@/hooks/useScrollPosition";

export const Header = () => {
  const scrollPosition = useScrollPosition();
  return (
    <header
      className={`sticky top-0 z-50 transition-shadow ${
        scrollPosition > 0
          ? "shadow bg-opacity-70 backdrop-blur-lg backdrop-filter"
          : "shadow-none"
      }`}
    >
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <Image src="/tutwuri.png" alt="tutwuri" width={40} height={40} />
          <span className="ml-3 text-xl">UPT SDN Wirogunan</span>
        </a>
      </div>
    </header>
  );
};
