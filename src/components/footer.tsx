import {Linkedin, Facebook, Instagram} from "lucide-react";
import logo from "../../public/Logo.svg";

const Footer = () => {
  return (
    <footer className=" bg-gradient-to-r from-blue-900 via-black via-black  to-black flex flex-row gap-4 items-center pb-4 justify-center">
<a href="#"><img src={logo} alt="Advayu_logo" className="w-14 h-auto"  /></a>
    <div className="flex items-center gap-4 border-l-2 border-white/10 py-2 px-4">
      <a  target="_blank" href="https://www.linkedin.com/company/discoverwithadvayu/posts/?feedView=all" ><Linkedin  className="text-gray-400 hover:text-gray-500 transition-all ease-in-out duration-300" size={30}   /></a> 

      <a target="_blank"  href="https://www.instagram.com/advayu.club/" ><Instagram  className="text-gray-400 hover:text-gray-500 transition-all ease-in-out duration-300" size={30}   /></a> 
    </div>


    </footer>
  )
}

export default Footer;