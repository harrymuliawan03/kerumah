"use client";

import { useAuth } from "@/hooks/useHooks";
import { LoginRequest } from "@/modules/auth/models/login/login-request.model";
import SideBanner from "@/modules/auth/presentations/components/side-banner";
import InputComponentAuth from "@/modules/auth/presentations/register/form/input";
import { LoginCase } from "@/modules/auth/usecases/login/login.usecase";
import formatMessages from "@/utils/service";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

export default function AuthPage() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [onProcess, setOnProcess] = useState<boolean>(false);
  const router = useRouter();
  const { setUser } = useAuth();

  const onSubmit = async () => {
    toast.dismiss();
    setOnProcess(true);
    const data: LoginRequest = {
      email: email,
      password: password,
    };
    const toastId = toast.loading("Loading...");
    const res = await LoginCase(data);

    if (res?.success) {
      toast.success("Login Berhasil", {
        id: toastId,
      });
      setUser(res?.data ?? null);
      setTimeout(() => {
        router.replace("/dashboard");
      }, 50);
    } else {
      let message = res?.message;
      if (Array.isArray(res?.message)) {
        message = formatMessages(res?.message);
      }
      toast.error(message, {
        id: toastId,
      });
    }

    setOnProcess(false);
  };

  return (
    <div className="flex h-screen">
      <SideBanner />
      <div className="w-full bg-gray-100 lg:w-1/2 flex items-center justify-center">
        <div className="max-w-md w-full p-6">
          <h1 className="text-3xl font-semibold mb-6 text-black text-center">
            Sign In
          </h1>
          <div>
            <InputComponentAuth
              title="Email"
              type="email"
              id="email"
              name="email"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div>
            <InputComponentAuth
              title="Password"
              type="password"
              id="password"
              name="password"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <div>
            <button
              className="w-full bg-black text-white p-2 rounded-md hover:bg-gray-800 focus:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition-colors duration-300"
              onClick={onSubmit}
              disabled={onProcess}
            >
              Sign In
            </button>
          </div>
          <div className="mt-4 text-sm text-gray-600 text-center">
            <p>
              Dont have an account?{" "}
              <Link href={"/register"} className="text-black hover:underline">
                Sign Up here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
