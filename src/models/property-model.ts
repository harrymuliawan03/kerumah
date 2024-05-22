export type PropertyModel = {
  id: number;
  name: string;
  provinsi: string;
  kota: string;
  kode_pos: string;
  jml_unit: number;
  periode_pembayaran: "year" | "month";
  kode_unit: string;
  unit_count: number;
  unit_available: number;
  unit_filled: number;
};
