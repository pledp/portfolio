"use client"

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function Expandable({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center p-2 text-lg font-medium bg-black rounded-t-xl"
      >
        {title}
        <ChevronDown
          color="white"
          className={`transform transition-transform ${isOpen ? "rotate-180" : "rotate-0"}`}
          size={40}
        />
      </button>
      <div
        className={`transition-[max-height] duration-300 overflow-hidden delay-0 rounded-r-xl rounded-b-xl ${isOpen ? "max-h-screen" : "max-h-5"}`}
      >
        <div className="bg-black p-8 text-white">{children}</div>
      </div>
    </div>
  );
}
