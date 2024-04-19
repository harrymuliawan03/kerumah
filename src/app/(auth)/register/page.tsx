"use client";

import { RegisterRequest } from "@/app/modules/auth/models/register/register-request.model";
import SideBanner from "@/app/modules/auth/presentations/components/side-banner";
import InputComponentAuth from "@/app/modules/auth/presentations/register/form/input";
import { RegisterCase } from "@/app/modules/auth/usecases/register/register.usecase";
import InputComponent from "@/components/form/Input";
import formatMessages from "@/utils/service";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

export default function RegisterPage() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [onProcess, setOnProcess] = useState<boolean>(false);
  const router = useRouter();

  const onSubmit = async () => {
    toast.dismiss();
    setOnProcess(true);
    const data: RegisterRequest = {
      name: name,
      email: email,
      password: password,
    };
    const toastId = toast.loading("Loading...");
    const res = await RegisterCase(data);

    if (res?.success) {
      toast.success("Register Berhasil Silahkan Login", {
        id: toastId,
      });
      router.push("/login");
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
            Sign Up
          </h1>
          <h1 className="text-sm font-semibold mb-6 text-gray-500 text-center">
            Join to Our Community with all time access and free{" "}
          </h1>
          <div>
            <InputComponentAuth
              title="Name"
              id="name"
              name="name"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>
          <div>
            <InputComponentAuth
              title="Email"
              type="email"
              id="email"
              name="email"
              onChange={(e) => {
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
              onChange={(e) => {
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
              Sign Up
            </button>
          </div>
          <div className="mt-4 text-sm text-gray-600 text-center">
            <p>
              Already have an account?{" "}
              <Link href="/login" className="text-black hover:underline">
                Login here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
