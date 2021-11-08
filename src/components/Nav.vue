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
<div class="bg-green-900 text-green-200">
<div class="container mx-auto flex items-center justify-between">
   
    <h1 class="tracking-tighter text-6xl font-bold">RealAuth-Online<span class="font-normal">MarketPlace</span>
    </h1>
    <img class="h-20" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQwAAAC8CAMAAAC672BgAAAAllBMVEX////NMwHLIADMKwDsu7DqvbbKEwDLIgD88/HxzcLacVnqsabYblzprqD89/XZcWH78Or56eTz0sjjm4vnp5n24NrjlobVWj7TTyzuw7n129XHAADlo5jhlIbZaVDein7cfGradF7XYkXPOQDRQxjeiHbmq6LfgmzQQQ/UVjXZa1bcgXLUXkjTVz/Ya1rjnZDUUzjUUC0c1c9zAAAEo0lEQVR4nO3cbVvaMBQG4JKwFujoaIXJy8bQgSBz0/3/PzesDRYlgdSGc5o990es15UcDm1eThoEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgVELdAAJTEe2ISOTCV7Ov1E27vG9R6zj5nbpplzeXumD8oG7a5cl3VDAW1E27vN58vu3tfL7JLRZzFYwb6qYxMCpuIvKWuiUMpOp3MqZuCQOJCsZP6pZwoB4nEXVDOFgWwQipG8LBffE7CVPqljDQU8GYUreEgVURDNGlbgkDarYiJtQtYSAughG1qVvCQFsUwbijbgkDXRWM/3BB451pEQy5pm4JA2lYBGNO3RIGEhWMa+qWcKBmastJ24VmDWw3aqomXJDNWna/1y2L1kEMqbtnZ+syGJsOdffs/HIYjOiRuneWvrsMRrPuGEFwpdtXqiEWV9Sds9V3F4yGPUqC15la/ZqXGEHmLBitAXXfrI1cBaOJ8+DU1T1DNGyM8WzgKBbRirpnFXSWpztWKRjNu2PsPLmJRRMTIwgenAxBZbPm7oqTmZpsZmIECxfBEM1MjP2eWp0au7w8dDDQYJ0Y7cUXrd/1x4J1YlyF78v83tb71SkaUfdYT+2NXArrOkqHE9OjBOPECJKq2wDVfkKyR91ho+RTNTeVohFyTowP0NaamxLD12Jj7SkEA+FrdditfWYwv2NUF/uQGIOJ/qaYqYuy0/fPCrFgV5HfDg2PS3UA68Z0UfUnK7d60tQ4xpJP+UXf3AzE2BUAxeZgbPOLrt1ssYrsROMuLZsZpmWRfBkSrYXhosrTOHaJsUuNz3rrYnjYWb1+9ue4/G8tq3B4XnQ92JwOwWti3FM317FHi+dr6HdiWC2Rel8+mVrcM5ifTEj0Tl/xbLLxJjEef+YvAjhCbPIBQXss8hcFFB+WFZ+cnxfME+PKsPYpnw+ydsM6h15L6v4amb7WPBi1DkN5J4YxGGEc1FsdLP9Sd9esPwt1XuqYM6G9wPoHJNif6+roHFwwOGLUs4uG34NPy/Im/onxER2bSYnvLxaYWK3++J0YmVVe8B5jdL72ytQQIO6d6cFuLVjEpL01G7Sig/WqYsevZypN+MgK15Jzyfz6zRf7MjqcuCpNiPrUHTZZvvlmXypUnR0tkdT9NRqGB1PU4tT/VGgmsfvQaea4J4TMj+V1+yWxKjcb9Y+K1Wb7uPzh+e443zGsqd/PE3VDOFAbzMtUO5kxoW5+vfajTf0kVm/mWT51ZxWLvvKd7IaWieskWdatIMvy/+NcDWxv1B5WeZtBOunHvtWyda93ww8R2VY4j7by+fW7c6/yYlUs8EV2JTf9opRFtjx6mKz3yxahzZLEcD/Naej5q2NKhS02tRXT0pSP98TEwsHa3ub8/ytvuES+3DUODsKfv1o1LU9/m3lm84gfpW/Y4mDEQQy9WQouH9az2B4sF7A08F0IGqVKFGkxxSjXE0pvHq2lfLcpcy69WcHqgcyc2nqWdnV6qpBacl/kspKOdyNJKcWt3SQjmYf5v439qmhL+tvx9cq+T5PF3/tF26v1PgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAYOUfqvpW1aESuwQAAAAASUVORK5CYII=">
   
    <nav>
        <ul class="flex ">
            <router-link to="/"><li class="py-8 px-4 hover:cursor-pointer hover:bg-green-300 hover:text-red-900 text-xl">Home</li></router-link>
            <router-link to="/about"><li class="py-8 px-4 hover:cursor-pointer hover:bg-green-300 hover:text-red-900 text-xl">About</li></router-link>
            <router-link to="/itemList"><li class="py-8 px-4 hover:cursor-pointer hover:bg-green-300 hover:text-red-900 text-xl">Items</li></router-link>
            <router-link to="/contact"><li class="py-8 px-4 hover:cursor-pointer hover:bg-green-300 hover:text-red-900 text-xl">Contact</li></router-link>
            <router-link v-if="!isAuthenticated" to="/login"><li class="py-8 px-4 hover:cursor-pointer hover:bg-green-300 hover:text-red-900 text-xl">Login</li></router-link>
            <div v-else class="flex">
            <router-link :to="{name: 'Secret'}"><li class="py-8 px-4 hover:cursor-pointer hover:bg-green-300 hover:text-red-900 text-xl">Secret</li></router-link>
            <button @click="loggingOut"><li class="py-8 px-4 hover:cursor-pointer hover:bg-green-300 hover:text-red-900 text-xl">Logout</li></button>
            </div>
        </ul>
    </nav>
</div>
</div>
</template>
