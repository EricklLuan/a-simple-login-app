import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth"
import { auth } from "../services/firebase"

export async function sigup(name:string, email: string, password: string) {
  const userCredentials = await createUserWithEmailAndPassword(auth, email, password)
  await updateProfile(userCredentials.user, {
    displayName: name, 
    photoURL: null
  })
  return userCredentials.user;
}