import { create } from "zustand";

type State = {
  periode: "Minggu Ini" | "Bulan Ini" | "Tahun Ini";
};

type Actions = {
  setPeriode: (periode: State["periode"]) => void;
};

const useAdminDashboardsPeriodicFilter = create<State & Actions>((set) => ({
  periode: "Bulan Ini",
  setPeriode: (periode) => set(() => ({ periode: periode })),
}));

export default useAdminDashboardsPeriodicFilter;
