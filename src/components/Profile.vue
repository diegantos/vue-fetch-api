<template>
    <div class="favorites">
        <div
            v-for="favorite in store.allFavorites"
            class="favorite">
            <a :href="favorite.blog" target="_blank">
                <img 
                    class="favorite-img" 
                    :src="favorite.avatar_url" 
                    :alt="favorite.name">
            </a>
        </div>
    </div>
    <div class="profile" v-if="store.result">
        <a
            v-if="store.isFavorite"
            @click="store.removeFavorite"
            href="#">Remove Favourite ⭐</a>
        <a
            v-else=""
            @click="store.addFavorite"
            href="#">Add Favourite ⭐</a>
        <h2>{{ store.result.name }}</h2>
        <img
            class="img" 
            :src="store.result.avatar_url" 
            :alt="store.result.name">
        <p>{{ store.result.bio }}</p>
        <a :href="store.result.blog" target="_blank">{{ store.result.blog }}</a>
    </div>
    <div class="error-result" v-if="store.error">{{ store.error }}</div>
</template>

<script setup>
import { useSearchStore } from '@/stores/counter'
// import { created } from 'vue'

const store = useSearchStore()



</script>

<style scoped>
.profile{
    margin: auto;
}
.img{
    max-width: 10em;
    border-radius: 50%;
}
.error-result{
    background-color: rgb(224, 68, 68);
    color: white;
    width: 100%;
    min-height: 3em;
    margin: 1em 0 0;
    border-radius: 1em;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
}
.favorites{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: -1;
    display: flex;
    flex-flow: row nowrap;
}
.favorite-img{
    max-width: 8em;
}
</style>
