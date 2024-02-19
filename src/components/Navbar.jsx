import React, { useState } from "react";
import Image from "next/image";
// import Link from "next/link";
import { Link } from "react-scroll";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const MobileBurgerMenu = ({ isOpen, onClose }) => {
  return (
    <div
      className={`fixed inset-0 z-50 ${
        isOpen ? "bg-yellow" : "hidden bg-transparent"
      } transition-all duration-300`}
    >
      <div className="flex flex-col items-center justify-center m-10">
        <div className="">
          <Image src="/images/1_black.png" alt="Logo" width={200} height={200} />
        </div>
        <div className="cursor-pointer my-8" onClick={onClose}>
          <CloseIcon />
        </div>
        <div className="text-2xl">
          <div className="my-1 cursor-pointer">
            <Link to="whatWeDo" smooth duration={500} onClick={onClose}>
              Projects
            </Link>{" "}
          </div>
          <div className="my-1 cursor-pointer">
            {" "}
            <Link to="services" smooth duration={500} onClick={onClose}>
              Services
            </Link>
          </div>
          <div className="my-1 cursor-pointer">
            {" "}
            <Link to="articles" smooth duration={500} onClick={onClose}>
              Articles
            </Link>
          </div>
          <div className="my-1 cursor-pointer">
            <Link to="articles" smooth duration={500} onClick={onClose}>
              Free Tools
            </Link>
          </div>
          <div className="my-1 cursor-pointer">
            {" "}
            <Link to="letsTalk" smooth duration={500} onClick={onClose}>
              Let's Talk
            </Link>
          </div>
        </div>
        <div className="flex items-center justify-center my-10 space-x-4">
          <div className="">
            {" "}
            <Image src="/images/Vector.png" alt="Logo" width={50} height={50} />
          </div>
          <div className="">
            {" "}
            <Image src="/images/LikedIn.png" alt="Logo" width={50} height={50} />
          </div>
          <div className="">
            {" "}
            <Image src="/images/yellowInsta.png" alt="Logo" width={50} height={50} />
          </div>
        </div>
        <div className="text-center text-2xl">
          <div className="">Mail Us:</div>
          <div className="underline">
            <Link href="mailto:hello@productarchitects.eu">hello@productarchitects.eu</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const WebBurgerMenu = ({ isOpen, onClose }) => {
  return (
    <div
      className={`fixed inset-0 z-50 ${
        isOpen ? "bg-yellow" : "hidden bg-transparent"
      } transition-all duration-300`}
    >
      <div className="flex justify-between">
        <div className="w-1/2 flex flex-col h-screen">
          {/* First div at the top */}
          <div className="flex items-center justify-start relative space-x-4 m-10">
            <div className="pb-2 relative bg-gradient-radial shadow-2xl cursor-pointer">
              <div
                className="shadow-custom bg-yellow rounded-full p-1 border-darkYellow border-solid"
                onClick={onClose}
              >
                <MenuIcon />
              </div>
            </div>
            <div className="hidden sm:block">The Product Architects</div>
          </div>

          {/* Second div in the middle */}
          <div className="flex-1 flex items-center justify-start m-10">
            <div className="flex items-center justify-center space-x-8">
              <div className="cursor-pointer" onClick={onClose}>
                <CloseIcon />
              </div>
              <div className="my-1 cursor-pointer">
                <Link to="whatWeDo" smooth duration={500} onClick={onClose}>
                  Projects
                </Link>{" "}
              </div>
              <div className="my-1 cursor-pointer">
                {" "}
                <Link to="services" smooth duration={500} onClick={onClose}>
                  Services
                </Link>
              </div>
              <div className="my-1 cursor-pointer">
                {" "}
                <Link to="articles" smooth duration={500} onClick={onClose}>
                  Articles
                </Link>
              </div>
              <div className="my-1 cursor-pointer">
                <Link to="articles" smooth duration={500} onClick={onClose}>
                  Free Tools
                </Link>
              </div>
              <div className="my-1 cursor-pointer">
                {" "}
                <Link to="letsTalk" smooth duration={500} onClick={onClose}>
                  Let's Talk
                </Link>
              </div>
            </div>
          </div>

          {/* Third div at the bottom */}
          <div className="flex justify-between m-10">
            <div className="flex space-x-4 placeholder:text-center">
              <div className="">Mail Us:</div>
              <div className="underline">
                <Link href="mailto:hello@productarchitects.eu">hello@productarchitects.eu</Link>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-4">
              <div className="">
                {" "}
                <Image src="/images/Vector.png" alt="Logo" width={20} height={20} />
              </div>
              <div className="">
                {" "}
                <Image src="/images/LikedIn.png" alt="Logo" width={20} height={20} />
              </div>
              <div className="">
                {" "}
                <Image src="/images/yellowInsta.png" alt="Logo" width={20} height={20} />
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/2">
          {/* Second div content (assuming it's an image) */}
          <Image src="/images/resource.png" alt="Logo" width={800} height={800} />
        </div>
      </div>
    </div>
  );
};

const Navbar = ({ fonts }) => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className="">
      <div className={fonts[0]}>
        <div className="flex items-center justify-between m-6">
          <div className="flex items-center justify-start">
            <div className="">
              <Image src="/images/logo.png" alt="Logo" width={40} height={40} />
            </div>
            <div className="">The Product Architects</div>
            <div className="text-transparent text-stroke text-black text-2xl">Hollow Text</div>
          </div>
          <div className="flex items-center justify-end relative space-x-4">
            <div className="hidden sm:block">Sustainable Service Design</div>
            <div
              className="pb-2 relative bg-gradient-radial shadow-2xl cursor-pointer"
              onClick={handleMenuToggle}
            >
              <div className="shadow-custom bg-yellow rounded-full p-1 border-darkYellow border-solid">
                <MenuIcon />
              </div>
            </div>
            <div className="sm:hidden">
              <MobileBurgerMenu isOpen={isMenuOpen} onClose={handleMenuToggle} />
            </div>
            <div className="hidden sm:block">
              <WebBurgerMenu isOpen={isMenuOpen} onClose={handleMenuToggle} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
