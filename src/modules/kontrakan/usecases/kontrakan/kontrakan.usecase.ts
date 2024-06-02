import { ResponseUseCase } from "@/models/api-response-models";
import {
  CreateUnitRequest,
  UnitModel,
  UpdateUnitRequest,
  UpdateUnitType,
} from "@/models/unit-model";
import Cookies from "js-cookie";
import {
  CreateKontrakanType,
  KontrakanResponse,
  UpdateKontrakanType,
} from "../../models/kontrakan-model";
import {
  BayarUnitKontrakanRepo,
  CreateKontrakanRepo,
  CreateUnitKontrakanRepo,
  DeleteKontrakanRepo,
  DeleteUnitKontrakanRepo,
  GetKontrakanByIdRepo,
  GetKontrakanRepo,
  GetUnitsByIdRepo,
  GetUnitsKontrakanRepo,
  UpdateKontrakanRepo,
  UpdateUnitRepo,
} from "../../repositories/kontrakan/kontrakan.repository";

export const GetKontrakanCase = async (): Promise<
  ResponseUseCase<KontrakanResponse[]>
> => {
  const res = await GetKontrakanRepo<KontrakanResponse[]>();
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

export const GetKontrakanByIdCase = async (
  id: number
): Promise<ResponseUseCase<KontrakanResponse>> => {
  const res = await GetKontrakanByIdRepo<KontrakanResponse>(id);
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

export const GetUnitsKontrakanCase = async (
  id: number
): Promise<ResponseUseCase<UnitModel[]>> => {
  const res = await GetUnitsKontrakanRepo<UnitModel[]>(id);
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

export const DeleteUnitKontrakanCase = async (
  id: number
): Promise<ResponseUseCase<UnitModel>> => {
  const res = await DeleteUnitKontrakanRepo<UnitModel>(id);
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

export const CreateUnitKontrakanCase = async (
  body: CreateUnitRequest
): Promise<ResponseUseCase<UnitModel>> => {
  const res = await CreateUnitKontrakanRepo<UnitModel>(body);
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

export const UpdateKontrakanCase = async (
  id: number,
  body: UpdateKontrakanType
): Promise<ResponseUseCase<KontrakanResponse>> => {
  const res = await UpdateKontrakanRepo<KontrakanResponse>(id, body);
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

export const DeleteKontrakanCase = async (
  id: number
): Promise<ResponseUseCase<KontrakanResponse>> => {
  const res = await DeleteKontrakanRepo<KontrakanResponse>(id);
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

export const CreateKontrakanCase = async (
  body: CreateKontrakanType
): Promise<ResponseUseCase<KontrakanResponse>> => {
  const res = await CreateKontrakanRepo<KontrakanResponse>(body);
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

export const BayarUnitKontrakanCase = async (
  id: number
): Promise<ResponseUseCase<KontrakanResponse>> => {
  const res = await BayarUnitKontrakanRepo<KontrakanResponse>(id);
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
