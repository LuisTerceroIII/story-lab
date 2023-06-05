import { create } from "zustand"
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../services/firebase/firebaseConfig";
import { addNewUser } from "../../services/firebase/user";


interface AuthStoreProps {
    email: string,
    password: string,
    error: string,
    emailIsVerified: boolean,
    isAnonymous: boolean,
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
    emailIsVerified: false,
    isAnonymous: false,
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
            await addNewUser(auth.currentUser)
          } catch (error) {
            console.log(error)
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