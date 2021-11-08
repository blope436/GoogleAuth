<script setup>
import { useRouter } from "vue-router";
import useAuth from "../composable/useAuth";

const { isAuthenticated, logout } = useAuth();

const router = useRouter();

const loggingOut = () => {
  logout();
  router.push("/");
};
</script>

<template>
<div class="bg-pink-900 text-indigo-200">
<div class="container mx-auto flex items-center justify-between">
   
    <h1 class="tracking-tighter text-6xl font-bold">GoogleAuth-Online<span class="font-normal">MarketPlace</span>
    </h1>
    <img class="h-20" src="/src/assets/cartnav.png">
    <nav>
        <ul class="flex ">
            <router-link to="/"><li class="py-8 px-4 hover:cursor-pointer hover:bg-purple-300 hover:text-red-900 text-xl">Home</li></router-link>
            <router-link to="/about"><li class="py-8 px-4 hover:cursor-pointer hover:bg-purple-300 hover:text-red-900 text-xl">About</li></router-link>
            <router-link to="/itemList"><li class="py-8 px-4 hover:cursor-pointer hover:bg-purple-300 hover:text-red-900 text-xl">Items</li></router-link>
            <router-link to="/contact"><li class="py-8 px-4 hover:cursor-pointer hover:bg-purple-300 hover:text-red-900 text-xl">Contact</li></router-link>
            <router-link v-if="!isAuthenticated" to="/login"><li class="py-8 px-4 hover:cursor-pointer hover:bg-purple-300 hover:text-red-900 text-xl">Login</li></router-link>
            <div v-else class="flex">
            <router-link :to="{name: 'Secret'}"><li class="py-8 px-4 hover:cursor-pointer hover:bg-purple-300 hover:text-red-900 text-xl">Secret</li></router-link>
            <button @click="loggingOut"><li class="py-8 px-4 hover:cursor-pointer hover:bg-purple-300 hover:text-red-900 text-xl">Logout</li></button>
            </div>
        </ul>
    </nav>
</div>
</div>
</template>
