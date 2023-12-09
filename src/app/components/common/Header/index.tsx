// src/components/Header.tsx
import React from "react";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className="flex justify-between bg-black/50 backdrop-blur-md text-white fixed bottom-[10px] left-0 right-0 px-10 py-5 border mt-5 mx-2">
      <nav className="flex justify-between items-center w-full gap-2">
        <Link href="/about">
          <span className="cursor-pointer hover:text-gray-300">About</span>
        </Link>
        <Link href="/projects">
          <span className="cursor-pointer hover:text-gray-300">Projects</span>
        </Link>
        <Link href="/contact">
          <span className="cursor-pointer hover:text-gray-300">Contact</span>
        </Link>
        {/* Additional links or buttons can be added here */}
      </nav>
    </header>
  );
};

export default Header;
