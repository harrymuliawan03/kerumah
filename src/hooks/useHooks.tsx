import { AuthContext } from "@/contexts/auth/authContext";
import { useContext } from "react";

export const useAuth = () => useContext(AuthContext);
