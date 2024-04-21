export type CalculationDataResponse = {
  total_properties: number;
  total_units: number;
  available_units: number;
  filled_units: number;
  late_payment_count: number;
  labels: string[];
  list_payment_late: number[];
  list_empty_properties: number[];
};
