import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

const loginWithEmail = async (email: string, password: string) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    alert(error);
  }
};

export default loginWithEmail;
