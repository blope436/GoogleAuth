import { ref } from "vue";

import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

import { firebaseAuth } from "./useFirebase";

const isAuthenticated = ref(false);

const user = ref("");

const useAuth = () => {

  const googleLogin = async () => {
    const provider = new GoogleAuthProvider();
    const response = await signInWithPopup(firebaseAuth,provider);
    if(response.user)
    {
      isAuthenticated.value = true;
      user.value = response.user.displayName;
    }
    };

  const login = async (username, password) => {
  const response = await signInWithEmailAndPassword(firebaseAuth, username, password);

  if(response.user)
  {
    isAuthenticated.value = true;
    user.value = response.user.email;
  }
  };

  const signup = async (username, password) => {
    const response = await createUserWithEmailAndPassword(firebaseAuth, username, password);
  
    if(response.user)
    {
      isAuthenticated.value = true;
      user.value = response.user.email;
    }
    };

  const logout = async () => {
    await signOut(firebaseAuth)
    isAuthenticated.value = false;
    user.value = "";
  };


  return { isAuthenticated, login, signup, logout, user, googleLogin };
};

export default useAuth;
