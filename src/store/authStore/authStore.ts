import { create } from "zustand"
import { createUserWithEmailAndPassword, getAuth, sendEmailVerification, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../services/firebase/firebaseConfig";
import { addNewUser } from "../../services/firebase/user";
import { useGlobalUIStore } from "../screensStore/globalUIStore";

interface AuthStoreProps {
    email: string
    password: string
    error: string
    detailError: any
    emailIsVerified: boolean
    isAnonymous: boolean
    loading: boolean
}
interface AuthStoreActions {
    signIn: () => Promise<void>
    signUp: () => Promise<void>
    setEmail: (email: string) => void
    setPassword: (password: string) => void
    openLoginErrorModal: () => void
}

export const useAuthStore = create<AuthStoreProps & AuthStoreActions>((set, get) => ({
    email: '',
    password: '',
    error: null,
    detailError: null,
    emailIsVerified: false,
    isAnonymous: false,
    loading: false,
    setEmail: (email) => set({ email }),
    setPassword: (password) => set({ password }),
    signIn: async () => {
        const auth = getAuth()
        if (get().email === '' || get().password === '') {
            set({
                email: get().email,
                password: get().password,
                error: 'Email and password are mandatory.',
                detailError: null
            })
            return
          }
          try {
            set({loading: true})
            await signInWithEmailAndPassword(auth, get().email, get().password)
            set({loading: false})
          } catch (error) {
            set({loading: false})
            set({
                email: get().email,
                password: get().password,
                error: error.message,
                detailError: error
            })
          }
    },
    openLoginErrorModal: () => {
        useGlobalUIStore.getState().openModal()
    },
    signUp: async () => {
        if (get().email === '' || get().password === '') {
            set({
                email: get().email,
                password: get().password,
                error: 'Email and password are mandatory.',
                detailError: null
            })
            return
          }
          try {
            set({loading: true})
            await createUserWithEmailAndPassword(auth, get().email, get().password)
            await addNewUser(auth.currentUser)
            await sendEmailVerification(auth.currentUser)
            set({loading: false})
          } catch (error) {
            console.log(error)
            get().openLoginErrorModal()
            set({loading: false})
            set({
                email: get().email,
                password: get().password,
                error: error.message,
                detailError: error
            })
          }
    },
    
}))

export const useSignIn = () => useAuthStore(state => state.signIn)
export const useSignUp = () => useAuthStore(state => state.signUp)
export const useSetEmail = () => useAuthStore(state => state.setEmail)
export const useSetPassword = () => useAuthStore(state => state.setPassword)