"use client";
import { useAuth } from "@/hooks/useHooks";
import { LogoutCase } from "@/modules/auth/usecases/logout/logout-usecase";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";

const Nav: React.FC = () => {
  const [toggleProfile, setToggleProfile] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const { setUser } = useAuth();

  const handleLogout = async () => {
    LogoutCase();
    setUser(null);
    router.push("/login");
    toast.success("Logout berhasil");
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setToggleProfile(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200700">
      <div className="px-3 py-3 lg:px-5 lg:pl-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-start rtl:justify-end">
            <button
              data-drawer-target="logo-sidebar"
              data-drawer-toggle="logo-sidebar"
              aria-controls="logo-sidebar"
              type="button"
              className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            >
              <span className="sr-only">Open sidebar</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  clipRule="evenodd"
                  fillRule="evenodd"
                  d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                ></path>
              </svg>
            </button>
            <Link href="/" className="flex ms-2 md:me-24">
              <Image
                src="/assets/images/kerumah_logo.png"
                width={70}
                height={70}
                alt="Kerumah Logo"
              />
            </Link>
          </div>
          <div className="relative flex items-center" ref={dropdownRef}>
            <div className="flex items-center ms-3">
              <div>
                <button
                  type="button"
                  className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                  onClick={() => setToggleProfile(!toggleProfile)}
                >
                  <img
                    className="w-8 h-8 rounded-full"
                    src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                    alt="user photo"
                  />
                </button>
              </div>
            </div>
            <div
              className={`w-48 rounded-lg p-5 bg-white border border-slate-300 absolute ${
                toggleProfile ? "flex" : "hidden"
              } flex-col space-y-3 top-9 right-0`}
            >
              <div>
                <p className="text-sm text-gray-900" role="none">
                  Neil Sims
                </p>
                <p className="text-sm font-medium text-gray-900 truncate dark:text-gray-300">
                  neil.sims@flowbite.com
                </p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900 truncate dark:text-gray-300">
                  Settings
                </p>
              </div>
              <div onClick={handleLogout} className="cursor-pointer">
                <p className="text-sm font-medium text-gray-900 truncate dark:text-gray-300">
                  Logout{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
