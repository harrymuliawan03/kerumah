import Image from "next/image";
import React from "react";
import toast from "react-hot-toast";
import Slider from "react-slick";

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
    <>
      <Slider {...settings} className="w-full h-[500px]">
        <div className="relative w-full h-[500px]">
          <Image
            src="/assets/images/bg-2.jpg"
            alt="Picture of the author"
            fill
            priority
            style={{ objectFit: "cover" }}
          />
          <div className="absolute flex w-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="px-4 py-5 rounded-2xl text-center bg-black bg-opacity-45 mx-[10%]">
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
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
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
        <div className="w-full h-[500px]">
          <Image
            src="/assets/images/bg-5.jpg"
            alt="Picture of the author"
            fill
            style={{ objectFit: "cover" }}
            // priority
          />
        </div>
        <div className="w-full h-[500px]">
          <Image
            src="/assets/images/bg-6.jpg"
            alt="Picture of the author"
            style={{ objectFit: "cover" }}
            fill
            // priority
          />
        </div>
      </Slider>

      <section className="relative bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 z-10 relative">
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
        <div className="bg-gradient-to-b from-blue-50 to-transparent dark:from-blue-900 w-full h-full absolute top-0 left-0 z-0"></div>

        <div className="w-full py-10 px-auto bg-red-100 flex flex-col">
          <div>
            <p>tes</p>
            <p>tes</p>
          </div>
        </div>
      </section>
    </>
  );
}
