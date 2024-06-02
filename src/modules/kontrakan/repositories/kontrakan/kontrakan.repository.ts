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
import {
  CreateKontrakanType,
  UpdateKontrakanType,
} from "../../models/kontrakan-model";

export const GetKontrakanRepo = async <T extends DataResponse>() => {
  const res: HttpResponse<T> = await getDataWithToken(`/kontrakan`);

  return res;
};

export const GetKontrakanByIdRepo = async <T extends DataResponse>(
  id: number
) => {
  const res: HttpResponse<T> = await getDataWithToken(`/kontrakan/${id}`);

  return res;
};

export const GetUnitsKontrakanRepo = async <T extends DataResponse>(
  id: number
) => {
  const res: HttpResponse<T> = await getDataWithToken(
    `/units?id_parent=${id}&type=kontrakan`
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

export const DeleteUnitKontrakanRepo = async <T extends DataResponse>(
  id: number
) => {
  const res: HttpResponse<T> = await deleteDataWithToken(`/unit/${id}`);

  return res;
};

export const CreateUnitKontrakanRepo = async <T extends DataResponse>(
  body: CreateUnitRequest
) => {
  const res: HttpResponse<T> = await postDataWithToken(`/unit`, body);

  return res;
};

export const UpdateKontrakanRepo = async <T extends DataResponse>(
  id: number,
  body: UpdateKontrakanType
) => {
  const res: HttpResponse<T> = await patchDataWithToken(
    `/kontrakan/${id}`,
    body
  );

  return res;
};

export const DeleteKontrakanRepo = async <T extends DataResponse>(
  id: number
) => {
  const res: HttpResponse<T> = await deleteDataWithToken(`/kontrakan/${id}`);

  return res;
};

export const CreateKontrakanRepo = async <T extends DataResponse>(
  body: CreateKontrakanType
) => {
  const res: HttpResponse<T> = await postDataWithToken(`/kontrakan`, body);

  return res;
};

export const BayarUnitKontrakanRepo = async <T extends DataResponse>(
  id: number
) => {
  const res: HttpResponse<T> = await postDataWithToken(
    `/unit-payment/${id}`,
    null
  );

  return res;
};
