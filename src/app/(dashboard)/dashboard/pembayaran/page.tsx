"use client";

import React, { useEffect, useState } from "react";
import WrapperDashboard from "../../components/wrapper/WrapperDashboard";
import CardPaymentItem from "../../components/CardPaymentItem";
import { ListPaymentResponse } from "@/modules/pembayaran/models/list-payment-model";
import { GetPaymentListByKeywordCase, GetPaymentListCase } from "@/modules/pembayaran/usecases/pembayaran.usecase";

const PaymentPage: React.FC = () => {
    const [data, setData] = useState<ListPaymentResponse[] | null>();
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [searchTerm, setSearchTerm] = useState('');

    const getListPayments = async () => {
        const {data} = await GetPaymentListCase();

        setData(data);
    };


    const fetchData = async (keyword: string) => {
        const {data} = await GetPaymentListByKeywordCase(keyword)
        setData(data)
    };

    let timeoutId: ReturnType<typeof setTimeout>;

    React.useEffect(() => {
        const getData = setTimeout(async () => {
            const {data} = await GetPaymentListByKeywordCase(searchTerm)
            setData(data)
        }, 500)
    
        return () => clearTimeout(getData)
      }, [searchTerm])

    const sortData = (sortBy: 'tipe' | 'nama' | 'kode' | 'status' | 'tanggal_pembayaran') => {
        if (!data) return;
        let sortedData: ListPaymentResponse[];

        switch (sortBy) {
            case 'tipe':
                sortedData = data?.slice().sort((a, b) => {
                    if (a.tipe < b.tipe) return -1;
                    if (a.tipe > b.tipe) return 1;
                    return 0;
                });
                break;
            case 'nama':
                sortedData = data?.slice().sort((a, b) => {
                    if (a.nama < b.nama) return -1;
                    if (a.nama > b.nama) return 1;
                    return 0;
                });
                break;
            case 'kode':
                sortedData = data?.slice().sort((a, b) => {
                    if (a.kode_unit < b.kode_unit) return -1;
                    if (a.kode_unit > b.kode_unit) return 1;
                    return 0;
                });
                break;
            case 'status':
                sortedData = data?.slice().sort((a, b) => {
                    if (a.status < b.status) return -1;
                    if (a.status > b.status) return 1;
                    return 0;
                });
                break;
            case 'tanggal_pembayaran':
                sortedData = data?.slice().sort((a, b) => {
                    if (a.tanggal_pembayaran < b.tanggal_pembayaran) return -1;
                    if (a.tanggal_pembayaran > b.tanggal_pembayaran) return 1;
                    return 0;
                });
                break;
            default:
                sortedData = data;
                break;
        }
        setData(sortedData);
    }

    useEffect(() => {
        getListPayments();
    }, []);

  return (
    <WrapperDashboard>
        <div className="min-h-screen w-full bg-white">
            <div className="flex items-center justify-between flex-column md:flex-row flex-wrap space-y-4 md:space-y-0 py-4 bg-white dark:bg-gray-900">
                <div>
                    <button id="dropdownActionButton" onClick={() => setIsOpen(!isOpen)} data-dropdown-toggle="dropdownAction" className="inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
                        <span className="sr-only">Action button</span>
                        Sort By
                        <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                        </svg>
                    </button>
                    <div id="dropdownAction" className={`z-10 ${isOpen ? 'absolute' : 'hidden'} absolute bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600`}>
                        <ul className="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownActionButton">
                            <li>
                                <p onClick={() => {
                                    sortData('tipe')
                                    setIsOpen(false)
                                    }} className="block cursor-pointer px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Tipe Properti</p>
                            </li>
                            <li>
                                <p onClick={() => {sortData('nama')
                                    setIsOpen(false)
                                }} className="block cursor-pointer px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Nama Properti</p>
                            </li>
                            <li>
                                <p onClick={() => {sortData('kode')
                                    setIsOpen(false)
                                }} className="block cursor-pointer px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Kode Unit</p>
                            </li>
                            <li>
                                <p onClick={() => {sortData('status')
                                    setIsOpen(false)
                                }} className="block cursor-pointer px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Status</p>
                            </li>
                            <li>
                                <p onClick={() => {sortData('tanggal_pembayaran')
                                    setIsOpen(false)
                                }} className="block cursor-pointer px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Tanggal Pembayaran</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <label htmlFor="table-search" className="sr-only">Search</label>
                <div className="relative">
                    <div className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                        </svg>
                    </div>
                    <input type="text" id="table-search-users" className="block py-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search"
                    value={searchTerm}
                    onChange={(e) => {
                        setSearchTerm(e.target.value);
                    }}
                     />
                </div>
            </div>
            <div className="p-6 w-full px-0">
        <table className="w-full min-w-max table-auto text-left">
            <thead>
            <tr>
                <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
                <p className="block antialiased font-sans text-sm text-blue-gray-900 font-bold leading-none opacity-70">Tipe Properti</p>
                </th>
                {/* <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
                <p className="block antialiased font-sans text-sm text-blue-gray-900 font-bold leading-none opacity-70">Amount</p>
                </th> */}
                <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
                <p className="block antialiased font-sans text-sm text-blue-gray-900 font-bold leading-none opacity-70">Nama Properti</p>
                </th>
                <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
                <p className="block antialiased font-sans text-sm text-blue-gray-900 font-bold leading-none opacity-70">Kode Unit</p>
                </th>
                <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
                <p className="block antialiased font-sans text-sm text-blue-gray-900 font-bold leading-none opacity-70">Status</p>
                </th>
                <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
                <p className="block antialiased font-sans text-sm text-blue-gray-900 font-bold leading-none opacity-70">Tanggal Pembayaran</p>
                </th>
                <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
                <p className="block antialiased font-sans text-sm text-blue-gray-900 font-bold leading-none opacity-70"></p>
                </th>
            </tr>
            </thead>
            <tbody>
                {data?.map((item, index) => 
                    <CardPaymentItem data={item} key={index} />
                )}
            </tbody>
        </table>
        </div>

        </div>
    </WrapperDashboard>
  );
};

export default PaymentPage;
