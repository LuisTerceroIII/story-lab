import { create } from "zustand";
import { nanoid } from 'nanoid'
import { OpenAIService } from "../../services/openAI.service";
import { stories } from "../../util/stories";
interface StoryPrompt {

}
interface Story {
    id: string,
    title: string,
    imgURL: string,
    story: string,
    ownerId?: string,
}

interface StoryStoreProps {
    stories: Story[]
    actionStory: Story | null
    currentStoryIndex: number
    loadingStory: boolean
    hasPrevStory: () => boolean
    hasNextStory: () => boolean
}
interface StoryStoreAction {
    generateStory: (input: string) => Promise<void>
    setActionStory: (id: string) => void
    prevStory(): void
    nextStory(): void
}

export const useStoryStore = create<StoryStoreProps & StoryStoreAction>((set, get) => ({
    stories: [...stories],
    actionStory: stories[0],
    currentStoryIndex: 0,
    loadingStory: false,
    hasPrevStory: () => get().currentStoryIndex > 0,
    hasNextStory: () => get().currentStoryIndex < get().stories.length - 1,
    generateStory : async (input: string) => {
        set({loadingStory: true})
        const res = await OpenAIService.getHistory(input)
        const id = () => nanoid()
        const story: Story = {
            //@ts-ignore
            id,
            title: input, 
            imgURL: "", 
            story: res, 
            ownerId: "0"
        }
        set({ stories: [...get().stories, story]})
        set({actionStory: story})
        set({loadingStory: false})
    },
    setActionStory: (id: string) => {
        const story = get().stories.find(story => story.id === id)
        if (story) {
            set({actionStory: story})
        }
    },
    prevStory: () => {
        set({currentStoryIndex: get().currentStoryIndex - 1})
        set( state => ({
            actionStory: state.stories[state.currentStoryIndex]
        }))
    },
    nextStory: () => {
        set({currentStoryIndex: get().currentStoryIndex + 1})
        set( state => ({
            actionStory: state.stories[state.currentStoryIndex]
        }))

    },

}))