import { signOut } from "firebase/auth";
import auth from "../firebase";

const logout = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    alert(error);
  }
};

export default logout;
