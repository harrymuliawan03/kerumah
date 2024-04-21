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

  return <>{children}</>;
};

export default WrapperPrivatePage;
