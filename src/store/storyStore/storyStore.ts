import { create } from "zustand";
import { stories } from "../../utils/stories";
import { MyStoriesCategory, StoriesCategories, Story } from "../../types/models";

interface StoryStoreProps {
    stories: Story[]
    actionStory: Story | null
    loadingStory: boolean
    selectedCategory: StoriesCategories
    myStoriesCategorySelected: MyStoriesCategory, 
    setMyStoriesFilter: (category: MyStoriesCategory) => void
    getCategoryLabel: (category: StoriesCategories) => string
    getShuffleStories: () => Story[]
    getFilteredStories: () => Story[],
    filterByGenAIStories: () => boolean
}
interface StoryStoreAction {
    setActionStory: (id: string) => void
    setSelectedCategory: (category: StoriesCategories) => void
    addStory: (story: Story) => void
    removeStory: (id: string) => void
}

export const useStoryStore = create<StoryStoreProps & StoryStoreAction>((set, get) => ({
    stories: [...stories],
    actionStory: stories[0],
    loadingStory: false,
    selectedCategory: StoriesCategories.ALL,
    myStoriesCategorySelected: MyStoriesCategory.GEN_AI,
    setSelectedCategory: (category: StoriesCategories) => {
        set({selectedCategory: category})
    },
    getFilteredStories: () => {
        return get().selectedCategory === StoriesCategories.ALL ? get().stories : get().stories.filter(story => story.category === get().selectedCategory)
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
    },
    setMyStoriesFilter: (category: MyStoriesCategory) => {
        set({myStoriesCategorySelected: category})
    },
    filterByGenAIStories: () => get()?.myStoriesCategorySelected === MyStoriesCategory.GEN_AI,
    addStory: (story: Story) => {
        set({stories: [...get().stories, story]})
    },
    removeStory: (id: string) => {
        set({stories: get().stories.filter(story => story.id !== id)})
    }


}))