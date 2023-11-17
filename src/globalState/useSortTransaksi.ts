import { create } from "zustand";
import { SortOrder } from "../const/types";

type State = {
  sortBy: "tanggalOrder";
  sortOrder: SortOrder;
};

type Actions = {
  setSortOrder: (sortBy: State["sortOrder"]) => void;
  setSortBy: (sortOrder: State["sortBy"]) => void;
};

const useSortTransaksi = create<State & Actions>((set) => ({
  sortBy: "tanggalOrder",
  sortOrder: "asc",
  setSortBy: (sortBy) => set(() => ({ sortBy: sortBy })),
  setSortOrder: (sortOrder) => set(() => ({ sortOrder: sortOrder })),
}));

export default useSortTransaksi;
