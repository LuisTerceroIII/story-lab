import { User } from "@models/models"
import { create } from "zustand"

interface UserStoreProps {
    user: User

}
interface UserStoreActions {

}

export const useUserStore = create<UserStoreProps>((set, get) => ({
    user: {} as User
}))