import * as yup from 'yup';

export const KontrakanUpdateSchema = yup.object().shape({
    name: yup
    .string()
    .required('Nama Kontrakan wajib diisi'),
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

export const KontrakanCreateSchema = yup.object().shape({
    name: yup
    .string()
    .required('Nama Kontrakan wajib diisi'),
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