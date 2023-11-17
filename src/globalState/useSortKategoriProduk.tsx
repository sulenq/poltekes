import { create } from "zustand";
import { SortOrder } from "../const/types";

type State = {
  sortBy: "namaKategori";
  sortOrder: SortOrder;
};

type Actions = {
  setSortOrder: (sortBy: State["sortOrder"]) => void;
  setSortBy: (sortOrder: State["sortBy"]) => void;
};

const useSortKategoriProduk = create<State & Actions>((set) => ({
  sortBy: "namaKategori",
  sortOrder: "asc",
  setSortBy: (sortBy) => set(() => ({ sortBy: sortBy })),
  setSortOrder: (sortOrder) => set(() => ({ sortOrder: sortOrder })),
}));

export default useSortKategoriProduk;
