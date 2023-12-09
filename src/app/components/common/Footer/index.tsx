import React from "react";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white text-center p-4">
      <div className="container mx-auto">
        <div className="flex justify-center mb-4">
          {/* Social media icons or links can go here */}
        </div>
        <div className="text-sm">
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
          {/* Additional links can be added here */}
        </div>
        <div className="mt-4">
          © {new Date().getFullYear()} MyPortfolio. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
