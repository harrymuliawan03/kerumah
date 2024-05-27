import { ResponseUseCase } from "@/models/api-response-models";
import { ListPaymentResponse } from "../models/list-payment-model";
import { GetPaymentListByKeywordRepo, GetPaymentListRepo } from "../repositories/pembayaran.repository";

export const GetPaymentListCase = async (): Promise<
  ResponseUseCase<ListPaymentResponse[]>
> => {
  const res = await GetPaymentListRepo<ListPaymentResponse[]>();
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

export const GetPaymentListByKeywordCase = async (keyword: string): Promise<
  ResponseUseCase<ListPaymentResponse[]>
> => {
  const res = await GetPaymentListByKeywordRepo<ListPaymentResponse[]>(keyword);
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