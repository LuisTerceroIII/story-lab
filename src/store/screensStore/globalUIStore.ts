import { create } from "zustand";
import { MainSections } from "../../utils/constant";

interface GlobalUIStoreProps {
    modalIsOpen: boolean
    viewingSection: MainSections
    isViewingHome: () => boolean
    isViewingGenAI: () => boolean
    isViewingSearch: () => boolean
    isViewingFavorites: () => boolean
    isViewingProfile: () => boolean
}
interface GlobalUIStoreActions {
    openModal: () => void
    closeModal: () => void
    goToHome: () => void
    goToGenAI: () => void
    goToSearch: () => void
    goToFavorites: () => void
    goToProfile: () => void
}

export const useGlobalUIStore = create<GlobalUIStoreProps & GlobalUIStoreActions>((set,get) => ({
    modalIsOpen: false,
    viewingSection: MainSections.HOME,
    isViewingHome: () => get().viewingSection === MainSections.HOME,
    isViewingGenAI: () => get().viewingSection === MainSections.GEN_AI,
    isViewingSearch: () => get().viewingSection === MainSections.SEARCH,
    isViewingFavorites: () => get().viewingSection === MainSections.FAVORITES,
    isViewingProfile: () => get().viewingSection === MainSections.PROFILE,
    openModal: () => set({modalIsOpen: true}),
    closeModal: () => set({modalIsOpen: false}),
    goToHome: () => {
        set({viewingSection: MainSections.HOME})
    },
    goToGenAI: () => {
        set({viewingSection: MainSections.GEN_AI})
    },
    goToSearch: () => {
        set({viewingSection: MainSections.SEARCH})
    },
    goToFavorites: () => {
        set({viewingSection: MainSections.FAVORITES})
    },
    goToProfile: () => {
        set({viewingSection: MainSections.PROFILE})
    }
}))