import { create } from "zustand";
import { StoriesCategories, Story } from "../../types/models";
import { OpenAIService } from "../../services/openAI/openAiService";
import { nanoid } from "nanoid";
import { useUserStore } from "../userStore/userStore";
import * as RootNavigation  from "../../routes/RootNavigation";
import { ScreenName } from "../../routes/screenNames";


interface GenAIProps {
    title: string
    plotIdea: string,
    selectedCategory: any
    categoriesDropdownOptions: { label: string, value: string }[]
    isCategoryDropdownOpen: boolean
    generatedStory: Story
    loadingStory: boolean
}
interface GenAIActions {
    setTitle: (title: string) => void
    setPlotIdea: (plotIdea: string) => void
    setSelectedCategory: (selectedCategory: any) => void
    setIsCategoryDropdownOpen: (isCategoryDropdownOpen: boolean) => void
    generateStory: () => void
}
export const useGenAIStore = create<GenAIProps & GenAIActions>((set, get) => ({
    title: null,
    selectedCategory: null,
    isCategoryDropdownOpen: false,
    plotIdea: null,
    generatedStory: null,
    loadingStory: false,
    setSelectedCategory: (selectedCategory: any) => {
        set({ selectedCategory })
    },
    categoriesDropdownOptions: [
            { label: "Adventure", value: "adventure" },
            { label: "Love", value: "love" },
            { label: "Fairy Tale", value: "fairy tale" },
            { label: "Animals", value: "animals" },
            { label: "Fantasy", value: "fantasy" },
            { label: "Friendship", value: "friendship" },
            { label: "Magic", value: "magic" },
            { label: "Bedtime Stories", value: "bedtime stories" },
            { label: "Educational", value: "educational" },
            { label: "Nature", value: "nature" },
            { label: "Superheroes", value: "superheroes" },
            { label: "Humor", value: "humor" },
            { label: "Mystery", value: "mystery" },
            { label: "Courage", value: "courage" },
            { label: "Exploration", value: "exploration" },
            { label: "Music", value: "music" },
    ],
    setIsCategoryDropdownOpen: (isCategoryDropdownOpen: boolean) => set({ isCategoryDropdownOpen }),
    setTitle: (title: string) => set({ title }),
    setPlotIdea: (plotIdea: string) => set({ plotIdea }),
    generateStory : async () => {
        try {
            set({ loadingStory: true })
            const res = await OpenAIService.getHistory(get().title, get().selectedCategory, get().plotIdea)
            const id = () => nanoid()
            const story: Story = {
                //@ts-ignore
                id,
                title: get().title,
                category: get().selectedCategory as StoriesCategories,
                content: res, 
                ownerId: useUserStore.getState().user?.uid || "MagicTellAdmin"
            }
            set({ generatedStory: story })
            RootNavigation.navigate(ScreenName.NEW_STORY)
            console.log({content: story.content})
            set({ loadingStory: false })
        } catch(err) {
            set({ loadingStory: false })
            console.log("error generating story", err)
        }
    },
}))