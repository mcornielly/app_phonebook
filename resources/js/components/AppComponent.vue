<template>
    <div>
        <header-component></header-component>

		<div class="container">
            <transition name="slide-fade" mode="out-in">
              <router-view></router-view>
            </transition>
        </div>

        <footer-component></footer-component>
    </div>
</template>

<script>
    export default {
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>
