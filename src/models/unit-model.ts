export type UnitModel = {
  id: number;
  name: string;
  kode_unit: string;
  user_id: number;
  id_parent: number;
  type: string;
  status: "empty" | "filled" | "late";
  periode_pembayaran: "year" | "month";
  purchase_type: "sewa" | "angsuran";
  tenor: number | null;
  nama_penghuni: string | null;
  no_identitas: string | null;
  alamat: string | null;
  provinsi: string | null;
  kota: string | null;
  kode_pos: string | null;
  tanggal_mulai: string | null;
  tanggal_jatuh_tempo: string | null;
};

export type UpdateUnitRequest = {
  status: "empty" | "filled" | "late";
  periode_pembayaran: "year" | "month";
  nama_penghuni: string | null;
  no_identitas: string | null;
  alamat: string | null;
  provinsi: string | null;
  kota: string | null;
  kode_pos: number | null;
  tanggal_mulai: string | null;
  tanggal_jatuh_tempo: string | null;
};

export type UpdateUnitType = {
  status: string;
  periode_pembayaran: string;
  purchase_type: string;
  tenor: string;
  nama_penghuni: string;
  no_identitas: string;
  alamat: string;
  provinsi?: string | null;
  kota?: string | null;
  kode_pos?: string | null;
  tanggal_mulai?: string | null;
  tanggal_jatuh_tempo?: string | null;
};

export type CreateUnitRequest = {
  // kode_unit: string;
  id_parent: number;
  jumlah_unit: number;
  type: "perumahan" | "kontrakan" | "kostan";
};
