// import { useEffect, useState } from "react";
// import type { VFC, ReactNode } from "react";
// import auth from "../firebase";
// import FirebaseContext from "./contexts";

// interface Props {
//   children?: ReactNode;
// }

// const FirebaseProvider: VFC<Props> = ({ children }) => {
//   // const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     auth.onAuthStateChanged((user) => {
//       // setUser(user);
//       setLoading(false);
//     });
//   }, []);

//   if (loading) {
//     return <div className="loading">ローディング中...</div>;
//   }

//   return (
//     <FirebaseContext.Provider
//       // value={{
//       //   user,
//       // }}
//     >
//       {children}
//     </FirebaseContext.Provider>
//   );
// };

// export { FirebaseProvider };
export {};
