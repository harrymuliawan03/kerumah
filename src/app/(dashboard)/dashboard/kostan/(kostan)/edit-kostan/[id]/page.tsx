"use client";

import WrapperDashboard from "@/app/(dashboard)/components/wrapper/WrapperDashboard";
import InputComponent from "@/components/form/Input";
import SelectComponent from "@/components/form/Select";
import { periode } from "@/constants/periode";
import { provinces } from "@/constants/provinces";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { cities } from "@/constants/city";
import toast from "react-hot-toast";
import {
  KostanResponse,
  UpdateKostanType,
} from "@/modules/kostan/models/kostan-model";
import {
  GetKostanByIdCase,
  UpdateKostanCase,
} from "@/modules/kostan/usecases/kostan/kostan.usecase";
import { KostanUpdateSchema } from "@/modules/kostan/models/schema";

/* eslint-disable react/no-unescaped-entities */
const EditKostanPage = ({ params }: { params: { id: number } }) => {
  const router = useRouter();

  const [kostan, setKostan] = useState<KostanResponse>();
  const [kota, setKota] = useState<{ id?: string; nama: string }[]>();
  const [dueDate, setDueDate] = useState<Date>();
  const [status, setStatus] = useState<"empty" | "filled" | "late">("empty");
  const currentDate = new Date();

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

  const getUnit = async () => {
    const res = await GetKostanByIdCase(params.id);

    if (res.success) {
      setKostan(res.data!);
      setValue("name", res.data?.name ?? "");
      setValue("provinsi", res.data?.provinsi ?? "");
      setValue("kota", res.data?.kota ?? "");
      setValue("kode_pos", res.data?.kode_pos ?? "");
      setValue("periode_pembayaran", res.data!.periode_pembayaran);
      setValue("jml_unit", res.data?.jml_unit ?? 0);
      setValue("kode_unit", res.data?.kode_unit ?? "");
      handleFilterCity(res.data?.provinsi ?? "");
    } else {
      setKostan(undefined);
    }
  };

  const onSubmit = async (data: UpdateKostanType) => {
    const res = await UpdateKostanCase(params.id, data);

    if (res.success) {
      toast.success("Update Berhasil");
    } else {
      toast.error("Update Gagal");
    }
  };

  useEffect(() => {
    getUnit();
  }, []);

  const {
    control,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
  } = useForm<UpdateKostanType>({
    mode: "all",
    resolver: yupResolver(KostanUpdateSchema),
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
        </div>
        <div className="flex flex-wrap -mx-3 mb-2">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <Controller
              name="name"
              control={control}
              defaultValue={kostan?.name}
              render={({ field }) => (
                <InputComponent
                  title="Nama Kostan"
                  defaultValue={field.value ?? undefined}
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
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <Controller
              name="kode_unit"
              control={control}
              defaultValue={kostan?.kode_unit}
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
                />
              )}
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-2">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <Controller
              name="jml_unit"
              control={control}
              defaultValue={kostan?.jml_unit}
              render={({ field }) => (
                <InputComponent
                  title="Jumlah Unit"
                  defaultValue={field.value ?? undefined}
                  onChange={(e) => {
                    const newValue = e.target.value;
                    field.onChange(newValue);
                  }}
                  validate={{
                    error: Boolean(errors.jml_unit),
                    message: errors.jml_unit?.message ?? "",
                  }}
                />
              )}
            />
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <Controller
              name="periode_pembayaran"
              control={control}
              defaultValue={kostan?.periode_pembayaran ?? "year"}
              render={({ field }) => (
                <SelectComponent
                  data={periode}
                  selected={field.value ?? ""}
                  title="Periode Pembayaran"
                  defaultValue={kostan?.periode_pembayaran ?? "Belum diisi"}
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
        </div>
        <div className="flex flex-wrap -mx-3 mb-2">
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <Controller
              name="provinsi"
              control={control}
              defaultValue={kostan?.provinsi ?? ""}
              render={({ field }) => (
                <SelectComponent
                  selected={field.value.toUpperCase() ?? ""}
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
              defaultValue={kostan?.kota ?? ""}
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
              defaultValue={kostan?.kode_pos ?? undefined}
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

export default EditKostanPage;
