import { ref } from "vue";

import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from "firebase/auth";

import { firebaseAuth } from "./useFirebase";

const isAuthenticated = ref(false);

const user = ref("");

const useAuth = () => {
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

  return { isAuthenticated, login, signup, logout, user };
};

export default useAuth;
