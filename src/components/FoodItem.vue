<template>
<div>
    <h2>
        {{ foodName }}
       
    </h2>
    <p>{{ foodDesc }}</p>
    <button v-on:click="toggleFavorite">Favorite</button>
</div>
</template>

  
<script>
export default {
    props: ['foodName', 'foodDesc', 'isFavorite'],
    data() {
        return {
            foodIsFavorite: this.isFavorite
        }
    },
    methods: {
        toggleFavorite() {
            this.foodIsFavorite = !this.foodIsFavorite;
        }
    }
}
</script>

  
<style>
img {
    height: 1.5em;
    float: right;
}
</style>
