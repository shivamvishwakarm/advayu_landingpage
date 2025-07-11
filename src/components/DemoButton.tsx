// components/DemoButton.tsx
import React, { useState } from "react";
import { Calendar, Phone, Play } from "lucide-react";
import VideoModal from "./VideoModal";

const DemoButton: React.FC = () => {
  const url = "https://cal.com/siddharth-advayu";

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-gradient-to-r from-blue-800 to-blue-800/50 text-white px-8 py-4 lg:text-lg text-sm md:h-14 transition-all duration-300 hover:scale-105 transform backdrop-blur-sm group rounded-md flex items-center z-10"
    >
      <Phone className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
      Let's Unlock Growth
    </a>
  );
};
export default DemoButton;
