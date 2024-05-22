"use client";

import WrapperDashboard from "@/app/(dashboard)/components/wrapper/WrapperDashboard";
import GlobalAlert from "@/components/GlobalAlert";
import InputComponent from "@/components/form/Input";
import SelectComponent from "@/components/form/Select";
import TextAreaComponent from "@/components/form/TextArea";
import { cities } from "@/constants/city";
import { periode } from "@/constants/periode";
import { provinces } from "@/constants/provinces";
import { purchaseTypeData } from "@/constants/purchase_type";
import { UnitModel } from "@/models/unit-model";
import { DeleteUnitKontrakanCase } from "@/modules/kontrakan/usecases/kontrakan/kontrakan.usecase";
import { GetUnitByIdCase } from "@/modules/perumahan/usecases/perumahan/perumahan.usecase";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaArrowLeft } from "react-icons/fa";

/* eslint-disable react/no-unescaped-entities */
const DetailUnitPage = ({ params }: { params: { id: number } }) => {
  const router = useRouter();
  const [unit, setUnit] = useState<UnitModel>();
  const [kota, setKota] = useState<{id?: string, nama: string}[]>()
  const [dueDate, setDueDate]= useState<Date>()
  const currentDate = new Date();
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false)


  
  const handleFilterCity = (prov: string) => {
    const filteredData = cities.find(item => item.provinsi.toLowerCase() == prov.toLocaleLowerCase());
    
    const filteredCity = filteredData?.kota.map((kota, index) => ({
      id: String(index + 1),
      nama: kota
    }));
    
    setKota(filteredCity)
  };
  
  const getUnit = async () => {
    const res = await GetUnitByIdCase(params.id);


    if (res.success) {
      handleFilterCity(res.data?.provinsi ?? '')
      const date = new Date(String(res.data?.tanggal_jatuh_tempo));
      setDueDate(date)
      setUnit(res.data!);
    } else {
      setUnit(undefined);
    }
  };

  const handleDelete = async () => {
    if(unit?.id) {
      const res = await DeleteUnitKontrakanCase(unit.id);
      if(res.success) {
        toast.success('Berhasil menghapus data');
        router.push(`/dashboard/kontrakan/detail-kontrakan/${unit.id_parent}`)
      }else{
        toast.error(res.message);
      }
    }
  }

  useEffect(() => {
    getUnit();
  }, []);

  return (
    <WrapperDashboard>
      <form className="w-full">
        <div className="relative flex justify-center items-center w-full mb-4 md:mb-10">
          <div
            className="absolute left-0 cursor-pointer"
            onClick={() => {
              router.back();
            }}
          >
            <FaArrowLeft
              style={{
                color: "black",
              }}
            />
          </div>
          <h1 className="font-bold text-2xl text-[#0D1857]">{unit?.name}</h1>
          <div className="absolute right-0 cursor-pointer">
            <div className="hidden md:flex flex-row space-x-2">
              <Link
                href={`/dashboard/kontrakan/edit-unit/${params.id}`}
                className=" p-2 rounded bg-blue-500 text-center font-bold text-white hover:text-slate-200"
              >
                {" "}
                Edit{" "}
              </Link>
              {dueDate && currentDate > dueDate &&
                <Link
                  href="/dashboard/kontrakan/edit-unit"
                  className=" p-2 rounded bg-blue-500 text-center font-bold text-white hover:text-slate-200"
                >
                  {" "}
                  Bayar{" "}
                </Link>
              }
              <button
                className=" p-2 rounded bg-red-500 text-center font-bold text-white hover:text-slate-200"
                type="button"
                onClick={() => {
                  setIsOpenModal(true)
                }}
              >
                {" "}
                Hapus Unit{" "}
              </button>
            </div>
          </div>
        </div>
        <div className="flex md:hidden flex-row justify-center space-x-2">
          <Link
            href="/dashboard/kontrakan/edit-unit"
            className=" p-2 rounded bg-blue-500 text-center font-bold text-white hover:text-slate-200"
          >
            {" "}
            Edit{" "}
          </Link>
          {dueDate && currentDate > dueDate &&
            <Link
              href="/dashboard/kontrakan/edit-unit"
              className=" p-2 rounded bg-blue-500 text-center font-bold text-white hover:text-slate-200"
            >
              {" "}
              Bayar{" "}
            </Link>
          }
          <Link
            href="/dashboard/kontrakan/add"
            className=" p-2 rounded bg-red-500 text-center font-bold text-white hover:text-slate-200"
          >
            {" "}
            Hapus Unit{" "}
          </Link>
        </div>
        <div className="flex flex-wrap -mx-3 mb-2">
          <div className="w-full md:w-1/5 px-3 mb-6 md:mb-0">
            <InputComponent
              value={unit?.status}
              title="Status"
              onChange={() => {}}
              disabled
            />
          </div>
          <div className="w-full md:w-1/5 px-3 mb-6 md:mb-0">
            <SelectComponent
              data={periode}
              selected={unit?.periode_pembayaran ?? "year"}
              title="Periode Pembayaran"
              value={unit?.periode_pembayaran ?? "Belum diisi"}
              disabled
            />
          </div>
          <div className="w-full md:w-1/5 px-3 mb-6 md:mb-0">
            <SelectComponent
              data={purchaseTypeData}
              selected={String(unit?.purchase_type) ?? 'sewa'}
              title="Jenis Transaksi"
              value={unit?.purchase_type ?? "Belum diisi"}
              disabled
            />
          </div>
          <div className="w-full md:w-1/5 px-3 mb-6 md:mb-0">
            <InputComponent
              value={String(unit?.tenor ?? 0)}
              title="Tenor"
              onChange={() => {}}
              disabled
            />
          </div>
          <div className="w-full md:w-1/5 px-3 mb-6 md:mb-0">
            <InputComponent
              title="Kode Unit"
              value={unit?.name}
              onChange={() => {}}
              disabled
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3 mb-6 md:mb-0">
            <InputComponent
              title="Nama Penghuni"
              value={unit?.nama_penghuni ?? ""}
              onChange={() => {}}
              disabled
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <InputComponent
              title="No. Identitas (NIK, SIM)"
              value={unit?.no_identitas ?? ""}
              onChange={() => {}}
              disabled
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <TextAreaComponent
              title="Alamat"
              value={unit?.alamat ?? ""}
              disabled
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-2">
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <SelectComponent
              selected={unit?.provinsi ?? ""}
              data={provinces}
              title="Provinsi"
              disabled
            />
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <SelectComponent
              selected={unit?.kota ?? ""}
              data={kota ?? []}
              title="Kota"
              disabled
            />
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <InputComponent
              title="Kode Pos"
              onChange={() => {}}
              value={unit?.kode_pos ?? ""}
              type="number"
              disabled
            />
          </div>
        </div>
        <div className="flex flex-wrap justify-center -mx-3 mb-2">
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <InputComponent
              title="Tanggal Mulai"
              onChange={() => {}}
              value={unit?.tanggal_mulai ?? ""}
              type="date"
              disabled={unit?.tanggal_mulai != undefined}
            />
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <InputComponent
              title="Tanggal Jatuh Tempo"
              value={unit?.tanggal_jatuh_tempo ?? ""}
              onChange={() => {}}
              type="date"
              disabled
            />
          </div>
        </div>
      </form>
      <GlobalAlert isOpen={isOpenModal} closeModal={() => setIsOpenModal(false)} onSubmit={() => handleDelete()} />
    </WrapperDashboard>
  );
};

export default DetailUnitPage;
