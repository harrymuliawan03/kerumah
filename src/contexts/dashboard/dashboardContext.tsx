"use client";

import React, { createContext, useEffect, useState } from "react";
import { DashboardType } from "./type";
import { usePathname } from "next/navigation";

const defaultProvider: DashboardType = {
    isOpenModal: false,
    setIsOpenModal: () => Promise.resolve(),
};

type Props = {
  children: React.ReactNode;
};

const DashboardContext = createContext(defaultProvider);
const DashboardProvider = ({ children }: Props) => {
  const [isOpenModal, setIsOpenModal] = useState(defaultProvider.isOpenModal);
  const pathname = usePathname()

  useEffect(() => {
    setIsOpenModal(false)
  }, [pathname])

  const values = {
    isOpenModal,
    setIsOpenModal,
  };

  return(
    <DashboardContext.Provider value={values}>{children}</DashboardContext.Provider>)
};

export { DashboardContext, DashboardProvider };
