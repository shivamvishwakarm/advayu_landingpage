// components/VideoModal.tsx
import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";

interface VideoModalProps {
  open: boolean;
  onClose: () => void;
  videoUrl: string;
}

const VideoModal: React.FC<VideoModalProps> = ({ open, onClose, videoUrl }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEsc);
    };
  }, [open, onClose]);

  if (!mounted || !open) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-sm px-4"
      onClick={onClose}>
      <div
        className="relative w-full max-w-4xl"
        onClick={(e) => e.stopPropagation()} // prevent click-through
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute -top-6 -right-6 text-white text-4xl hover:text-gray-300 z-[10000]">
          &times;
        </button>

        {/* 16:9 Aspect Ratio Video */}
        <div className="relative w-full pt-[56.25%] rounded-lg overflow-hidden shadow-lg bg-black">
          <iframe
            src={videoUrl}
            title="Demo Video"
            allow="autoplay; encrypted-media"
            allowFullScreen
            className="absolute top-0 left-0 w-full h-full rounded-md"
          />
        </div>
      </div>
    </div>,
    document.body
  );
};

export default VideoModal;
