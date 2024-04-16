"use client";
import { usePathname, useRouter } from "next/navigation";
import React, { ReactNode, useEffect, useLayoutEffect } from "react";

const unprotectedPath = [
  "/",
  "/login",
  "/register",
  // '/forgot-password',
  // '/forgot-password/[token]',
  // '/home',
  // '/login/otp',
  // '/register/otp',
  // '/detail',
  // '/detail/[...slug].tsx',
  // '/directory',
  // '/directory/detail',
  // '/rewards',
  // '/rewards/detail',
  // '/home/notification'
];

type Props = {
  children: ReactNode;
};

const WrapperPrivatePage = ({ children }: Props) => {
  const router = useRouter();
  const pathname = usePathname();

  // useLayoutEffect(() => {
  //   const storedToken = localStorage.getItem("accessToken");
  //   const storedTokenExpiredAt: string | any =
  //     localStorage.getItem("TokenExpired");

  //   const tokenEndTime = new Date(parseInt(storedTokenExpiredAt) * 1000);
  //   const currentTime = new Date();

  //   if (unprotectedPath.includes(pathname)) {
  //     if (storedToken) {
  //       router.push("/home");
  //     }
  //   } else {
  //     if (pathname.startsWith("/dashboard")) {
  //       console.log(storedToken);
  //       // Protected Path
  //       if (!storedToken) {
  //         localStorage.removeItem("accessToken");
  //         localStorage.removeItem("TokenExpired");
  //         router.push("/login");
  //         // Have Token
  //       }
  //     }
  //   }
  // }, [pathname, router]);

  return <>{children}</>;
};

export default WrapperPrivatePage;
