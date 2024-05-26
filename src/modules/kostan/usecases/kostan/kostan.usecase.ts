import { ResponseUseCase } from "@/models/api-response-models";
import {
  CreateUnitRequest,
  UnitModel,
  UpdateUnitRequest,
  UpdateUnitType,
} from "@/models/unit-model";
import Cookies from "js-cookie";
import {
  CreateKostanType,
  KostanResponse,
  UpdateKostanType,
} from "../../models/kostan-model";
import {
  CreateKostanRepo,
  CreateUnitKostanRepo,
  DeleteKostanRepo,
  DeleteUnitKostanRepo,
  GetKostanByIdRepo,
  GetKostanRepo,
  GetUnitsByIdRepo,
  GetUnitsKostanRepo,
  UpdateKostanRepo,
  UpdateUnitRepo,
} from "../../repositories/kostan/kostan.repository";

export const GetKostanCase = async (): Promise<
  ResponseUseCase<KostanResponse[]>
> => {
  const res = await GetKostanRepo<KostanResponse[]>();
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

export const GetKostanByIdCase = async (
  id: number
): Promise<ResponseUseCase<KostanResponse>> => {
  const res = await GetKostanByIdRepo<KostanResponse>(id);
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

export const GetUnitsKostanCase = async (
  id: number
): Promise<ResponseUseCase<UnitModel[]>> => {
  const res = await GetUnitsKostanRepo<UnitModel[]>(id);
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
  body: UpdateUnitType
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

export const DeleteUnitKostanCase = async (
  id: number
): Promise<ResponseUseCase<UnitModel>> => {
  const res = await DeleteUnitKostanRepo<UnitModel>(id);
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

export const CreateUnitKostanCase = async (
  body: CreateUnitRequest
): Promise<ResponseUseCase<UnitModel>> => {
  const res = await CreateUnitKostanRepo<UnitModel>(body);
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

export const UpdateKostanCase = async (
  id: number,
  body: UpdateKostanType
): Promise<ResponseUseCase<KostanResponse>> => {
  const res = await UpdateKostanRepo<KostanResponse>(id, body);
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

export const DeleteKostanCase = async (
  id: number
): Promise<ResponseUseCase<KostanResponse>> => {
  const res = await DeleteKostanRepo<KostanResponse>(id);
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

export const CreateKostanCase = async (
  body: CreateKostanType
): Promise<ResponseUseCase<KostanResponse>> => {
  const res = await CreateKostanRepo<KostanResponse>(body);
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
