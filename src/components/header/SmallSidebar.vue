<script setup>

const props = defineProps({
    items: Array,
    do: Function
});

</script>

<template>
    <nav>
        <div v-for="item in props.items">
            <RouterLink v-if="item.to != ''" :to="item.to" @click="props.do">
                {{ item.name }}
            </RouterLink>
            <div v-else class="dropdown">
                <div class="dropdown-button">{{ item.name }}</div>
            </div>
        </div>
    </nav>
</template>

<style scoped lang="scss">
nav {
    width: 100%;
    height: 100%;
    background-color: rgb(0, 0, 0);
    background-color: rgba(0, 0, 0, 0.8);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    a {
        width: 100%;
        color: white;
        text-decoration: none;
        font-size: 1.5rem;
        padding: 1rem 0rem;
        cursor: pointer;
    }

    .dropdown {
        position: relative;
        display: inline-block;

        .dropdown-button {
            width: 100%;
            font-size: 1.5rem;
            padding: 1rem 0rem;
            cursor: pointer;
            color: white;
            position: relative;
        }
    }
}
</style>