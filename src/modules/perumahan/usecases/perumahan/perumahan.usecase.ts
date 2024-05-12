import { ResponseUseCase } from "@/models/api-response-models";
import { UnitModel, UpdateUnitRequest } from "@/models/unit-model";
import Cookies from "js-cookie";
import { PerumahanResponse } from "../../models/perumahan-model";
import {
  GetPerumahanByIdRepo,
  GetPerumahanRepo,
  GetUnitsByIdRepo,
  GetUnitsPerumahanRepo,
  UpdateUnitRepo,
} from "../../repositories/perumahan/perumahan.repository";

export const GetPerumahanCase = async (): Promise<
  ResponseUseCase<PerumahanResponse[]>
> => {
  const res = await GetPerumahanRepo<PerumahanResponse[]>();
  if (res?.success) {
    return {
      success: true,
      message: res?.message,
      data: res?.data,
    };
  }
  return {
    success: false,
    message: res?.message ?? "gagal mengambil data",
    data: null,
  };
};

export const GetPerumahanByIdCase = async (
  id: number
): Promise<ResponseUseCase<PerumahanResponse>> => {
  const res = await GetPerumahanByIdRepo<PerumahanResponse>(id);
  if (res?.success) {
    return {
      success: true,
      message: res?.message,
      data: res?.data,
    };
  }
  return {
    success: false,
    message: res?.message ?? "gagal mengambil data",
    data: null,
  };
};

export const GetUnitsPerumahanCase = async (
  id: number
): Promise<ResponseUseCase<UnitModel[]>> => {
  const res = await GetUnitsPerumahanRepo<UnitModel[]>(id);
  if (res?.success) {
    return {
      success: true,
      message: res?.message,
      data: res?.data,
    };
  }
  return {
    success: false,
    message: res?.message ?? "gagal mengambil data",
    data: null,
  };
};

export const GetUnitByIdCase = async (
  id: number
): Promise<ResponseUseCase<UnitModel>> => {
  const res = await GetUnitsByIdRepo<UnitModel>(id);
  if (res?.success) {
    return {
      success: true,
      message: res?.message,
      data: res?.data,
    };
  }
  return {
    success: false,
    message: res?.message ?? "gagal mengambil data",
    data: null,
  };
};

export const UpdateUnitCase = async (
  id: number,
  body: UpdateUnitRequest
): Promise<ResponseUseCase<UnitModel>> => {
  const res = await UpdateUnitRepo<UnitModel>(id, body);
  if (res?.success) {
    return {
      success: true,
      message: res?.message,
      data: res?.data,
    };
  }
  return {
    success: false,
    message: res?.message ?? "gagal mengambil data",
    data: null,
  };
};
