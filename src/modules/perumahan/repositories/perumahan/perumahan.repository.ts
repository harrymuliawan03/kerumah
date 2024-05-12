import { DataResponse, HttpResponse } from "@/models/api-response-models";
import { UpdateUnitRequest } from "@/models/unit-model";
import { getDataWithToken, patchDataWithToken } from "@/utils/api";

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
  body: UpdateUnitRequest
) => {
  const res: HttpResponse<T> = await patchDataWithToken(`/unit/${id}`, body);

  return res;
};
