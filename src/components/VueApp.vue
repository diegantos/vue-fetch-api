<script setup>
import Search from './Search.vue';
import Profile from './Profile.vue';


</script>

<template>
    <div class="vue-fetch-api">
      <Search />
      <Profile />
  </div>
</template>

<style scoped>
.vue-fetch-api{
  background-color: gray;
  border-radius: 1em;
  color: white;
  padding: 2em;
  position: relative;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  min-width: 80%;
}
</style>
