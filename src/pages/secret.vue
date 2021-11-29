<script setup>
import { onUnmounted, ref } from 'vue';
import useChat from '../composable/useChat'

const {messages, unsubscribe} = useChat();

const newMessage = ref("");

onUnmounted(() => {
    unsubscribe()
})
</script>

<template>
<div class="text-center py-7 text-indigo-500 text-5xl">
<h2>This is a chat page that only authenticated users are allowed to use.</h2>
<img class="mx-auto w-80 py-10" src="/src/assets/secret.png" alt="Secret Image"/>
</div>
<h1 class="text-indigo-500 text-8xl text-center">OnlineMarketPlace Chat</h1>
<div class="flex flex-col min-h-[900px] w-full mt-6 rounded-lg justify-between border-4 border-red-600">
    <ul class="p-5 space-y-5">
        <li v-for="message in messages" :key="message.id" class="text-blue-600 text-4xl">
            <div class="flex justify-between bg-green-200 px-5 py-3 rounded-2xl">
                <span>Message: {{message.text}} </span>
                <span>Author Name: {{message.author}}</span>
            </div>
        </li>
    </ul>
    <div>
        <input class="w-full min-h-[100px] p-5 rounded-xl focus:outline-none focus:bg-pink-300" type="text" placeholder="Type a message here" v-model="newMessage"/>
    </div>
</div>
</template>
