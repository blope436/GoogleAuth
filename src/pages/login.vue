<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import useAuth from "../composable/useAuth";


const { isAuthenticated, login, signup } = useAuth();

const username = ref("");
const password = ref("");

const router = useRouter();

const loggingIn = async () => {
  await login(username.value, password.value);
  goToHome();
};

const signingUp = async () => {
  await signup(username.value, password.value);
  goToHome();
};

const goToHome = () =>
{
    if (isAuthenticated.value)
  {
      router.push("/");
  }
};

</script>

<template>
<div class="flex items-center justify-center text-yellow-800 text-5xl text-center bg-purple-200">
<img class="w-40" src="/src/assets/login.png" alt="Login Image"/>
<h1>Login Form </h1>
</div>
<div class="flex flex-col justify-center text-center py-20 min-h-screen-nonav">
    <img class=" w-40 h-40 shadow-lg" src="/src/assets/password.png" alt="Login Image"/>
    <form @submit.prevent="loggingIn" class=" bg-indigo-300 flex flex-col space-y-10">
        <input type="text" class="rounded-lg border-2" placeholder="Username" v-model="username"/>
        <input type="password" class="rounded-lg border-2 " placeholder="Password" v-model="password"/>
        <div class="flex justify-center space-x-3">
            <button type="submit" @submit.prevent="loggingIn" class="py-2 px-4 rounded-lg bg-blue-600 text-blue-200">Login</button>
            <button @click="signingUp" class=" py-2 px-4 rounded-lg bg-purple-600 text-red-200">Sign Up</button>
        </div>
    </form>
</div>
<div class="absolute w-1/3 bg-green-400 text-3xl bottom-2 right-2 rounded-lg p-4 text-center text-red-600">
    Logged In: {{isAuthenticated}}
</div>

</template>