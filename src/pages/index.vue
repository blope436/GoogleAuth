<script setup>
import useAuth from "../composable/useAuth";
const { isAuthenticated, user } = useAuth();
</script>

<template>
<div class="flex items-center justify-center text-yellow-800 text-5xl text-center bg-purple-200">
<img class="w-40" src="/src/assets/homeTop.png" alt="Home Image"/>
<h1>Home</h1>
<h2 v-if="!isAuthenticated">, Welcome</h2>
<h2 v-else class="text-5xl ">, Welcome {{user}}</h2>
</div>
<div class="container mx-auto text-red-900">
<div ><img class="px-80 py-3" src="/src/assets/welcomeIndex.png" alt="Welcome IMG"></div>
<div>
    <h3 class="text-4xl">Welcome to the Online MarketPlace. The best place to purchase electronic devices.</h3>
</div>
<h3 class="text-4xl py-12">Feel free to navigate through our website so that you can see the items we offer and learn more about us.</h3>
<img class="px-80" src="https://3dwarehouse.sketchup.com/warehouse/v1.0/publiccontent/9688850f-f59a-4a8c-af90-686efeadba94"/>
</div>
</template>
