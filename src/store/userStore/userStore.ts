
import { User } from "firebase/auth"
import { create } from "zustand"

interface UserStoreProps {
    user: User

}
interface UserStoreActions {
    setStoreUser: (user: User) => void
}

export const useUserStore = create<UserStoreProps & UserStoreActions>((set, get) => ({
    user: {} as User,
    isAnonymous: () => {
        if(get()?.user) return get()?.user?.isAnonymous
        else return false
    },
    uid: () => {
        if(get()?.user) return get()?.user?.uid
        else return false
    },
    email: () => {
        if(get()?.user) return get()?.user?.email
        else return false
    },
    emailVerified: () => {
        if(get()?.user) return get()?.user?.emailVerified
        else return false
    },
    setStoreUser: (user: User) => set({ user }),
}))