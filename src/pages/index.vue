<script setup>
const { data, error } = useFetch("https://dummyjson.com/recipes?limit=12");

useSeoMeta({
    title: "Nuxtcipes",
    description: "Recipes for you to cook!",
});
</script>

<template>
    <section class="max-w-screen-xl mx-auto px-8 py-20">
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
        <div class="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <article v-for="recipe in data?.recipes" :key="recipe.id" class="shadow-md rounded-md">
                <NuxtImg
                    class="rounded-t-md"
                    sizes="100vw sm:50vw"
                    densities="x1"
                    :src="recipe.image"
                    alt="{{ recipe.name }}"
                />
                <div class="p-4">
                    <h3 class="font-semibold text-lg md:text-xl lg:text-2xl">
                        {{ recipe.name }}
                    </h3>
                    <div class="flex items-center justify-around bg-white/80">
                        <p class="flex items-center gap-1">
                            <Icon name="mdi:clock-outline" style="color: #f79f1a" />
                            <span>{{ recipe.cookTimeMinutes }}</span>
                        </p>
                        <p class="flex items-center gap-1">
                            <Icon name="mdi:fire" style="color: #f79f1a" />
                            <span>{{ recipe.caloriesPerServing }}</span>
                        </p>
                        <p class="flex items-center gap-1">
                            <Icon name="mdi:star" style="color: #f79f1a" />
                            <span>{{ recipe.rating }} ({{ recipe.reviewCount }})</span>
                        </p>
                    </div>
                    <NuxtLink
                        :to="`/recipes/${recipe.id}`"
                        class="px-4 py-2 mt-4 inline-block text-white self-start bg-dodgeroll-gold rounded-md text-base lg:text-lg cursor-pointer"
                    >
                        View
                    </NuxtLink>
                </div>
            </article>
        </div>
    </section>
</template>

<style></style>
