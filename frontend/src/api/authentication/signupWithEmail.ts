import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

const signupWithEmail = async (email: string, password: string) => {
  try {
    await createUserWithEmailAndPassword(auth, email, password);
  } catch (error) {
    alert(error);
  }
};

export default signupWithEmail;
