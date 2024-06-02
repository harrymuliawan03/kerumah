"use client";

import WrapperDashboard from "@/app/(dashboard)/components/wrapper/WrapperDashboard";
import InputComponent from "@/components/form/Input";
import SelectComponent from "@/components/form/Select";
import TextAreaComponent from "@/components/form/TextArea";
import { periode } from "@/constants/periode";
import { provinces } from "@/constants/provinces";
import {
  UnitModel,
  UpdateUnitRequest,
  UpdateUnitType,
} from "@/models/unit-model";
import {
  CreateKostanCase,
  GetUnitByIdCase,
  UpdateUnitCase,
} from "@/modules/kostan/usecases/kostan/kostan.usecase";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { unitUpdateSchema } from "@/models/schema/unit-schema";
import { cities } from "@/constants/city";
import toast from "react-hot-toast";
import { CreateKostanType } from "@/modules/kostan/models/kostan-model";
import { KostanCreateSchema } from "@/modules/kostan/models/schema";

/* eslint-disable react/no-unescaped-entities */
const AddKostanPage = () => {
  const router = useRouter();

  const [kota, setKota] = useState<{ id?: string; nama: string }[]>();

  const handleFilterCity = (prov: string) => {
    const filteredData = cities.find(
      (item) => item.provinsi.toLowerCase() == prov.toLocaleLowerCase()
    );

    const filteredCity = filteredData?.kota.map((kota, index) => ({
      id: String(index + 1),
      nama: kota,
    }));

    setKota(filteredCity);
  };

  const onSubmit = async (data: CreateKostanType) => {
    const res = await CreateKostanCase(data);

    if (res.success) {
      toast.success("Berhasil membuat kostan");
      router.push("/dashboard/kostan");
    } else {
      toast.error("Gagal membuat kostan");
    }
  };

  const {
    control,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
  } = useForm<CreateKostanType>({
    mode: "all",
    resolver: yupResolver(KostanCreateSchema),
  });

  return (
    <WrapperDashboard>
      <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
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
            <h1 className="font-bold text-2xl text-[#0D1857]">Tambah Kostan</h1>
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-2">
          <div className="w-full px-3 mb-6 md:mb-0">
            <Controller
              name="name"
              control={control}
              render={({ field }) => (
                <InputComponent
                  title="Nama Kostan"
                  onChange={(e) => {
                    const newValue = e.target.value;
                    field.onChange(newValue);
                  }}
                  validate={{
                    error: Boolean(errors.name),
                    message: errors.name?.message ?? "",
                  }}
                />
              )}
            />
          </div>
          <div className="w-full px-3 mb-6 md:mb-0">
            <Controller
              name="alamat"
              control={control}
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
                    message: errors.alamat?.message ?? "",
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
              render={({ field }) => (
                <SelectComponent
                  selected={field.value ?? ""}
                  data={provinces}
                  title="Provinsi"
                  onChange={(e) => {
                    const newValue = e.target.value;
                    field.onChange(newValue);
                    handleFilterCity(newValue);
                    setValue("kota", "");
                  }}
                  validate={{
                    error: Boolean(errors.provinsi),
                    message: errors.provinsi?.message ?? "",
                  }}
                />
              )}
            />
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <Controller
              name="kota"
              control={control}
              render={({ field }) => (
                <SelectComponent
                  selected={field.value ?? ""}
                  data={kota ?? []}
                  title="Kota"
                  onChange={(e) => {
                    const newValue = e.target.value;
                    field.onChange(newValue);
                  }}
                  validate={{
                    error: Boolean(errors.kota),
                    message: errors.kota?.message ?? "",
                  }}
                />
              )}
            />
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <Controller
              name="kode_pos"
              control={control}
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
                    message: errors.kode_pos?.message ?? "",
                  }}
                />
              )}
            />
          </div>
        </div>

        <div className="flex flex-wrap justify-center -mx-3 mb-2">
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <Controller
              name="jml_unit"
              control={control}
              render={({ field }) => (
                <InputComponent
                  title="Jumlah Unit"
                  defaultValue={field.value ?? undefined}
                  type="number"
                  onChange={(e) => {
                    const newValue = e.target.value;
                    field.onChange(newValue);
                  }}
                  validate={{
                    error: Boolean(errors.jml_unit),
                    message: errors.jml_unit?.message ?? "",
                  }}
                  // disabled={unit?.tanggal_mulai != undefined}
                />
              )}
            />
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <Controller
              name="periode_pembayaran"
              control={control}
              render={({ field }) => (
                <SelectComponent
                  data={periode}
                  selected={field.value ?? ""}
                  title="Periode Pembayaran"
                  onChange={(e) => {
                    const newValue = e.target.value;
                    field.onChange(newValue);
                  }}
                  validate={{
                    error: Boolean(errors.periode_pembayaran),
                    message: errors.periode_pembayaran?.message ?? "",
                  }}
                />
              )}
            />
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <Controller
              name="kode_unit"
              control={control}
              render={({ field }) => (
                <InputComponent
                  title="Kode Unit"
                  defaultValue={field.value ?? undefined}
                  onChange={(e) => {
                    const newValue = e.target.value;
                    field.onChange(newValue);
                  }}
                  validate={{
                    error: Boolean(errors.kode_unit),
                    message: errors.kode_unit?.message ?? "",
                  }}
                  // disabled={unit?.tanggal_mulai != undefined}
                />
              )}
            />
          </div>
        </div>

        <div className="flex w-full justify-center my-5 items-center space-x-5">
          <button
            className="py-2 px-3 rounded  text-white bg-blue-500 font-bold"
            type="submit"
          >
            Simpan
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

export default AddKostanPage;
