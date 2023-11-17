import { create } from "zustand";
import { SortOrder, SortByKelolaProduk } from "../const/types";

type State = {
  sortBy: SortByKelolaProduk;
  sortOrder: SortOrder;
};

type Actions = {
  setSortOrder: (sortOrder: State["sortOrder"]) => void;
  setSortBy: (sortOrder: State["sortBy"]) => void;
};

const useSortKelolaProduk = create<State & Actions>((set) => ({
  sortBy: "namaProduk",
  sortOrder: "asc",
  setSortBy: (sortBy) => set(() => ({ sortBy: sortBy })),
  setSortOrder: (sortOrder) => set(() => ({ sortOrder: sortOrder })),
}));

export default useSortKelolaProduk;
