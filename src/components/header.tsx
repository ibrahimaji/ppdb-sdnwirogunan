"use client";
import Image from "next/image";
import React from "react";
import { useScrollPosition } from "@/hooks/useScrollPosition";
import { motion } from "framer-motion";

export const Header = () => {
  const scrollPosition = useScrollPosition();
  const MULTIDIRECTION_SLIDE_VARIANTS = {
    hidden: { opacity: 0, x: "-25vw" },
    visible: { opacity: 1, x: 0 },
    right: { opacity: 0, x: "25vw" },
  };
  return (
    <div className="overflow-hidden">
      <motion.header
        initial="hidden"
        animate="visible"
        variants={MULTIDIRECTION_SLIDE_VARIANTS}
        transition={{ duration: 1 }}
        className={`sticky top-0 z-50 transition-shadow ${scrollPosition > 0
            ? "shadow bg-opacity-70 backdrop-blur-lg backdrop-filter"
            : "shadow-none"
          }`}
      >
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <Image src="/tutwuri.png" alt="tutwuri" width={40} height={40} />
            <span className="ml-3 md:text-2xl font-bold">
              UPT SDN Wirogunan
            </span>
          </a>
        </div>
      </motion.header>
    </div>
  );
};
