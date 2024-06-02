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
  CreatePerumahanType,
  UpdatePerumahanType,
} from "../../models/perumahan-model";

export const GetPerumahanRepo = async <T extends DataResponse>() => {
  const res: HttpResponse<T> = await getDataWithToken(`/perumahan`);

  return res;
};

export const GetPerumahanByIdRepo = async <T extends DataResponse>(
  id: number
) => {
  const res: HttpResponse<T> = await getDataWithToken(`/perumahan/${id}`);

  return res;
};

export const GetUnitsPerumahanRepo = async <T extends DataResponse>(
  id: number
) => {
  const res: HttpResponse<T> = await getDataWithToken(
    `/units?id_parent=${id}&type=perumahan`
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

export const DeleteUnitPerumahanRepo = async <T extends DataResponse>(
  id: number
) => {
  const res: HttpResponse<T> = await deleteDataWithToken(`/unit/${id}`);

  return res;
};

export const CreateUnitPerumahanRepo = async <T extends DataResponse>(
  body: CreateUnitRequest
) => {
  const res: HttpResponse<T> = await postDataWithToken(`/unit`, body);

  return res;
};

export const UpdatePerumahanRepo = async <T extends DataResponse>(
  id: number,
  body: UpdatePerumahanType
) => {
  const res: HttpResponse<T> = await patchDataWithToken(
    `/perumahan/${id}`,
    body
  );

  return res;
};

export const DeletePerumahanRepo = async <T extends DataResponse>(
  id: number
) => {
  const res: HttpResponse<T> = await deleteDataWithToken(`/perumahan/${id}`);

  return res;
};

export const CreatePerumahanRepo = async <T extends DataResponse>(
  body: CreatePerumahanType
) => {
  const res: HttpResponse<T> = await postDataWithToken(`/perumahan`, body);

  return res;
};

export const BayarUnitPerumahanRepo = async <T extends DataResponse>(
  id: number
) => {
  const res: HttpResponse<T> = await postDataWithToken(
    `/unit-payment/${id}`,
    null
  );

  return res;
};
