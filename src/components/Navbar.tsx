import Advayu_logo from "./Advayu_logo";

const navlinks = [
  { link: "/", name: "Home" },
  { link: "/about", name: "About" },
  { link: "/contact", name: "Contact" },
  { link: "/", name: "Get started" },
];

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between w-full sticky  top-4 z-50">
      <div className="flex flex-row items-center justify-center gap-6 w-full">
        <Advayu_logo />
        <div
          className="flex items-center gap-10 px-4 py-3 rounded-full border border-white/10 bg-black/80 backdrop-blur-lg"
          style={{
            boxShadow: "inset 0 0 12px rgba(107, 145, 197, 0.6)",
          }}>
          {navlinks.map((item, index) => (
            <a key={index} href={item.link} className="">
              {item.name}
            </a>
          ))}
        </div>

        <a
          className="flex items-center gap-2 px-6 py-3 rounded-full border border-white/10 bg-black/80 backdrop-blur-lg"
          style={{
            boxShadow: "inset 0 0 12px rgba(107, 145, 197, 0.6)",
          }}>
          Login
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
