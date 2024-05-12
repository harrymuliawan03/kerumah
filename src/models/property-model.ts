export type PropertyModel = {
  id: number;
  name: string;
  provinsi: string;
  kota: string;
  kode_pos: number;
  jml_unit: number;
  periode_pembayaran: "year" | "month";
  kode_unit: string;
  unit_count: number;
  unit_available: number;
  unit_filled: number;
};
