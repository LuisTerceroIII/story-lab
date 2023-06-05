import { create } from "zustand";
import { nanoid } from 'nanoid'
import { OpenAIService } from "../../services/openAI/openAiService";
import { stories } from "../../utils/stories";
import { StoriesCategories, Story } from "../../types/models";
import { useNavigation } from "@react-navigation/native";
import { ScreenName } from "../../routes/screenNames"

interface StoryStoreProps {
    stories: Story[]
    actionStory: Story | null
    loadingStory: boolean
    getCategoryLabel: (category: StoriesCategories) => string
    getShuffleStories: () => Story[]
}
interface StoryStoreAction {
    generateStory: (input: string) => Promise<void>
    setActionStory: (id: string) => void
}

export const useStoryStore = create<StoryStoreProps & StoryStoreAction>((set, get) => ({
    stories: [...stories],
    actionStory: stories[0],
    loadingStory: false,
    generateStory : async (input: string) => {
        set({loadingStory: true})
        const res = await OpenAIService.getHistory(input)
        const id = () => nanoid()
        const story: Story = {
            //@ts-ignore
            id,
            title: input,
            category: StoriesCategories.ANIMALS,
            content: res, 
            ownerId: "0"
        }
        set({stories: [...get().stories, story]})
        set({actionStory: story})
        set({loadingStory: false})
    },
    setActionStory: (id: string) => {
        const story = get().stories.find(story => story.id === id)
        if (story) {
            set({actionStory: story})
        }
    },
    getShuffleStories: () => {
        return get().stories.sort(() => Math.random() - 0.5)
    },
    getCategoryLabel: (category: StoriesCategories) => {
        switch (category) {
            case StoriesCategories.ANIMALS:
                return "Animals"
            case StoriesCategories.ADVENTURE:
                return "Adventure"
            case StoriesCategories.FAIRY_TALE:
                return "Fairy Tale"
            case StoriesCategories.FANTASY:
                return "Fantasy"
            case StoriesCategories.LOVE:
                return "Love"
            case StoriesCategories.MYSTERY:
                return "Mystery"
            case StoriesCategories.FANTASY:
                return "Fantasy"
            case StoriesCategories.FRIENDSHIP:
                return "Friendship"
            case StoriesCategories.MAGIC:
                return "Magic"
            case StoriesCategories.BEDTIME_STORIES:
                return "Bedtime Stories"
            case StoriesCategories.EDUCATIONAL:
                return "Educational"
            case StoriesCategories.NATURE:
                return "Nature"
            case StoriesCategories.SUPERHEROES:
                return "Superheroes"
            case StoriesCategories.HUMOR:
                return "Humor"
            case StoriesCategories.MYSTERY:
                return "Mystery"
            case StoriesCategories.COURAGE:
                return "Courage"
            case StoriesCategories.EXPLORATION:
                return "Exploration"
            case StoriesCategories.MUSIC:
                return "Music"                
            default:
                return "Unknown"
        }
    }

}))