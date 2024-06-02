import { ResponseUseCase } from "@/models/api-response-models";
import {
  CreateUnitRequest,
  UnitModel,
  UpdateUnitRequest,
  UpdateUnitType,
} from "@/models/unit-model";
import Cookies from "js-cookie";
import {
  CreatePerumahanType,
  PerumahanResponse,
  UpdatePerumahanType,
} from "../../models/perumahan-model";
import {
  BayarUnitPerumahanRepo,
  CreatePerumahanRepo,
  CreateUnitPerumahanRepo,
  DeletePerumahanRepo,
  DeleteUnitPerumahanRepo,
  GetPerumahanByIdRepo,
  GetPerumahanRepo,
  GetUnitsByIdRepo,
  GetUnitsPerumahanRepo,
  UpdatePerumahanRepo,
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

export const DeleteUnitPerumahanCase = async (
  id: number
): Promise<ResponseUseCase<UnitModel>> => {
  const res = await DeleteUnitPerumahanRepo<UnitModel>(id);
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

export const CreateUnitPerumahanCase = async (
  body: CreateUnitRequest
): Promise<ResponseUseCase<UnitModel>> => {
  const res = await CreateUnitPerumahanRepo<UnitModel>(body);
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

export const UpdatePerumahanCase = async (
  id: number,
  body: UpdatePerumahanType
): Promise<ResponseUseCase<PerumahanResponse>> => {
  const res = await UpdatePerumahanRepo<PerumahanResponse>(id, body);
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

export const DeletePerumahanCase = async (
  id: number
): Promise<ResponseUseCase<PerumahanResponse>> => {
  const res = await DeletePerumahanRepo<PerumahanResponse>(id);
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

export const CreatePerumahanCase = async (
  body: CreatePerumahanType
): Promise<ResponseUseCase<PerumahanResponse>> => {
  const res = await CreatePerumahanRepo<PerumahanResponse>(body);
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

export const BayarUnitPerumahanCase = async (
  id: number
): Promise<ResponseUseCase<PerumahanResponse>> => {
  const res = await BayarUnitPerumahanRepo<PerumahanResponse>(id);
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
