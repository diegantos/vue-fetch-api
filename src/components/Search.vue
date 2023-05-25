<template>
    <h2>Introduce your search below</h2>
    <form @submit.prevent="store.doSearch">
        <input
            v-model="store.search"
            class="input"
            type="text">
        <button class="btn">Search</button>
    </form>
</template>

<script setup>
import { useSearchStore } from '@/stores/counter';

const store = useSearchStore()


</script>

<style scoped>
.input{
    min-height: 3em;
    margin: 1em 1em 0 0;
    padding: 1em;
    border: none;
    border-radius: 1em;
}
.btn{
    padding: 1em;
    border: none;
    border-radius: 1em;
}
</style>