import { create } from "zustand"

interface InteractionsStoreProps {
    likesStoriesIds: string[]
}
interface InteractionsStoreActions {
    likeStory: (id: string) => void
}

export const useInteractionsStore = create<InteractionsStoreProps & InteractionsStoreActions>((set, get) => ({
    likesStoriesIds : [],
    likeStory: (id: string) => {
        set({likesStoriesIds: [...get().likesStoriesIds, id]})
    }
}))