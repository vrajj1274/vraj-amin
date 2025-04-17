import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { NAV_LINKS, SOCIALS } from "@/constants";
import { Menu, X } from "lucide-react"; // Import menu icons

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div
      className={`w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001427] backdrop-blur-md z-50 px-4 sm:px-10 ${scrolled ? "bg-[#030014]/80" : ""
        }`}
    >
      <div className="w-full h-full flex flex-row items-center justify-between m-auto">
        {/* Logo */}
        <Link
          href="#about-me"
          className="h-auto w-auto flex flex-row items-center"
        >
          <Image
            src="/logo.png"
            alt="Logo"
            width={60}
            height={60}
            draggable={false}
            className="cursor-pointer hover:animate-slowspin"
          />
          <div className="font-bold ml-[10px] text-gray-300">
            VRAJ AMIN
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center justify-between h-auto border-[rgba(112,66,248,0.38)] bg-[rgba(3,0,20,0.37)] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.title}
              href={link.link}
              className="cursor-pointer mx-2 hover:text-[rgb(112,66,248)] transition"
            >
              {link.title}
            </Link>
          ))}

          {/* Resume Link */}
          <Link
            href="https://drive.google.com/drive/folders/120t1SfZEV2mWdNh-KZ-0GxT_bwiqVJ6Y?usp=drive_link"
            target="_blank"
            rel="noreferrer noopener"
            className="cursor-pointer mx-2 hover:text-[rgb(112,66,248)] transition"
          >
            Resume
          </Link>
        </div>

        {/* Social Icons - Hide on small screens */}
        <div className="hidden md:flex flex-row gap-5">
          {SOCIALS.map(({ link, name, icon: Icon }) => (
            <Link
              href={link}
              target="_blank"
              rel="noreferrer noopener"
              key={name}
            >
              <Icon className="h-6 w-6 text-white hover:text-[rgb(112,66,248)] transition" />
            </Link>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white p-2"
          onClick={toggleMobileMenu}
        >
          {mobileMenuOpen ? (
            <X size={24} className="text-white" />
          ) : (
            <Menu size={24} className="text-white" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-[65px] left-0 right-0 bg-[#030014] bg-opacity-95 backdrop-blur-lg border-b border-[#2A0E61] py-4 px-6 z-50">
          <div className="flex flex-col space-y-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.title}
                href={link.link}
                className="text-gray-200 hover:text-[rgb(112,66,248)] transition py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.title}
              </Link>
            ))}

            <Link
              href="https://drive.google.com/drive/folders/120t1SfZEV2mWdNh-KZ-0GxT_bwiqVJ6Y?usp=drive_link"
              target="_blank"
              rel="noreferrer noopener"
              className="text-gray-200 hover:text-[rgb(112,66,248)] transition py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Resume
            </Link>

            {/* Social Icons in Mobile Menu */}
            <div className="flex flex-row gap-5 pt-2">
              {SOCIALS.map(({ link, name, icon: Icon }) => (
                <Link
                  href={link}
                  target="_blank"
                  rel="noreferrer noopener"
                  key={name}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Icon className="h-6 w-6 text-white hover:text-[rgb(112,66,248)] transition" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};