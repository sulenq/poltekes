export type FaqItemType = {
  question: string;
  answer: string;
};

export type LandingNavItemType = {
  name: string;
  link: string;
  icon: any;
};

export type DashboardsPeriode = "Minggu Ini" | "Bulan Ini" | "Tahun Ini";

export type SortOrder = "asc" | "desc";

export type SortByKelolaProduk = "namaProduk" | "kategori" | "harga";

export type SortByCustomer = "namaLengkap" | "instansi";

export type userData = {
  alamat_institusi: string;
  createdAt: string;
  email: string;
  hp: string;
  id: number;
  institusi: string;
  jenis: string;
  name: string;
  role: string;
  updated_at: string;
  username: string;
};
