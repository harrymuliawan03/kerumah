"use client";

import Image from "next/image";
import React from "react";
import toast from "react-hot-toast";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import Testimonial from "./components/Testimonial";
import WrapperPage from "@/components/wrapper/WrapperPage";

export default function HomePage() {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
    arrows: false,
    className: "padding: 0;",
  };

  return (
    <WrapperPage>
      <div className="w-full h-[800px]">
        <div className="relative w-full h-[800px]">
          <Image
            src="/assets/images/bg-7.jpeg"
            alt="Picture of the author"
            fill
            // priority
            style={{ objectFit: "cover",objectPosition: "center top" }}
          />
          <div className="absolute flex px-20 w-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="px-4 py-5 h-[50vh] flex flex-col justify-center items-center rounded-2xl text-center bg-black bg-opacity-45 mx-[10%]">
              <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-4xl">
                Solusi Lengkap Manajemen Properti di Era Digital
              </h1>
              <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
                Urus Kostan / Rumah / Kontrakan Lebih Praktis, Hemat Waktu &
                Biaya, Solusi Tepat untuk Pemilik Kostan / Rumah / Kontrakan
                Sibuk & Milenial
              </p>
              <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
                <a
                  // href="#"
                  onClick={() => toast("Here is your toast.")}
                  className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
                >
                  Get started
                  <svg
                    className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
                <a
                  href="#"
                  className="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400"
                >
                  Learn more
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="relative bg-white dark:bg-gray-900 mt-10">
        <div className="pt-8 px-4 mx-auto max-w-screen-xl text-center lg:pt-16 z-10 relative">
          {/* <a
            href="#"
            className="inline-flex justify-between items-center py-1 px-1 pe-4 mb-7 text-sm text-blue-700 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-800"
          >
            <span className="text-xs bg-blue-600 rounded-full text-white px-4 py-1.5 me-3">
              New
            </span>{" "}
            <span className="text-sm font-medium">
              Jumbotron component was launched! See what's new
            </span>
            <svg
              className="w-2.5 h-2.5 ms-2 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
          </a> */}
          <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-200">
            Manajemen properti yang sangat direkomendasikan
          </p>
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            Dipercaya oleh lebih dari 200 perusahaan di Indonesia
          </h1>
          <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-200">
            Penawaran terbaik untuk Pemilik Kostan / Rumah / Kontrakan Sibuk &
            Milenial
          </p>
        </div>
        {/* <div className="bg-gradient-to-b from-blue-50 to-transparent dark:from-blue-900 w-full h-full absolute top-0 left-0 z-0"></div> */}

        <div className="w-20 h-1 rounded-full bg-[#484bb4] mx-auto mt-10"></div>

        <div className="w-full py-10 flex">
          <div className="flex flex-row justify-between basis-3/4 mx-auto">
            <div className="flex flex-col justify-center items-center space-y-5">
              <p className="text-5xl text-[#484bb4] font-bold">56639</p>
              <p className="font-semibold text-xl">Logo yang Dibuat</p>
            </div>
            <div className="flex flex-col justify-center items-center space-y-5">
              <p className="text-5xl text-[#484bb4] font-bold">56639</p>
              <p className="font-semibold text-xl">Logo yang Dibuat</p>
            </div>
            <div className="flex flex-col justify-center items-center space-y-5">
              <p className="text-5xl text-[#484bb4] font-bold">56639</p>
              <p className="font-semibold text-xl">Logo yang Dibuat</p>
            </div>
          </div>
        </div>

        <div className="w-full flex flex-col items-center mt-10">
          <div className="flex justify-center space-x-2 items-center basis-3/4 mx-auto">
            <FaStar
              style={{
                color: "orange",
              }}
            />
            <FaStar
              style={{
                color: "orange",
              }}
            />
            <FaStar
              style={{
                color: "orange",
              }}
            />
            <FaStar
              style={{
                color: "orange",
              }}
            />
            <FaStarHalfAlt
              style={{
                color: "orange",
              }}
            />
          </div>

          <div className="my-2 text-lg">
            <p>Dinilai 4,7 / 5 berdasarkan 2048 ulasan pelanggan</p>
          </div>

          <div className="container mt-24 mx-auto md:px-6">
            <section className="mb-10 text-center">
              <h2 className="mb-12 text-3xl font-bold">Testimonials</h2>

              <div className="grid gap-x-6 md:grid-cols-3 lg:gap-x-12">
                <Testimonial
                  name="Taylor Swift"
                  job="Back End Developer"
                  comment="Aplikasi Kerumah sungguh luar biasa! Sebagai seorang agen properti, saya sangat mengandalkan aplikasi ini dalam menjalankan bisnis saya. Dengan Kerumah, saya bisa dengan mudah mengatur jadwal pertemuan dengan calon penyewa, mengirimkan kontrak sewa, dan melacak pembayaran secara langsung. Fitur-fitur manajemen properti yang lengkap dan antarmuka yang intuitif membuat Kerumah menjadi pilihan utama saya dalam mengelola properti. Terima kasih, Kerumah, atas kemudahan dan kepraktisan yang Anda berikan!"
                  rating={5}
                  image="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).jpg"
                />
                <Testimonial
                  name="Lia Corel"
                  job="Back End Developer"
                  comment="Kerumah benar-benar membantu saya dalam mengelola apartemen saya dengan lebih efisien. Fitur-fiturnya yang lengkap, seperti manajemen pembayaran dan jadwal, membuat segalanya menjadi lebih terorganisir. Saya juga menyukai kemudahan mengatur inspeksi dan permintaan perawatan melalui aplikasi ini. Selain itu, dukungan pelanggan yang responsif dan ramah membuat pengalaman menggunakan Kerumah semakin menyenangkan. Sangat direkomendasikan untuk para pemilik properti!"
                  rating={5}
                  image="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(2).jpg"
                />
                <Testimonial
                  name="Wesley Sananta"
                  job="Back End Developer"
                  comment="Saya sangat terkesan dengan aplikasi Kerumah! Sebagai pemilik beberapa properti, saya seringkali merasa kesulitan untuk mengatur jadwal, melakukan pembayaran, dan mengelola komunikasi dengan penyewa. Namun, setelah menggunakan Kerumah, semuanya menjadi jauh lebih mudah. Saya bisa dengan cepat melacak jadwal penyewaan, mengelola pembayaran, dan bahkan berkomunikasi langsung dengan penyewa melalui fitur pesan. Aplikasi ini benar-benar mengubah cara saya mengelola properti saya."
                  rating={4.5}
                  image="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(9).jpg"
                />
              </div>
            </section>
          </div>
        </div>
      </section>

      <div className="container my-24 mx-auto md:px-6">
        <section className="mb-32 text-center">
          <h2 className="mb-12 pb-4 text-center text-3xl font-bold">
            Properti apa saja ??
          </h2>

          <div className="grid gap-6 lg:grid-cols-3 xl:gap-x-12">
            <div className="mb-6 lg:mb-0">
              <div className="relative block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                <div className="flex">
                  <div
                    className="relative mx-4 -mt-4 w-full overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]"
                    data-te-ripple-init
                    data-te-ripple-color="light"
                  >
                    <img
                      src="https://mdbcdn.b-cdn.net/img/new/standard/city/002.webp"
                      className="w-full"
                    />
                    <a href="#!">
                      <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
                    </a>
                  </div>
                </div>
                <div className="p-6">
                  <h5 className="mb-4 text-lg font-bold">Perumahan</h5>
                  <p className="mb-6">
                    Ut pretium ultricies dignissim. Sed sit amet mi eget urna
                    placerat vulputate. Ut vulputate est non quam dignissim
                    elementum. Donec a ullamcorper diam.
                  </p>
                  <a
                    href="#!"
                    data-te-ripple-init
                    data-te-ripple-color="light"
                    className="inline-block rounded-full bg-primary px-6 pb-2 pt-2.5 text-xs font-bold uppercase leading-normal text-black shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                  >
                    Read more
                  </a>
                </div>
              </div>
            </div>

            <div className="mb-6 lg:mb-0">
              <div className="relative block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                <div className="flex">
                  <div
                    className="relative mx-4 -mt-4 w-full overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]"
                    data-te-ripple-init
                    data-te-ripple-color="light"
                  >
                    <img
                      src="https://mdbcdn.b-cdn.net/img/new/standard/people/066.webp"
                      className="w-full"
                    />
                    <a href="#!">
                      <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
                    </a>
                  </div>
                </div>
                <div className="p-6">
                  <h5 className="mb-4 text-lg font-bold">Kontrakan</h5>
                  <p className="mb-6">
                    Suspendisse in volutpat massa. Nulla facilisi. Sed aliquet
                    diam orci, nec ornare metus semper sed. Integer volutpat
                    ornare erat sit amet rutrum.
                  </p>
                  <a
                    href="#!"
                    data-te-ripple-init
                    data-te-ripple-color="light"
                    className="inline-block rounded-full bg-primary px-6 pb-2 pt-2.5 text-xs font-bold uppercase leading-normal text-black shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                  >
                    Read more
                  </a>
                </div>
              </div>
            </div>

            <div className="mb-0">
              <div className="relative block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                <div className="flex">
                  <div
                    className="relative mx-4 -mt-4 w-full overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]"
                    data-te-ripple-init
                    data-te-ripple-color="light"
                  >
                    <img
                      src="https://mdbcdn.b-cdn.net/img/new/standard/people/191.webp"
                      className="w-full"
                    />
                    <a href="#!">
                      <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
                    </a>
                  </div>
                </div>
                <div className="p-6">
                  <h5 className="mb-4 text-lg font-bold">Kostan</h5>
                  <p className="mb-6">
                    Curabitur tristique, mi a mollis sagittis, metus felis
                    mattis arcu, non vehicula nisl dui quis diam. Mauris ut
                    risus eget massa volutpat feugiat. Donec.
                  </p>
                  <a
                    href="#!"
                    data-te-ripple-init
                    data-te-ripple-color="light"
                    className="inline-block rounded-full bg-primary px-6 pb-2 pt-2.5 text-xs font-bold uppercase leading-normal text-black shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                  >
                    Read more
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </WrapperPage>
  );
}
