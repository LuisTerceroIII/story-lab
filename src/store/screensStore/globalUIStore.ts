import { create } from "zustand";

interface GlobalUIStoreProps {
    modalIsOpen: boolean
}
interface GlobalUIStoreActions {

    openModal: () => void
    closeModal: () => void
}

export const useGlobalUIStore = create<GlobalUIStoreProps & GlobalUIStoreActions>((set,get) => ({
    modalIsOpen: false,
    openModal: () => set({modalIsOpen: true}),
    closeModal: () => set({modalIsOpen: false})
}))