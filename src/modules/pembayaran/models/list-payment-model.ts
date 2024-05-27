export type ListPaymentResponse = {
  tipe: 'perumahan' | 'kontrakan' | 'kostan';
  kode_unit: string;
  nama: string;
  status: number; // Assuming status is 0 or 1 for late or on time
  tanggal_pembayaran: string;
};