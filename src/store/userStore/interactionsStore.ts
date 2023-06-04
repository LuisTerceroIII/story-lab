import { create } from "zustand"
import { useStoryStore } from "@store/storyStore/storyStore"
import { Story, Interactions } from "@models/models"


interface InteractionsStoreProps extends Interactions {
}
interface InteractionsStoreActions {
    addStoryToFavorites: (id: string) => void
    removeStoryFromFavorites: (id: string) => void
    storyIsInFavorites: (id: string) => boolean
    likedStories: () => Story[]
}

export const useInteractionsStore = create<InteractionsStoreProps & InteractionsStoreActions>((set, get) => ({
    likesStoriesIds : [],
    generatedStoriesIds : [],
    addStoryToFavorites: (id: string) => {
        set({likesStoriesIds: [...get().likesStoriesIds, id]})
    },
    removeStoryFromFavorites: (id: string) => {
        set({likesStoriesIds: get().likesStoriesIds.filter(storyId => storyId !== id)})
    },
    storyIsInFavorites: (id: string) => { return get().likesStoriesIds.includes(id)},
    likedStories: () => {
        return useStoryStore.getState().stories.filter(story => get().likesStoriesIds?.includes(story.id))
    }
}))