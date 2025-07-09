// components/DemoButton.tsx
import React, { useState } from "react";
import { Play } from "lucide-react";
import VideoModal from "./VideoModal";

const DemoButton: React.FC = () => {
  const [open, setOpen] = useState(false);
  const videoUrl = "https://www.youtube.com/embed/dQw4w9WgXcQ";
  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="bg-gradient-to-r from-blue-800 to-blue-800/50 text-white px-8 py-4 lg:text-lg text-sm md:h-14 transition-all duration-300 hover:scale-105 transform backdrop-blur-sm group rounded-md flex items-center z-10">
        <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
        Watch Demo
      </button>

      <VideoModal
        open={open}
        onClose={() => setOpen(false)}
        videoUrl={videoUrl}
      />
    </>
  );
};

export default DemoButton;
