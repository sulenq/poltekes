const useStatusBadgeColor = (status: string) => {
  switch (status) {
    default:
      return "blue";
    case "Verifikasi Berkas":
    case "Verifikasi Berkas Lanjutan":
    case "Unggah Berkas Lanjutan":
      return "orange";
    case "Berkas Diverifikasi":
    case "Pengujian Selesai":
      return "green";
    case "Berkas Ditolak":
    case "Berkas Belum Lengkap":
    case "Verifikasi Berkas Ditolak":
    case "Verifikasi Berkas Lanjutan Ditolak":
    case "Belum Memilih Metode Uji":
      return "red";
  }
};

export default useStatusBadgeColor;
