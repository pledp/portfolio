"use client"

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function Expandable({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div className={`relative transition-[max-height] duration-300 overflow-hidden delay-0 rounded-r-xl rounded-b-xl ${isOpen ? "max-h-screen" : "max-h-20"}`}>
        <div className="px-6">{children}</div>
        <div className={`absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-b from-transparent to-expandable ${isOpen ? "hidden" : "inline"}`}></div>
      </div>
      <button
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        className={`transform transition-transform duration-300 flex justify-center items-center p-2 text-lg font-medium w-full backdrop-brightness-50`}
      > <p className="mr-5 text-lg">{isOpen ? "Learn less" : "Learn more"}</p>
        {title}
        <ChevronDown
          className={`transform transition-transform ${isOpen ? "rotate-180" : "rotate-0"}`}
          size={40}
        />
      </button>
    </div>
  );
}
