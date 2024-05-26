import * as yup from "yup";

export const KostanUpdateSchema = yup.object().shape({
  name: yup.string().required("Nama Kostan wajib diisi"),
  provinsi: yup.string().required(),
  kota: yup.string().required(),
  kode_pos: yup.string().required(),
  jml_unit: yup.number().required("Jumlah unit wajib diisi"),
  periode_pembayaran: yup.string().required("Periode pembayaran wajib diisi"),
  kode_unit: yup.string().required(),
});

export const KostanCreateSchema = yup.object().shape({
  name: yup.string().required("Nama Kostan wajib diisi"),
  alamat: yup.string().required("Alamat wajib diisi"),
  provinsi: yup.string().required(),
  kota: yup.string().required(),
  kode_pos: yup.string().required(),
  jml_unit: yup.number().required("Jumlah unit wajib diisi"),
  periode_pembayaran: yup.string().required("Periode pembayaran wajib diisi"),
  kode_unit: yup.string().required(),
});
