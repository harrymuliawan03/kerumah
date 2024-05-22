import { useContext } from "react";
import { DashboardContext } from "./dashboard/dashboardContext";
import { AuthContext } from "./auth/authContext";

export const useDashboard = () => useContext(DashboardContext);
export const useAuth = () => useContext(AuthContext);