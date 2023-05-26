import create from "zustand";

interface HomeUIProps {
    catName: string
    setCatName: (catName: string) => void
}
interface HomeUIActions {

}
export const useHomeUIStore = create<HomeUIProps & HomeUIActions>((set, get) => ({
    catName: "Ronalda",
    setCatName: (catName: string) => set({ catName })
}))