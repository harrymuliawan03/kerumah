"use client";

import WrapperDashboard from "@/app/(dashboard)/components/wrapper/WrapperDashboard";
import InputComponent from "@/components/form/Input";
import SelectComponent from "@/components/form/Select";
import TextAreaComponent from "@/components/form/TextArea";
import { periode } from "@/constants/periode";
import { provinces } from "@/constants/provinces";
import { UnitModel,  UpdateUnitType } from "@/models/unit-model";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { unitUpdateSchema } from "@/models/schema/unit-schema";
import { cities } from "@/constants/city";
import toast from "react-hot-toast";
import { purchaseTypeData } from "@/constants/purchase_type";
import { GetUnitByIdCase, UpdateUnitCase } from "@/modules/kontrakan/usecases/kontrakan/kontrakan.usecase";

/* eslint-disable react/no-unescaped-entities */
const DetailUnitPage = ({ params }: { params: { id: number } }) => {
  const router = useRouter();

  const [unit, setUnit] = useState<UnitModel>();
  const [kota, setKota] = useState<{id?: string, nama: string}[]>()
  const [dueDate, setDueDate]= useState<Date>()
  const [status, setStatus] = useState<"empty" | "filled" | "late">('empty');
  const currentDate = new Date();

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
      setUnit(res.data!);
      setValue('status', res.data!.status)
      setValue('periode_pembayaran', res.data!.periode_pembayaran)
      if(res.data?.status == 'filled' || res.data?.status == 'late'){
        setValue('nama_penghuni', res.data?.nama_penghuni ?? '')
        setValue('no_identitas', res.data?.no_identitas ?? '')
        setValue('alamat', res.data?.alamat ?? '')
        setValue('provinsi', res.data?.provinsi ?? '')
        setValue('kota', res.data?.kota ?? '')
        setValue('kode_pos', res.data?.kode_pos ?? '')
        setValue('tanggal_mulai', res.data?.tanggal_mulai ?? '')
        setValue('tanggal_jatuh_tempo', res.data?.tanggal_jatuh_tempo ?? '')
        handleFilterCity(res.data?.provinsi ?? '')
        const date = new Date(String(res.data?.tanggal_jatuh_tempo));
        setDueDate(date)
        setStatus(res.data!.status)
      }
    } else {
      setUnit(undefined);
    }
  };

  const resetWithEmptyStatus = () => {
        setValue('nama_penghuni', '')
        setValue('no_identitas', '')
        setValue('alamat', '')
        setValue('provinsi',  '')
        setValue('kota', '')
        setValue('kode_pos', '')
        setValue('tanggal_mulai', '')
        setValue('tanggal_jatuh_tempo', '')
        setDueDate(undefined)
  }

  const onSubmit = async (data: UpdateUnitType) => {

    const res = await UpdateUnitCase(params.id, data)
    
    if(res.success){
      toast.success("Update Berhasil");
    }else{
      toast.error("Update Gagal");
    }
  }

  useEffect(() => {
    getUnit();
  }, []);

  const {
    control,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors }
  } = useForm<UpdateUnitType>({
    mode: 'all',
    resolver: status == 'empty' ? undefined : yupResolver(unitUpdateSchema)
  })
  
  return (
    <WrapperDashboard>
      <form className="w-full" 
            onSubmit={handleSubmit(onSubmit)}
          >
        <div className="relative flex justify-center items-center w-full mb-4 md:mb-10">
          <div
            className="absolute left-0 cursor-pointer z-10"
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
          <div className="flex flex-col justify-center items-center space-y-2">
            <h1 className="font-bold text-2xl text-[#0D1857]">{unit?.name}</h1>
            {unit?.tanggal_jatuh_tempo &&
              <div className="flex flex-row justify-center items-center space-x-1 p-1 bg-blue-400 rounded-lg">
                <p className="text-white text-sm">Jatuh Tempo</p>
              
                <p className="text-white text-sm">({unit?.tanggal_jatuh_tempo})</p>
              </div>
            }
          </div>
          <div className="absolute right-0 cursor-pointer">
            <div className="hidden md:flex flex-row space-x-2">
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
          </div>
        </div>
        <div className="flex md:hidden flex-row justify-center space-x-2">
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
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <Controller
              name="status"
              control={control}
              defaultValue={unit?.status}
              render={({ field }) => (
                <SelectComponent
                  data={[{id: '1', nama: 'empty'}, {id: '2', nama: 'filled'}, {id: '3', nama: 'late'}]}
                  selected={field.value ?? ''}
                  title="Status"
                  // defaultValue={unit?.status ?? "empty"}
                  onChange={(e) => {
                    const newValue = e.target.value as "empty" | "filled" | "late";
                    field.onChange(newValue);
                    setStatus(newValue)
                    if (newValue === 'empty') {
                      resetWithEmptyStatus();
                    }
                  }}
                  validate={{
                    error: Boolean(errors.status),
                    message: errors.status?.message ?? ''
                  }}
                />
              )}
            />
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <Controller
              name="periode_pembayaran"
              control={control}
              defaultValue={unit?.periode_pembayaran ?? "year"}
              render={({ field }) => (
                <SelectComponent
                  data={periode}
                  selected={field.value ?? ''}
                  title="Periode Pembayaran"
                  defaultValue={unit?.periode_pembayaran ?? "Belum diisi"}
                  onChange={(e) => {
                    const newValue = e.target.value;
                    field.onChange(newValue);
                  }}
                  validate={{
                    error: Boolean(errors.periode_pembayaran),
                    message: errors.periode_pembayaran?.message ?? ''
                  }}
                />
              )}
            />
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <InputComponent
              title="Kode Unit"
              defaultValue={unit?.name}
              disabled
            />
          </div>
        </div>
        {status != 'empty' &&
          <>
           <div className="flex flex-wrap -mx-3 mb-2">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <Controller
                    name="purchase_type"
                    control={control}
                    defaultValue={unit?.purchase_type ?? ''}
                    render={({ field }) => (
                      <SelectComponent
                        data={purchaseTypeData}
                        selected={field.value ?? ''}
                        title="Jenis Transaksi"
                        defaultValue={unit?.purchase_type ?? "Belum diisi"}
                        onChange={(e) => {
                          const newValue = e.target.value;
                          field.onChange(newValue);
                        }}
                        validate={{
                          error: Boolean(errors.purchase_type),
                          message: errors.purchase_type?.message ?? ''
                        }}
                      />
                    )}
                  />
                
              </div>
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <Controller
                    name="tenor"
                    control={control}
                    defaultValue={String(unit?.tenor ?? 1)}
                    render={({ field }) => (
                      <InputComponent
                        title="Tenor"
                        defaultValue={field.value ?? undefined}
                        onChange={(e) => {
                          const newValue = e.target.value;
                          field.onChange(newValue);
                        }}
                        validate={{
                          error: Boolean(errors.tenor),
                          message: errors.tenor?.message ?? ''
                        }}
                      />
                    )}
                  />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3 mb-6 md:mb-0">
                  <Controller
                  name="nama_penghuni"
                  control={control}
                  defaultValue={unit?.nama_penghuni ?? ''}
                  render={({ field }) => (
                    <InputComponent
                      title="Nama Penghuni"
                      defaultValue={field.value ?? undefined}
                      onChange={(e) => {
                        const newValue = e.target.value;
                        field.onChange(newValue);
                      }}
                      validate={{
                        error: Boolean(errors.nama_penghuni),
                        message: errors.nama_penghuni?.message ?? ''
                      }}
                    />
                  )}
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <Controller
                  name="no_identitas"
                  control={control}
                  defaultValue={unit?.no_identitas ?? ''}
                  render={({ field }) => (
                    <InputComponent
                      title="No. Identitas (NIK, SIM)"
                      defaultValue={field.value ?? undefined}
                      onChange={(e) => {
                        const newValue = e.target.value;
                        field.onChange(newValue);
                      }}
                      validate={{
                        error: Boolean(errors.no_identitas),
                        message: errors.no_identitas?.message ?? ''
                      }}
                    />
                  )}
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <Controller
                  name="alamat"
                  control={control}
                  defaultValue={unit?.alamat ?? ''}
                  render={({ field }) => (
                    <TextAreaComponent 
                      title="Alamat" 
                      defaultValue={field.value ?? undefined} 
                      onChange={(e) => {
                        const newValue = e.target.value;
                        field.onChange(newValue);
                      }}
                      validate={{
                        error: Boolean(errors.alamat),
                        message: errors.alamat?.message ?? ''
                      }} 
                    />
                  )}
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-2">
              <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <Controller
                  name="provinsi"
                  control={control}
                  defaultValue={unit?.provinsi ?? ""}
                  render={({ field }) => (
                    <SelectComponent
                      selected={field.value ?? ''}
                      data={provinces}
                      title="Provinsi"
                      onChange={(e) => {
                        const newValue = e.target.value;
                        field.onChange(newValue);
                        handleFilterCity(newValue)
                        setValue('kota', '')
                      }}
                      validate={{
                        error: Boolean(errors.provinsi),
                        message: errors.provinsi?.message ?? ''
                      }} 
                    />
                  )}
                />
              </div>
              <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <Controller
                  name="kota"
                  control={control}
                  defaultValue={unit?.kota ?? ""}
                  render={({ field }) => (
                    <SelectComponent
                      selected={field.value ?? ''}
                      data={kota ?? []}
                      title="Kota"
                      onChange={(e) => {
                        const newValue = e.target.value;
                        field.onChange(newValue);
                      }}
                      validate={{
                        error: Boolean(errors.kota),
                        message: errors.kota?.message ?? ''
                      }} 
                    />
                  )}
                />
              </div>
              <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <Controller
                  name="kode_pos"
                  control={control}
                  defaultValue={unit?.kode_pos ?? undefined}
                  render={({ field }) => (
                    <InputComponent
                      title="Kode Pos"
                      defaultValue={field.value ?? undefined}
                      onChange={(e) => {
                        const newValue = e.target.value;
                        field.onChange(newValue);
                      }}
                      validate={{
                        error: Boolean(errors.kode_pos),
                        message: errors.kode_pos?.message ?? ''
                      }} 
                    />
                  )}
                />
              </div>
            </div>
            <div className="flex flex-wrap justify-center -mx-3 mb-2">
              <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <Controller
                  name="tanggal_mulai"
                  control={control}
                  defaultValue={unit?.tanggal_mulai ?? undefined}
                  render={({ field }) => (
                    <InputComponent
                      title="Tanggal Mulai"
                      defaultValue={field.value ?? undefined}
                      type="date"
                        onChange={(e) => {
                          const newValue = e.target.value;
                          field.onChange(newValue);
                        }}
                        validate={{
                          error: Boolean(errors.tanggal_mulai),
                          message: errors.tanggal_mulai?.message ?? ''
                        }} 
                      // disabled={unit?.tanggal_mulai != undefined}
                    />
                  )}
                />
              </div>
              {/* <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <InputComponent
                  title="Tanggal Jatuh Tempo"
                  defaultValue={unit?.tanggal_jatuh_tempo ?? undefined}
                  type="date"
                  onChange={(t) => {
                    setValue('tanggal_jatuh_tempo', t.target.value)
                  }}
                  validate={{
                    error: Boolean(errors.tanggal_jatuh_tempo),
                    message: errors.tanggal_jatuh_tempo?.message ?? ''
                  }} 
                />
              </div> */}
            </div>
          </>
        }

        <div className="flex w-full justify-center my-5 items-center space-x-5">
          <button
            className="py-2 px-3 rounded  text-white bg-blue-500 font-bold"
            type="submit"
          >
            Edit
          </button>
          <div
            className="py-2 px-3 rounded  text-white bg-red-500 font-bold cursor-pointer"
            onClick={() => {
              router.back();
            }}
          >
            Cancel
          </div>
        </div>
      </form>
    </WrapperDashboard>
  );
};

export default DetailUnitPage;
