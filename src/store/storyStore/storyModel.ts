import create from "zustand";
import { nanoid } from 'nanoid'

export const useStoryModelStore = create((set, get) => ({
    id: nanoid(),
    title: "",
    imgURL: "",
    history: "",
    ownerId: "",
}))