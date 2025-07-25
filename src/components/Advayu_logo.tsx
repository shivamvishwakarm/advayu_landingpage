import React from "react";
import logo from "../../public/Logo.svg";

const Advayu_logo = () => {
  return (
    <div
      className="flex items-center gap-2 px-4 py-[0.289rem] rounded-full border border-white/10  backdrop-blur-lg"
      style={{
        boxShadow: "inset 0 0 12px rgba(107, 145, 197, 0.6)",
      }}>
      <img src={logo} alt="Advayu_logo" className="w-8 h-auto" />
      <h2 className="text-white text-base font-medium tracking-wide">
        Advayu.club
      </h2>
    </div>
  );
};

export default Advayu_logo;
