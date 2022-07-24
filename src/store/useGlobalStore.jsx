import create from "zustand";

const useGlobalStore = create((set) => ({
  isToast: false,
  handleIsToast: () => set((state) => ({ isToast: !state.isToast })),
}));

export default useGlobalStore;
