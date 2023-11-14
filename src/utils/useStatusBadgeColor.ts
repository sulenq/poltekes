const useStatusBadgeColor = (status: string) => {
  switch (status) {
    default:
      return "blue";
    case "Verifikasi Berkas":
    case "Verifikasi Pembayaran":
      return "orange";
    case "Berkas Diverifikasi":
    case "Pembayaran Diverifikasi":
    case "Pengujian Selesai":
      return "green";
    case "Berkas Ditolak":
    case "Berkas Belum Lengkap":
    case "Tagihan Belum Dibayar":
      return "red";
  }
};

export default useStatusBadgeColor;
