<template>
<h3>Slots in Vue</h3>
<p>We create card-like div boxes from the foods array.</p>
<div>
    <button @click="ComponentToRender='Home'">Home</button>
    <button @click="ComponentToRender='About'">About</button>
    <button @click="ComponentToRender='Contact'">Contact</button>
</div>
<component :is="ComponentToRender"></component>
</template>

<script>
import Home from './components/Home.vue'
import About from './components/About.vue'
import Contact from './components/Contact.vue'

export default {
    components: {
        Home,
        About,
        Contact
    },
    data() {
        return {
            ComponentToRender: 'Home',
        }
    }
}
</script>

<style>
#wrapper {
    display: flex;
    flex-wrap: wrap;
}

#wrapper img {
    display: block;
    margin: auto;
    width: 60%;
}
</style>
