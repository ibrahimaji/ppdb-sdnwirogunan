import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Instagram } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="text-gray-600 body-font">
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
          <Image src="/tutwuri.png" alt="tutwuri" width={40} height={40} />
        </a>
        <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
          © 2024 Team —
          <Link
            href="https://sdnwirogunan.sch.id"
            className="text-gray-600 ml-1"
            rel="noopener noreferrer"
            target="_blank"
          >
            @uptsdnwirogunan
          </Link>
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <a className="text-gray-500">
            <Instagram />
          </a>
        </span>
      </div>
    </footer>
  );
};
