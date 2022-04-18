import { signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "../services/firebase"

export async function sigin(email: string, password: string) {
  const userCredentials = await signInWithEmailAndPassword(auth, email, password)
  return userCredentials.user
}
