import create from "zustand";

export const useStoryStore = create((set, get) => ({
    stories: [],
    actionStory: null
}))