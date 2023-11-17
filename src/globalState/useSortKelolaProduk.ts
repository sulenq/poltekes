import { create } from "zustand";
import { SortKelolaProduk, SortType } from "../const/types";

type State = {
  sortBy: SortType;
  sortOrder: SortKelolaProduk;
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
