import { create } from "zustand"
import { useStoryStore } from "../../store/storyStore/storyStore"
import { Story, Interactions } from "../../types/models"


interface InteractionsStoreProps extends Interactions {

}
interface InteractionsStoreActions {
    addStoryToFavorites: (id: string) => void
    removeStoryFromFavorites: (id: string) => void
    storyIsInFavorites: (id: string) => boolean
    likedStories: () => Story[]

    addStoryToMyGenAI: (story: Story) => void
    removeStoryFromFGenAI: (id: string) => void
    storyIsInGenAI: (id: string) => boolean
    genAIStories: () => Story[]

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
    },
    addStoryToMyGenAI: (story: Story) => {
        set({generatedStoriesIds: [...get().generatedStoriesIds,story?.id]})
        useStoryStore.getState().addStory(story)
    },
    removeStoryFromFGenAI: (id: string) => {
        useStoryStore.getState().removeStory(id)
        set({generatedStoriesIds: get().generatedStoriesIds.filter(storyId => storyId !== id)})
    },
    storyIsInGenAI: (id: string) => { return get().generatedStoriesIds.includes(id)},
    genAIStories: () => {
        return useStoryStore.getState().stories.filter(story => get().generatedStoriesIds?.includes(story.id))
    }

}))