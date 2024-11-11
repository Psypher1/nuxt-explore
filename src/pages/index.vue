<script setup>
const { data, error } = await useFetch("https://dummyjson.com/recipes?limit=15");

useSeoMeta({
    title: "Nuxtcipes - Let's get cooking",
    description: "Recipes for you to cook!",
    ogTitle: "Nuxtcipes",
    ogDescription: "Recipes for you to cook!",
    ogImage: "/nuxt-course-hero.png",
    ogUrl: `http:localhost:3000`,
    twitterTitle: "Nuxtcipes",
    twitterDescription: "Recipes for you to cook!",
    twitterImage: "nuxt-course-hero.png",
    twitterCard: "summary",
});
</script>

<template>
    <section class="container max-w-screen-xl mx-auto px-8 py-20">
        <div class="grid md:grid-cols-2 place-items-center gap-10">
            <div class="text-center md:text-left">
                <h1 class="text-5xl font-semibold text-balance">
                    Master the Kitchen with Ease: Unleash Your Inner Chef Today!
                </h1>
                <p class="mt-5 text-xl lg:text-2xl text-balance">
                    Discover recipes helping you to find the easiest way to cook.
                </p>
                <button
                    class="mt-8 px-4 py-2 text-white self-start bg-dodgeroll-gold hover:bg-dodgeroll-gold/80 rounded-md text-lg cursor-pointer"
                >
                    Browse Recipes
                </button>
            </div>
            <div>
                <NuxtImg densities="x1" sizes="100vw sm:50vw" src="/images/hero-image.png" alt="" />
            </div>
        </div>
    </section>

    <section class="max-w-screen-xl mx-auto px-8">
        <h2 class="text-3xl lg:text-4xl font-semibold">Discover, Create, Share</h2>
        <p class="text-lg lg:text-xl mt-2">Check out our most popular recipes!</p>
        <div v-if="!error" class="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <RecipeCard v-for="recipe in data?.recipes" :recipe="recipe" />
        </div>
        <p v-else>Something went kapoot</p>
    </section>
</template>

<style></style>
