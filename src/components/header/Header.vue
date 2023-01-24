<script setup>
import { RouterLink } from 'vue-router';

const props = defineProps({
    items: Array
});

</script>

<template>
    <header>
        <nav>
            <div v-for="item in props.items">
                <RouterLink v-if="item.to != ''" :to="item.to">
                    <button>{{ item.name }}</button>
                </RouterLink>
                <div class="dropdown" v-else>
                    <button class="dropdown-button">{{ item.name }}</button>
                    <div class="dropdown-content">
                        <RouterLink v-for="itemitem in item.items" :to="itemitem.to">{{ itemitem.name }}</RouterLink>
                    </div>
                </div>
            </div>
        </nav>
    </header>
</template>

<style scoped lang="scss">
header {
    width: 100%;
    height: 100%;
    background-color: black;

    nav {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: space-evenly;

        a {
            button {
                background-color: black;
                color: white;
                font-size: 1.5rem;
                border: none;
                cursor: pointer;
            }
        }

        .dropdown {
            position: relative;
            display: inline-block;

            .dropdown-button {
                background-color: black;
                color: white;
                font-size: 1.5rem;
                padding: 0.5rem;
                border: none;
                cursor: pointer;
            }

            .dropdown-content {
                display: none;
                position: absolute;
                background-color: white;
                min-width: 10rem;
                box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
                z-index: 1;
            }

            .dropdown-content a {
                font-size: 1.5rem;
                color: black;
                padding: 0.5rem;
                text-decoration: none;
                display: block;
            }

            .dropdown-content a:hover {
                background-color: #f1f1f1
            }
        }

        .dropdown:hover .dropdown-button {
            background-color: white;
            color: black;
        }

        .dropdown:hover .dropdown-content {
            display: block;
        }
    }
}
</style>