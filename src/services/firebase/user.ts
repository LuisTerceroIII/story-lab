import { User } from "firebase/auth";
import { firestore } from "./firebaseConfig";
import { addDoc, collection } from "firebase/firestore";

export const addNewUser = async (user: User) => {
    try {
        const docRef = await addDoc(collection(firestore, "users"), {
            id: user.uid,
            email: user.email,
        });
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
}