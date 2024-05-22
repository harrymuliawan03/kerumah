"use client";

import React, { createContext, useEffect, useState } from "react";
import { DashboardType } from "./type";
import { usePathname } from "next/navigation";

const defaultProvider: DashboardType = {
    isOpenModal: false,
    setIsOpenModal: () => Promise.resolve(),
    onClick: null,
    setOnClick: () => Promise.resolve(),
};

type Props = {
  children: React.ReactNode;
};

const DashboardContext = createContext(defaultProvider);
const DashboardProvider = ({ children }: Props) => {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(defaultProvider.isOpenModal);
  const [onClick, setOnClick] = useState<(() => void) | null>(defaultProvider.onClick)
  const resetModal = () => {
    setOnClick(null);
    setIsOpenModal(false);
  }
  const pathname = usePathname()

  useEffect(() => {
    resetModal()
  }, [pathname])

  const values = {
    isOpenModal,
    setIsOpenModal,
    onClick,
    setOnClick,
  };

  return(
    <DashboardContext.Provider value={values}>{children}</DashboardContext.Provider>)
};

export { DashboardContext, DashboardProvider };
