import { create } from "zustand"
import { useStoryStore } from "../storyStore/storyStore"
import { Story } from "../../../types/types"

interface InteractionsStoreProps {
    likesStoriesIds: string[]
}
interface InteractionsStoreActions {
    addStoryToFavorites: () => void
    removeStoryFromFavorites: () => void
    storyIsInFavorites: () => boolean
    likedStories: () => Story[]
}

export const useInteractionsStore = create<InteractionsStoreProps & InteractionsStoreActions>((set, get) => ({
    likesStoriesIds : [],
    addStoryToFavorites: () => {
        set({likesStoriesIds: [...get().likesStoriesIds, useStoryStore.getState().actionStory?.id]})
    },
    removeStoryFromFavorites: () => {
        set({likesStoriesIds: get().likesStoriesIds.filter(storyId => storyId !== useStoryStore.getState().actionStory?.id)})
    },
    storyIsInFavorites: () => { return get().likesStoriesIds.includes(useStoryStore.getState().actionStory?.id)},
    likedStories: () => {
        return useStoryStore.getState().stories.filter(story => get().likesStoriesIds?.includes(story.id))
    }
}))