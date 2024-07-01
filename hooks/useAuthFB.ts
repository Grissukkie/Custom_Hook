import { useState } from "react";
import { getAuth, signInWithEmailAndPassword, UserCredential, AuthError} from "firebase/auth";
import app from "../firebase";


const useFireBaseAuth = () => {
  const [user, setUser] = useState<firebase.User | null>(null)
  const [error, setError] = useState<string | null>(null)
 const auth = getAuth(app);

 
  const login = async (email: string, password: string) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      setUser(userCredential.user);
      setError(null);
    } catch (err: any) {
      const errorMessage = getErrorMessage(err)
      setError(errorMessage);
    }
  };
  const getErrorMessage = (error: AuthError | { message: string }) => {
    if ('message' in error) {
      return error.message;
    } else {
      return 'An error occurred during authentication'
    }
  };

  return { user, error, login };
}
export default useFireBaseAuth;
