export type KostanResponse = {
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

export type UpdateKostanType = {
  name: string;
  provinsi: string;
  kota: string;
  kode_pos: string;
  jml_unit: number;
  periode_pembayaran: string;
  kode_unit: string;
};

export type CreateKostanType = {
  name: string;
  alamat: string;
  provinsi: string;
  kota: string;
  kode_pos: string;
  jml_unit: number;
  periode_pembayaran: string;
  kode_unit: string;
};
