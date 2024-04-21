import { DataResponse, HttpResponse } from "@/models/api-response-models";
import { getDataWithToken } from "@/utils/api";

export const GetCalculationDataRepo = async <T extends DataResponse>() => {
  const res: HttpResponse<T> = await getDataWithToken(`/data-calculation`);

  return res;
};
