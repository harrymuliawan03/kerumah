import { useContext } from "react";
import { DashboardContext } from "./dashboard/dashboardContext";

export const useDashboard = () => useContext(DashboardContext);