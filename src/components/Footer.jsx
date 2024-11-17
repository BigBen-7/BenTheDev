/* eslint-disable no-unused-vars */
import React from "react";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#1a1a1d] text-gray-500 text-center py-4">
      <p className="text-sm">
        &copy; {currentYear} by Benard | #wannabedev
      </p>
    </footer>
  );
}

export default Footer;
