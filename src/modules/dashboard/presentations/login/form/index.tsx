"use client";
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useRouter, useSearchParams } from 'next/navigation';
import { LoginUseCase } from '@/modules/auth/usecases/login/login.usecase';
import { LoginWithEmailRequest } from '@/modules/auth/models/login/login-request.model';
import Toast, { showToast } from '@/component/Toast';
import { GoogleCallbackUseCase, RedirectGoogleUseCase, RegisterGoogleUseCase } from '@/modules/auth/usecases/register/register.usecase';
import { toast } from 'react-toastify';
import { ModalSetPassword } from '@/component/ModalSetPassword';
import { GoogleAuthResponse } from '@/modules/auth/models/register/register-response.model';

const LoginForm = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [googleData, setGoogleData] = useState<GoogleAuthResponse>()
  const [showModalSetPassword, setShowModalSetPassword] = useState(false)

  const doLogin = async () => {
    if (username === '' || password === '' || username === null || password === null) {
      showToast('Please fill email and password', 'warning')
      return
    }

    const data: LoginWithEmailRequest = {
      email: username,
      password: password
    }
    try {
      const resp = await LoginUseCase(data);
      if (resp.valid) {
        showToast(resp.message, 'success')

        router.push('/home');
      } else {
        showToast(resp.message, 'warning');
      }
    } catch (error) {
      showToast('Error tidak dapat login', 'error');
    }
  }

  const googleLogin = async (data: null) => {
    const res = await RedirectGoogleUseCase(data)

    if (res.valid) {
      router.push(res.data?.url as string)
    }
    return
  }

  const checkGoogleLogin = async (data: string) => {
    const res = await GoogleCallbackUseCase(data)

    if (!res.data?.token) {
      // setGoogleData(res.data as GoogleAuthResponse)
      // setShowModalSetPassword(true)
      return
    }

    router.push('/home')
  }

  useEffect(() => {
    if (searchParams.get('code') !== null) {
      checkGoogleLogin(searchParams.get('code') as string)
    }

  }, [])



  return (
    <>
      <div className="bg-[url('/assets/background/bg-auth.png')] h-full min-h-screen bg-no-repeat bg-cover text-white">
        <div className="flex justify-center py-10">
          <Image src={`/assets/icons/masuk.svg`} width={180} height={180} alt="Picture of the author" />
        </div>
        <form onSubmit={(e) => { e.preventDefault(); doLogin(); }}>
          <div>
              <div className="relative px-5 py-4">
                <div className="absolute inset-y-0 start-0 flex items-center ps-8 pointer-events-none">
                  <Image src={`/assets/icons/user.svg`} width={13} height={13} alt="Picture of the author" />
                </div>
                <input
                  className="bg-gray-400 bg-opacity-25 text-white text-sm rounded-lg block w-full p-4 ps-10 placeholder-white"
                  placeholder="Email"
                  type='email'
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
          </div>
          <div>
            <div className="relative px-5 py-4">
              <div className="absolute inset-y-0 start-0 flex items-center ps-8 pointer-events-none">
                  <Image src={`/assets/icons/lock.svg`} width={13} height={13} alt="Picture of the author" />
              </div>
              <input
                className="bg-gray-400 bg-opacity-25 text-white text-sm rounded-lg block w-full p-4 ps-10 placeholder-white"
                placeholder="Kata sandi"
                type='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <div className="relative px-5 py-4 ml-2">
            <p className="font-light text-xs cursor-pointer underline" onClick={() => { router.push('/forgot-password') }}>Lupa Kata Sandi</p>
          </div>
          <div className="text-center px-10 pt-10">
            <div className="pt-5">
              <button
                  className="button-auth w-full font-bold"
                  type='submit'
                >
                Masuk
              </button>
            </div>
          </div>
        </form>
         <div className="text-center px-10 pt-5">
            <div className="pt-5">
              <button
                  className="button-auth-google w-full font-bold flex align-middle justify-center"
                  type='button'
                  onClick={() => {googleLogin(null)}}
                >
                <div className='w-[79px] h-[40px] relative'>
                  <Image src={`/assets/icons/google-icon.svg`}
                    layout="fill"
                    quality={100}
                    alt="google icon" />
                </div>
              </button>
            </div>
          </div>
          <div className="text-center px-10 pt-10">
            <div>
              <button
                className="w-full font-normal"
                onClick={() => router.push('/auth/register')}
                >
                Registrasi
              </button>
            </div>
          </div>
      </div>

      {/* <ModalSetPassword showModal={showModalSetPassword} setShowModal={setShowModalSetPassword} googleData={googleData as GoogleAuthResponse}/> */}
    </>
  );
};

export default LoginForm;
