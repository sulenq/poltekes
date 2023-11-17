import { create } from "zustand";
import { SortByCustomer, SortOrder } from "../const/types";

type State = {
  sortBy: SortByCustomer;
  sortOrder: SortOrder;
};

type Actions = {
  setSortOrder: (sortBy: State["sortOrder"]) => void;
  setSortBy: (sortOrder: State["sortBy"]) => void;
};

const useSortCustomer = create<State & Actions>((set) => ({
  sortBy: "namaLengkap",
  sortOrder: "asc",
  setSortBy: (sortBy) => set(() => ({ sortBy: sortBy })),
  setSortOrder: (sortOrder) => set(() => ({ sortOrder: sortOrder })),
}));

export default useSortCustomer;
