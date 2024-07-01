import { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from '../firebase'


const auth = getAuth(app);

const useFireBaseAuth = () => {
  const [user, setUser] = useState(null)
  const [error, setError] = useState(null)

  const login = async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      setUser(userCredential.user);
      setError(null); 
    } catch (err) {
      setError(err);
    }
  };
  return { user, error, login};
}
export default useFireBaseAuth;