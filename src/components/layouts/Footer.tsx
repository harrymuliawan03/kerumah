'use client'

import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

export default function Footer() {
  const router =  useRouter()
  const pathname = usePathname()

  console.log(pathname)
  return (
    <footer className="bg-white">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
          <div className={`text-center ml-2 cursor-pointer`}>
            <Image
              onClick={() => router.push("/home")}
              src={"/assets/images/kerumah_logo.png"}
              width={100}
              height={70}
              alt="test"
            />
          </div>
          </a>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Licensing
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2024 Kerumah™ . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}
