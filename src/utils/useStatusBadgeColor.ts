const useStatusBadgeColor = (status: string) => {
  switch (status) {
    default:
      return "blue";
    case "Verifikasi Berkas":
    case "Verifikasi Berkas Lanjutan":
      return "orange";
    case "Pengujian Selesai":
      return "green";
    case "Berkas Ditolak":
    case "Berkas Belum Lengkap":
    case "Verifikasi Berkas Ditolak":
    case "Verifikasi Berkas Lanjutan Ditolak":
    case "Metode Uji Belum Dipilih":
    case "Berkas Lanjutan Belum Diunggah":
      return "red";
  }
};

export default useStatusBadgeColor;
