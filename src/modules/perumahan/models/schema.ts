import * as yup from 'yup';

export const PerumahanUpdateSchema = yup.object().shape({
    name: yup
    .string()
    .required('Nama perumahan wajib diisi'),
    provinsi: yup
    .string()
    .required(),
    kota: yup
    .string()
    .required(),
    kode_pos: yup
    .string()
    .required(),
    jml_unit: yup
    .number()
    .required('Jumlah unit wajib diisi'),
    periode_pembayaran: yup
    .string()
    .required('Periode pembayaran wajib diisi'),
    kode_unit: yup
    .string()
    .required(),
})

export const PerumahanCreateSchema = yup.object().shape({
    name: yup
    .string()
    .required('Nama perumahan wajib diisi'),
    alamat: yup
    .string()
    .required('Alamat wajib diisi'),
    provinsi: yup
    .string()
    .required(),
    kota: yup
    .string()
    .required(),
    kode_pos: yup
    .string()
    .required(),
    jml_unit: yup
    .number()
    .required('Jumlah unit wajib diisi'),
    periode_pembayaran: yup
    .string()
    .required('Periode pembayaran wajib diisi'),
    kode_unit: yup
    .string()
    .required(),
})