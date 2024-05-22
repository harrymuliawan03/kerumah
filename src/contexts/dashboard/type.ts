import { Dispatch, SetStateAction } from "react";

export type DashboardType = {
  isOpenModal: boolean;
  setIsOpenModal: (value: boolean) => void;
  onClick: (()=> void) | null;
  setOnClick: Dispatch<SetStateAction<(() => void) | null>>;
};
