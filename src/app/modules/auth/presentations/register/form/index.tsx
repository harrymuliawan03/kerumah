"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { RegisterWithEmailRequest } from "@/modules/auth/models/register/register-request";
import { GoogleCallbackUseCase, RegisterUseCase } from "@/modules/auth/usecases/register/register.usecase";
import { showToast } from "@/component/Toast";
import ModalTermCondition from "@/component/modalTNC";
import { GoogleAuthResponse } from "@/modules/auth/models/register/register-response.model";

const RegisterForm = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [username, setUsername] = useState<string>("");
  const [fullName, setFullName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [birthplace, setbirthplace] = useState<string>("");
  const [birthdate, setbirthdate] = useState<string>("");
  const [phone_number, setPhoneNumber] = useState<string>("");
  const [showModal, setShowModal] = useState(false);
  const [show, setShow] = useState(false)
  const [isGoogle, setIsGoogle] = useState(false)
  const [googleId, setGoogleId] = useState<string>('')

  const [confirmPassword, setConfirmPassword] = useState<string>("");

  const [isChecked, setIsChecked] = useState(false);

  const doRegister = async () => {
    if (!isChecked) {
        alert("Mohon centang kotak persyaratan sebelum melanjutkan.");
        return;
    }

    const dateOfBirth = new Date(birthdate);

    const req: RegisterWithEmailRequest = {
      username: username,
      fullname: fullName,
      email: email,
      password: password,
      confirm_password: confirmPassword,
      birth_place: birthplace,
      birth_date: dateOfBirth,
      phone_number: phone_number,
      google_id: googleId ?? null

    };
    try {
      const resp = await RegisterUseCase(req);
      if (resp.valid) {
        showToast(resp.message, "success");
        router.push("/home");
      } else {
        showToast(resp.message, "warning");
      }
    } catch (error) {
      showToast("Gagal, Coba lagi", "error");
    }
  };
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  const handleTermsAndConditions = () => {
    setShowModal(true);
  }

  const checkGoogleLogin = async (data: string) => {
    const res = await GoogleCallbackUseCase(data)

    if (res.data?.token) {
      router.push('/home')
      setShow(false)
      return
    }

    setUsername(res.data?.username as string)
    setFullName(res.data?.full_name as string)
    setEmail(res.data?.email as string)
    setIsGoogle(true)
    setGoogleId(res.data?.google_id as string)
    setShow(true)
  }

  useEffect(() => {
    if (searchParams.get('code') !== null) {
      checkGoogleLogin(searchParams.get('code') as string)
    } else  {
      setShow(true)
    }
  }, [])



  return (
    <>
    {show ? (
      <div className="bg-[url('/assets/background/bg-auth.png')] h-full min-h-screen bg-no-repeat bg-cover text-white">
        <div className="flex justify-center py-10">
          <Image
            src={`/assets/icons/masuk.svg`}
            width={180}
            height={180}
            alt="Picture of the author"
          />
        </div>

        <form>
          <div>
            <div className="relative px-5 py-4">
              <div className="absolute inset-y-0 start-0 flex items-center ps-8 pointer-events-none">
                <Image
                  src={`/assets/icons/user.svg`}
                  width={13}
                  height={13}
                  alt="Picture of the author"
                />
              </div>
              <input
                className="bg-gray-400 bg-opacity-25 text-white text-sm rounded-lg block w-full p-4 ps-10 placeholder-white"
                placeholder="Nama lengkap"
                required
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
            </div>
          </div>

          <div>
            <div className="relative px-5 py-4">
              <div className="absolute inset-y-0 start-0 flex items-center ps-8 pointer-events-none">
                <Image
                  src={`/assets/icons/user.svg`}
                  width={13}
                  height={13}
                  alt="Picture of the author"
                />
              </div>
              <input
                className="bg-gray-400 bg-opacity-25 text-white text-sm rounded-lg block w-full p-4 ps-10 placeholder-white"
                placeholder="Nama akun"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
          </div>

          <div>
            <div className="relative px-5 py-4">
              <div className="absolute inset-y-0 start-0 flex items-center ps-8 pointer-events-none">
                <Image
                  src={`/assets/icons/email.svg`}
                  width={13}
                  height={13}
                  alt="Picture of the author"
                />
              </div>
              <input
                className={`${isGoogle ? 'bg-gray-600' : 'bg-gray-400'} bg-opacity-35 text-white text-sm rounded-lg block w-full p-4 ps-10 placeholder-white`}
                placeholder="Email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isGoogle}
              />
            </div>
          </div>

          <div>
            <div className="relative px-5 py-4">
              <div className="absolute inset-y-0 start-0 flex items-center ps-8 pointer-events-none">
                <Image
                  src={`/assets/icons/user.svg`}
                  width={13}
                  height={13}
                  alt="Picture of the author"
                />
              </div>
              <input
                className="bg-gray-400 bg-opacity-25 text-white text-sm rounded-lg block w-full p-4 ps-10 placeholder-white"
                placeholder="Tempat lahir"
                type="text"
                required
                value={birthplace}
                onChange={(e) => setbirthplace(e.target.value)}
              />
            </div>
          </div>

          <div>
            <div className="relative px-5 py-4">
              <div className="absolute inset-y-0 start-0 flex items-center ps-8 pointer-events-none">
                <Image
                  src={`/assets/icons/user.svg`}
                  width={13}
                  height={13}
                  alt="Picture of the author"
                />
              </div>
              <input
                className="bg-gray-400 bg-opacity-25 text-white text-sm rounded-lg block w-full p-4 ps-10 placeholder-white"
                placeholder="Phone Number"
                type="number"
                required
                value={phone_number}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>
          </div>

          <div>
            <div className="relative px-5 py-4">
              <input
                className="bg-gray-400 bg-opacity-25 text-white text-sm rounded-lg block w-full p-4  placeholder-white"
                placeholder="Tanggal lahir"
                type="date"
                required
                value={birthdate}
                onChange={(e) => setbirthdate(e.target.value)}
              />
            </div>
          </div>

          <div>
            <div className="relative px-5 py-4">
              <div className="absolute inset-y-0 start-0 flex items-center ps-8 pointer-events-none">
                <Image
                  src={`/assets/icons/lock.svg`}
                  width={13}
                  height={13}
                  alt="Picture of the author"
                />
              </div>
              <input
                className="bg-gray-400 bg-opacity-25 text-white text-sm rounded-lg block w-full p-4 ps-10 placeholder-white"
                placeholder="Kata sandi"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <div>
            <div className="relative px-5 py-4">
              <div className="absolute inset-y-0 start-0 flex items-center ps-8 pointer-events-none">
                <Image
                  src={`/assets/icons/lock.svg`}
                  width={13}
                  height={13}
                  alt="Picture of the author"
                />
              </div>
              <input
                className="bg-gray-400 bg-opacity-25 text-white text-sm rounded-lg block w-full p-4 ps-10 placeholder-white"
                placeholder="Ulangi kata sandi"
                type="password"
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
          </div>

          <div className="px-5 py-4">
            <p>Pastikan Alamat Email Anda Aktif</p>
          </div>
        </form>

        <div className="text-center px-10 pt-10">
          <div className="pt-5">
            <input
              type="checkbox"
              checked={isChecked}
              onChange={handleCheckboxChange}
            />
            <span className="pl-2">
              <a onClick={handleTermsAndConditions} className="underline cursor-pointer">
              Saya menyetujui persyaratan
              </a>
            </span>          </div>
          <div className="pt-5">
            <button
              className="button-auth w-full font-bold"
              onClick={() => doRegister()}
              disabled={!isChecked}
            >
              Daftar
            </button>
          </div>
          <div className="pt-5">
            <button
              className="w-full font-normal pb-5"
              onClick={() => router.push("/auth/login")}
            >
              Masuk
            </button>
          </div>
          <ModalTermCondition show={showModal} setShow={setShowModal} />

        </div>
      </div>
    ) : (
      <div className="text-[20px] w-100 h-[90vh] flex justify-center items-center animate-spin">
        <div role="status">
          <svg aria-hidden="true" className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
              <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
          </svg>
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    )}


    </>
  );
};

export default RegisterForm;
