import { useEffect, useState } from "react";
import Advayu_logo from "./Advayu_logo";

const navlinks = [
  { link: "#", name: "Home" },
  { link: "#about", name: "About" },
  { link: "#contact", name: "Contact" },
  { link: "https://onboarding.advayu.club//", name: "Get started" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  // Toggle overflow-hidden on body
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    // Cleanup when unmounted
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOpen]);
  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-sm flex md:items-center justify-between px-2 py-4">
      <div className=" flex flex-row items-center md:justify-center justify-between gap-6 w-full">
        <Advayu_logo />

        <div
          className=" md:flex hidden md:items-center gap-10  px-5 py-[0.90rem] rounded-full border border-white/10"
          style={{
            boxShadow: "inset 0 0 12px rgba(107, 145, 197, 0.6)",
          }}
        >
          {navlinks.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target={item.name === "Get started" ? "_blank" : undefined}
              rel={
                item.name === "Get started" ? "noopener noreferrer" : undefined
              }
              className="text-white"
            >
              {item.name}
            </a>
          ))}
        </div>

        <a
          href="https://brands.advayu.club/login"
          target="_blank"
          className="md:flex hidden text-white px-6 py-3 rounded-full border border-white/10"
          style={{
            boxShadow: "inset 0 0 12px rgba(107, 145, 197, 0.6)",
          }}
        >
          Login
        </a>
      </div>

      <button
        className="md:hidden text-white focus:outline-none z-50"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        {/* Hamburger SVG */}
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          {isOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>
      {/* Fullscreen mobile menu */}
      {isOpen && (
        <div className="md:hidden  fixed bg-black top-20 left-0 w-screen h-screen bg-blue/95 flex flex-col items-center pt-20 z-40 gap-10 text-white text-3xl">
          {navlinks.map((item, index) => (
            <a
              className="  md:items-center gap-10  px-5 py-3 rounded-full border border-white/10"
              style={{
                boxShadow: "inset 0 0 12px rgba(107, 145, 197, 0.6)",
              }}
              key={index}
              href={item.link}
              target="_blank"
            >
              {item.name}
            </a>
          ))}
          <a
            href="#"
            className="flex  text-white px-6 py-3 rounded-full border border-white/10"
            style={{
              boxShadow: "inset 0 0 12px rgba(107, 145, 197, 0.6)",
            }}
          >
            Login
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
