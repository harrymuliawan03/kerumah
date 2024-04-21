"use client";

import React, { createContext, useEffect, useState } from "react";
import Cookies from "js-cookie";
import { AuthType } from "./type";
import { CheckLoginCase } from "@/modules/auth/usecases/login/login.usecase";

const defaultProvider: AuthType = {
  user: null,
  setUser: () => Promise.resolve(),
};

type Props = {
  children: React.ReactNode;
};

const AuthContext = createContext(defaultProvider);
const AuthProvider = ({ children }: Props) => {
  const [user, setUser] = useState(defaultProvider.user);
  const [loading, setLoading] = useState(true); // Introduce loading state

  const authenticationAuth = async () => {
    if (!user) {
      try {
        const getUser = await CheckLoginCase();
        if (getUser.success) {
          setUser(getUser.data ?? null);
        } else {
          setUser(null);
        }
      } catch (error) {
        console.error("Error during authentication:", error);
        setUser(null);
      } finally {
        setLoading(false); // Set loading state to false once authentication is done
      }
    }
  };

  useEffect(() => {
    authenticationAuth();
  }, []);

  console.log("render auth");

  const values = {
    user,
    setUser,
  };

  // Render children only when loading state is false
  return !loading ? (
    <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
  ) : null; // Alternatively, you can render a loading indicator here
};

export { AuthContext, AuthProvider };
