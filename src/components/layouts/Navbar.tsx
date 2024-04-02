// Navbar.js

"use client";
import { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
// import Cookies from 'js-cookie';
// import useLang from '@/store/lang/useLang';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(true);

  // const lang = props.lang;

  const router = useRouter();

  const pathname = usePathname();

  // const storage = new LocalStorage('./scratch')

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    if (pathname !== "/home" && pathname !== "/") {
      setIsScrolled(false);
    } else {
      setIsScrolled(false);
    }

    const handleScroll = () => {
      if (typeof window !== "undefined") {
        const scrollPosition = window.scrollY;
        if (scrollPosition > 0) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      }
    };
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("scroll", handleScroll);
      }
    };
  }, [pathname]);

  return (
    <nav
      className={`mx-auto max-w-full fixed top-0 ${
        isMenuOpen ? "h-full" : ""
      } left-0 right-0 z-[15] transition-all duration-300 ${
        isScrolled
          ? "w-full bg-cyan-200 text-primary"
          : "bg-white w-11/12 mt-5 rounded-lg sm:rounded-lg md:rounded-lg xl:rounded-full"
      }`}
    >
      <div className="container mx-auto py-5">
        <div className="flex justify-center lg:justify-center space-x-10 mx-5">
          {/* <div className={`text-center ml-2 cursor-pointer`}>
            <Image
              onClick={() => router.push("/home")}
              src={"/assets/image/logo.svg"}
              width={70}
              height={70}
              alt="test"
            />
          </div> */}

          <div
            className={`text-center lg-inline-flex mt-1 hidden lg:flex items-center font-semibold text-pantoneA`}
          >
            <p
              className={`text-sm ${
                pathname == "/home" ? "text-[#FAA419]" : ""
              } mr-2 groups inline-block relative ${
                isScrolled ? "hover:text-white" : "hover:text-[#FAA419]"
              } cursor-pointer`}
              onClick={() => router.push("/home")}
            >
              Beranda
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#FAA419] transform scale-x-0 origin-left transition-transform ease-out duration-250 group-hover:scale-x-100"></span>
            </p>
            <p
              className={`text-sm ${
                pathname == "/about" ? "text-[#FAA419]" : ""
              } mx-3 groups inline-block relative ${
                isScrolled ? "hover:text-white" : "hover:text-[#FAA419]"
              } cursor-pointer`}
              onClick={() => router.push("/about")}
            >
              Penghargaan
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#FAA419] transform scale-x-0 origin-left transition-transform ease-out duration-250 group-hover:scale-x-100"></span>
            </p>
            <p
              className={`text-sm ${
                pathname == "/contact" ? "text-[#FAA419]" : ""
              } mx-3 groups inline-block relative ${
                isScrolled ? "hover:text-white" : "hover:text-[#FAA419]"
              } cursor-pointer`}
              onClick={() => router.push("/contact")}
            >
              Kontak Kami
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#FAA419] transform scale-x-0 origin-left transition-transform ease-out duration-250 group-hover:scale-x-100"></span>
            </p>
          </div>

          <div className="text-center hidden lg:flex justify-center items-center">
            <div className={`bg-[#F4F5FB] rounded-full p-2`}>
              <p
                className={`text-xs font-bold ${"text-yellow-500"} px-2 border-yellow-500 cursor-pointer`}
              >
                Login
              </p>
            </div>
          </div>

          <div className="lg:hidden">
            <button
              className={`focus:outline-none ${
                isScrolled ? "text-primary" : "text-white"
              }`}
              onClick={toggleMenu}
            >
              {isMenuOpen ? <AiOutlineClose /> : <FaBars />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div
            className={`lg:hidden mt-3 ${
              isScrolled ? "text-primary" : "text-white"
            }`}
          >
            <p
              className="text-sm pl-5 py-2 mt-4"
              onClick={() => router.push("/company")}
            >
              Company
            </p>
            <p
              className="text-sm pl-5 py-2"
              onClick={() => router.push("/brands")}
            >
              Brands
            </p>
            <p
              className="text-sm pl-5 py-2"
              onClick={() => router.push("/sustainability")}
            >
              Sustainability
            </p>
            <p
              className="text-sm pl-5 py-2"
              onClick={() => router.push("/investors")}
            >
              Investors
            </p>
            <p
              className="text-sm pl-5 py-2"
              onClick={() => router.push("/news-and-event")}
            >
              News & Event
            </p>
            <p
              className="text-sm pl-5 py-2"
              onClick={() => router.push("/blog")}
            >
              Blog
            </p>
            <p
              className="text-sm pl-5 py-2"
              onClick={() => router.push("/career")}
            >
              Career
            </p>
            <p
              className="text-sm pl-5 py-2"
              onClick={() => router.push("/international-business")}
            >
              International Business
            </p>
            <p
              className="text-sm pl-5 py-2 pb-4"
              onClick={() => router.push("/contact-us")}
            >
              Contact Us
            </p>
            <div className="inline pl-4 pt-3 pr-3">
              <div className={`bg-white rounded-full p-1 py-2 inline`}>
                <p
                  className={`text-xs ${"text-yellow-500"} inline px-2 border-r-2 border-slate-800`}
                >
                  ID
                </p>
                <p className={`text-xs ${"text-yellow-500"} inline px-2`}>EN</p>
              </div>
            </div>
            <div className="inline pl-3 border-l-2">
              <div className="inline p-2 rounded-full bg-white">
                <svg
                  className="inline-block"
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="20"
                  height="20"
                  viewBox="0 0 50 50"
                >
                  <path d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z"></path>
                </svg>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
