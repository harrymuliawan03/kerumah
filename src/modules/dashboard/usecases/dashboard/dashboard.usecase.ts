import { ResponseUseCase } from "@/models/api-response-models";
import Cookies from "js-cookie";
import { CalculationDataResponse } from "../../models/dashboard-model";
import { GetCalculationDataRepo } from "../../repositories/dashboard/dashboard.repository";

export const GetCalculationDataCase = async (): Promise<
  ResponseUseCase<CalculationDataResponse>
> => {
  const res = await GetCalculationDataRepo<CalculationDataResponse>();
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
