import { createContext } from "react";
import { User } from "firebase/auth";

type FirebaseContextType = {
  user: User | null;
};

const FirebaseContext = createContext<FirebaseContextType>({
  user: null,
});

export default FirebaseContext;
