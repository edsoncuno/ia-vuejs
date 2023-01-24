<script setup>
import { RouterView } from 'vue-router';
import { ref } from 'vue';

import Header from "./header/Header.vue";
import SmallHeader from "./header/SmallHeader.vue";
import SmallSidebar from "./header/SmallSidebar.vue";

const itemsLinks = ref([
    { to: "/", name: "Inicio" },
    {
        to: "", name: "Ejercicios", items: [
            { to: "/exercises/1", name: "Ejercicio 1" },
            { to: "/exercises/2", name: "Ejercicio 2" },
        ]
    }
]);

const isActive = ref(false);
function handleSmallSidebar() {
    if (isActive.value) {
        isActive.value = false;
    } else {
        isActive.value = true;
    }
}
function hiddenSmallSidebar() {
    isActive.value = false;
}

</script>

<template>
    <div class="container">
        <div class="header">
            <Header :items="itemsLinks" />
        </div>
        <main>
            <RouterView />
        </main>
        <div class="small-header">
            <SmallHeader :do="handleSmallSidebar" />
        </div>
        <div class="small-sidebar" :class="{ active: isActive }">
            <SmallSidebar :do="hiddenSmallSidebar" :items="itemsLinks"/>
        </div>
    </div>
</template>

<style scoped lang="scss">
.container {
    width: 100%;
    position: relative;

    .header {
        width: 100%;
        height: 10vh;
        position: fixed;
        top: 0;
        left: 0;
    }

    main {
        margin-top: 10vh;
        width: 100%;
        height: 100%;
    }

    .small-header {
        display: none;
        width: 100%;
        height: 10vh;
        position: fixed;
        top: 0;
        left: 0;
    }

    .small-sidebar {
        width: 100%;
        height: auto;
        position: fixed;
        top: 10vh;
        left: -100%;
        transition: all 0.3s
    }

    .active {
        left: 0;
    }

    @media all and (max-width:950px) {
        .header {
            display: none;
        }

        .small-header {
            display: block;
        }
    }
}
</style>