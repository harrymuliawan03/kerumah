import { DataResponse, HttpResponse } from "@/models/api-response-models";
import {
  CreateUnitRequest,
  UpdateUnitRequest,
  UpdateUnitType,
} from "@/models/unit-model";
import {
  deleteDataWithToken,
  getDataWithToken,
  patchDataWithToken,
  postDataWithToken,
} from "@/utils/api";
import { CreateKostanType, UpdateKostanType } from "../../models/kostan-model";

export const GetKostanRepo = async <T extends DataResponse>() => {
  const res: HttpResponse<T> = await getDataWithToken(`/kostan`);

  return res;
};

export const GetKostanByIdRepo = async <T extends DataResponse>(id: number) => {
  const res: HttpResponse<T> = await getDataWithToken(`/kostan/${id}`);

  return res;
};

export const GetUnitsKostanRepo = async <T extends DataResponse>(
  id: number
) => {
  const res: HttpResponse<T> = await getDataWithToken(
    `/units?id_parent=${id}&type=kostan`
  );

  return res;
};

export const GetUnitsByIdRepo = async <T extends DataResponse>(id: number) => {
  const res: HttpResponse<T> = await getDataWithToken(`/unit/${id}`);

  return res;
};

export const UpdateUnitRepo = async <T extends DataResponse>(
  id: number,
  body: UpdateUnitType
) => {
  const res: HttpResponse<T> = await patchDataWithToken(`/unit/${id}`, body);

  return res;
};

export const DeleteUnitKostanRepo = async <T extends DataResponse>(
  id: number
) => {
  const res: HttpResponse<T> = await deleteDataWithToken(`/unit/${id}`);

  return res;
};

export const CreateUnitKostanRepo = async <T extends DataResponse>(
  body: CreateUnitRequest
) => {
  const res: HttpResponse<T> = await postDataWithToken(`/unit`, body);

  return res;
};

export const UpdateKostanRepo = async <T extends DataResponse>(
  id: number,
  body: UpdateKostanType
) => {
  const res: HttpResponse<T> = await patchDataWithToken(`/kostan/${id}`, body);

  return res;
};

export const DeleteKostanRepo = async <T extends DataResponse>(id: number) => {
  const res: HttpResponse<T> = await deleteDataWithToken(`/kostan/${id}`);

  return res;
};

export const CreateKostanRepo = async <T extends DataResponse>(
  body: CreateKostanType
) => {
  const res: HttpResponse<T> = await postDataWithToken(`/kostan`, body);

  return res;
};

export const BayarUnitKostanRepo = async <T extends DataResponse>(
  id: number
) => {
  const res: HttpResponse<T> = await postDataWithToken(
    `/unit-payment/${id}`,
    null
  );

  return res;
};
