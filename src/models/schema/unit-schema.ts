import * as yup from 'yup';

export const unitUpdateSchema = yup.object().shape({
    status: yup
    .string()
    .required('Status wajib diisi'),
    periode_pembayaran: yup
    .string()
    .required('Periode pembayaran wajib diisi'),
    purchase_type: yup
    .string()
    .required('Purchase type wajib diisi'),
    tenor: yup
    .string()
    .required('Tenor wajib diisi'),
    nama_penghuni: yup
    .string()
    .required('Nama penghuni wajib diisi'),
    no_identitas: yup
    .string()
    .required('No. identitas wajib diisi'),
    alamat: yup
    .string()
    .required('Alamat wajib diisi'),
    provinsi: yup
    .string()
    .nullable(),
    kota: yup
    .string()
    .nullable(),
    kode_pos: yup
    .string()
    .nullable(),
    tanggal_mulai: yup
    .string()
    .nullable(),
    tanggal_jatuh_tempo: yup
    .string()
    .nullable(),
})
