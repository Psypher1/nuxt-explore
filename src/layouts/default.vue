<script setup>
import "~/assets/css/style.css";
</script>

<template>
    <Navigation />

    <main class="min-h-screen">
        <slot />
    </main>
</template>

<style>
body {
    font-family: Outfit, sans-serif;
}
</style>
