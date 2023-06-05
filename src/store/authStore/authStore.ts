import { create } from "zustand"
import { useStoryStore } from "../../store/storyStore/storyStore"
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useFirebaseAppStore } from "../firebaseStore/firebaseApp";


interface AuthStoreProps {
    email: string,
    password: string,
    error: string,
}
interface AuthStoreActions {
    signIn: () => Promise<void>
    signUp: () => Promise<void>
    setEmail: (email: string) => void
    setPassword: (password: string) => void
}

export const useAuthStore = create<AuthStoreProps & AuthStoreActions>((set, get) => ({
    email: '',
    password: '',
    error: '',
    setEmail: (email) => set({ email }),
    setPassword: (password) => set({ password }),
    signIn: async () => {
        const auth = getAuth()
        if (get().email === '' || get().password === '') {
            set({
                email: get().email,
                password: get().password,
                error: 'Email and password are mandatory.'
            })
            return
          }
          try {
            await signInWithEmailAndPassword(auth, get().email, get().password)
          } catch (error) {
            set({
                email: get().email,
                password: get().password,
                error: error.message,
            })
          }
    },
    signUp: async () => {
        const auth = useFirebaseAppStore.getState().auth
        if (get().email === '' || get().password === '') {
            set({
                email: get().email,
                password: get().password,
                error: 'Email and password are mandatory.'
            })
            return
          }
          try {
            await createUserWithEmailAndPassword(auth, get().email, get().password)
          } catch (error) {
            set({
                email: get().email,
                password: get().password,
                error: error.message,
            })
          }
    }
}))

export const useSignIn = () => useAuthStore(state => state.signIn)
export const useSignUp = () => useAuthStore(state => state.signUp)
export const useSetEmail = () => useAuthStore(state => state.setEmail)
export const useSetPassword = () => useAuthStore(state => state.setPassword)