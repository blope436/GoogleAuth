<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

import {useForm, useField} from 'vee-validate';
import * as yup from 'yup';

const schema = yup.object({
      username: yup.string().required().email(),
      password: yup.string().required().min(8),
    });

useForm({
      validationSchema: schema,
    });

const { value: username, errorMessage: emailError } = useField('username');
const { value: password, errorMessage: passwordError } = useField('password');



import useAuth from "../composable/useAuth";


const { isAuthenticated, login, signup, googleLogin } = useAuth();

const router = useRouter();

const loggingIn = async () => {
  await login(username.value, password.value);
  goToHome();
};

const signingUp = async () => {
  await signup(username.value, password.value);
  goToHome();
};

const google = async () => {
  await googleLogin();
  goToHome();
}

const goToHome = () =>
{
    if (isAuthenticated.value)
  {
      router.push("/");
  }
};

</script>

<template>
<div class="flex items-center justify-center text-green-800 text-5xl text-center bg-purple-200">
<img class="w-40" src="/src/assets/loginnew.png" alt="Login Image"/>
<h1>Login Form </h1>
</div>
<div class="flex flex-col justify-center text-center py-20 min-h-screen-nonav">
    <img class=" w-40 h-40 shadow-lg" src="/src/assets/login3.png" alt="Login Image"/>
    <form @submit.prevent="loggingIn" class=" bg-indigo-300 flex flex-col space-y-10">
        <input name="username" type="text" class="rounded-lg border-2" placeholder="Email" v-model="username"/>
        <span class="text-pink-900 text-xl text-center">{{emailError}}</span>
        <input name="password" type="password" class="rounded-lg border-2 " placeholder="Password" v-model="password"/>
        <span class="text-pink-900 text-xl text-center">{{passwordError}}</span>
        <div class="flex justify-center space-x-3">
            <button type="submit" @submit.prevent="loggingIn" class="py-2 px-4 rounded-lg bg-blue-600 text-blue-200">Login</button>
            <button @click="signingUp" class=" py-2 px-4 rounded-lg bg-purple-600 text-red-200">Sign Up</button>
        </div>
        <button @click="google" class="flex justify-center py-3 bg-gray-400 rounded-xl hover:bg-red-300"><img src="/src/assets/googlelogo.png" alt="Google Logo"></button>
    </form>
</div>
<div class="absolute w-1/3 bg-green-400 text-3xl bottom-20 right-2 rounded-lg p-4 text-center text-red-600">
    Logged In: {{isAuthenticated}}
</div>

</template>