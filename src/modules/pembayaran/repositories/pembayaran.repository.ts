import { DataResponse, HttpResponse } from "@/models/api-response-models";
import { getDataWithToken } from "@/utils/api";

export const GetPaymentListRepo = async <T extends DataResponse>() => {
  const res: HttpResponse<T> = await getDataWithToken(`/payments`);

  return res;
};

export const GetPaymentListByKeywordRepo = async <T extends DataResponse>(keyword: string) => {
  const res: HttpResponse<T> = await getDataWithToken(`/payments/search?keyword=${keyword}`);

  return res;
};