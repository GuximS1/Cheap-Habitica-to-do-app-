import create from "zustand";
import { devtools, persist } from "zustand/middleware";
interface props {
  data: [
    {
      id: string;
      description: string;
      color: string;
      completed: boolean;
    }
  ];
  setData: (obj: any) => void;
}
let dev = (set: any) => ({
  data: [
    {
      id: "",
      description: "",
      color: "",
      completed: false,
    },
  ],
  setData: (obj: any) => set((state: any) => ({ data: [...state.data, obj] })),
});

const useStore = create<any>(devtools(persist(dev, { name: "nekoesi" })));

export default useStore;
