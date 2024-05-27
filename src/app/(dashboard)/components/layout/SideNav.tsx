"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const SideNav: React.FC = () => {
  const pathname = usePathname();

  return (
    <aside
      id="logo-sidebar"
      className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0"
      aria-label="Sidebar"
    >
      <div className="h-full px-3 pb-4 overflow-y-auto bg-white">
        <ul className="space-y-2 font-medium">
          <li>
            <Link
              href="/dashboard"
              className={`flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-700 hover:text-white dark:hover:bg-gray-700 group ${
                pathname === "/dashboard" && "bg-gray-700 text-white"
              }`}
            >
              <svg
                className={`w-5 h-5 text-gray-400 transition duration-75 group-hover:text-white dark:group-hover:text-white ${
                  pathname === "/dashboard" && "text-white"
                }`}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 21"
              >
                <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
              </svg>
              <span className="ms-3">Dashboard</span>
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard/perumahan"
              className={`flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-700 hover:text-white dark:hover:bg-gray-700 group ${
                pathname.startsWith("/dashboard/perumahan") &&
                "bg-gray-700 text-white"
              }`}
            >
              <svg 
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor" 
                className={`flex-shrink-0 w-5 h-5 text-gray-400 transition duration-75 group-hover:text-white dark:group-hover:text-white ${
                  pathname.startsWith("/dashboard/perumahan") &&
                  "text-white"
                }`} 
                viewBox="0 0 64 64">
                <path d="M 32 3 L 1 28 L 1.4921875 28.654297 C 2.8591875 30.477297 5.4694688 30.791703 7.2304688 29.345703 L 32 9 L 56.769531 29.345703 C 58.530531 30.791703 61.140812 30.477297 62.507812 28.654297 L 63 28 L 54 20.742188 L 54 8 L 45 8 L 45 13.484375 L 32 3 z M 32 13 L 8 32 L 8 56 L 56 56 L 56 35 L 32 13 z M 26 34 L 38 34 L 38 52 L 26 52 L 26 34 z"></path>
                </svg>
              <span className="flex-1 ms-3 whitespace-nowrap">Perumahan</span>
              {/* <span className="inline-flex items-center justify-center px-2 ms-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300">Pro</span> */}
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard/kontrakan"
              className={`flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-700 hover:text-white dark:hover:bg-gray-700 group ${
                pathname.startsWith("/dashboard/kontrakan") &&
                "bg-gray-700 text-white"
              }`}
            >
              <svg 
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor" 
                className={`flex-shrink-0 w-5 h-5 text-gray-400 transition duration-75 group-hover:text-white dark:group-hover:text-white ${
                  pathname.startsWith("/dashboard/kontrakan") &&
                  "text-white"
                }`} 
                viewBox="0 0 64 64">
                <path d="M 32 3 L 1 28 L 1.4921875 28.654297 C 2.8591875 30.477297 5.4694688 30.791703 7.2304688 29.345703 L 32 9 L 56.769531 29.345703 C 58.530531 30.791703 61.140812 30.477297 62.507812 28.654297 L 63 28 L 54 20.742188 L 54 8 L 45 8 L 45 13.484375 L 32 3 z M 32 13 L 8 32 L 8 56 L 56 56 L 56 35 L 32 13 z M 26 34 L 38 34 L 38 52 L 26 52 L 26 34 z"></path>
                </svg>
              <span className="flex-1 ms-3 whitespace-nowrap">Kontrakan</span>
              {/* <span className="inline-flex items-center justify-center px-2 ms-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300">Pro</span> */}
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard/kostan"
              className={`flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-700 hover:text-white dark:hover:bg-gray-700 group ${
                pathname.startsWith("/dashboard/kostan") &&
                "bg-gray-700 text-white"
              }`}
            >
              <svg 
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor" 
                className={`flex-shrink-0 w-5 h-5 text-gray-400 transition duration-75 group-hover:text-white dark:group-hover:text-white ${
                  pathname.startsWith("/dashboard/kostan") &&
                  "text-white"
                }`} 
                viewBox="0 0 64 64">
                <path d="M 32 3 L 1 28 L 1.4921875 28.654297 C 2.8591875 30.477297 5.4694688 30.791703 7.2304688 29.345703 L 32 9 L 56.769531 29.345703 C 58.530531 30.791703 61.140812 30.477297 62.507812 28.654297 L 63 28 L 54 20.742188 L 54 8 L 45 8 L 45 13.484375 L 32 3 z M 32 13 L 8 32 L 8 56 L 56 56 L 56 35 L 32 13 z M 26 34 L 38 34 L 38 52 L 26 52 L 26 34 z"></path>
                </svg>
              <span className="flex-1 ms-3 whitespace-nowrap">Kostan</span>
              {/* <span className="inline-flex items-center justify-center px-2 ms-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300">Pro</span> */}
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard/pembayaran"
              className={`flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-700 hover:text-white dark:hover:bg-gray-700 group ${
                pathname.startsWith("/dashboard/pembayaran") &&
                "bg-gray-700 text-white"
              }`}
            >
              <div className="relative w-5 h-5">
                <Image src={pathname.startsWith("/dashboard/pembayaran") ? `/assets/images/pay-light.png` : `/assets/images/pay-grey.png`} alt="" fill />
              </div>
              <span className="flex-1 ms-3 whitespace-nowrap">Pembayaran</span>
              {/* <span className="inline-flex items-center justify-center px-2 ms-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300">Pro</span> */}
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default SideNav;
