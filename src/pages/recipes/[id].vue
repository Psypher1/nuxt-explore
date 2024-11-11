@ts-nocheck
<script setup>
const { id } = useRoute().params;

const { data: recipe, error } = await useFetch(`https://dummyjson.com/recipes/${id}`);

useSeoMeta({
    title: recipe.value?.name,
    description: "Recipes for you to cook!",
    ogTitle: recipe.value?.name,
    ogDescription: "Recipes for you to cook!",
    ogImage: recipe.value?.image,
    ogUrl: `http:localhost:3001/recipes/${recipe.value?.id}`,
    twitterTitle: recipe.value?.name,
    twitterDescription: "Recipes for you to cook!",
    twitterImage: recipe.value?.image,
    twitterCard: "summary",
});

if (error.value) {
    throw createError({
        statusCode: error.value?.statusCode,
        statusMessage: error.value?.statusMessage,
    });
}
</script>

@ts-ignore
<template>
    <section class="max-w-screen-xl mx-auto px-8 py-20">
        <div class="">
            <h1 class="text-5xl font-semibold">{{ recipe?.name }}</h1>
            <div class="mt-3 flex gap-4 text-xl">
                <p class="flex items-center gap-1">
                    <Icon name="mdi:clock-time-eight-outline" style="color: #f79f1a" />
                    <span>{{ recipe?.cookTimeMinutes }}</span>
                </p>
                <p class="flex items-center gap-1">
                    <Icon name="mdi:fire" style="color: #f79f1a" />
                    <span>{{ recipe?.caloriesPerServing }}</span>
                </p>
                <p class="flex items-center gap-1">
                    <Icon name="mdi:star" style="color: #f79f1a" />
                    <span>{{ recipe?.rating }} ({{ recipe?.reviewCount }})</span>
                </p>
            </div>
            <hr />
        </div>

        <!-- Image -->
        <NuxtImg
            :src="recipe?.image"
            densities="x1"
            format="png"
            sizes="xs:100vw sm:100vw md:100vw lg:100vw"
            class="mt-6 w-full max-h-[500px] object-cover rounded-md shadow-sm"
            :alt="recipe?.name"
        />

        <!-- Ingredients -->
        <div class="mt-12">
            <h2 class="text-3xl font-semibold mb-4">Ingredients</h2>
            <ul class="grid grid-cols-1 md:grid-cols-2 gap-2 text-lg">
                <li v-for="ingredient in recipe?.ingredients">
                    <label class="flex gap-2 items-center">
                        <input class="hidden peer" type="checkbox" />
                        <div
                            class="relative w-6 h-6 rounded-full border-2 border-dodgeroll-gold flex items-center justify-center peer-checked:after:absolute peer-checked:after:w-4 peer-checked:after:h-4 peer-checked:after:bg-dodgeroll-gold peer-checked:after:rounded-full"
                        ></div>
                        <span class="peer-checked:line-through">
                            {{ ingredient }}
                        </span>
                    </label>
                </li>
            </ul>
        </div>

        <!-- Instructions -->
        <div class="mt-8">
            <h2 class="text-3xl font-medium mb-4">Instructions</h2>
            <ul class="flex flex-col text-lg gap-4">
                <li v-for="(instruction, index) in recipe?.instructions" class="flex gap-2">
                    <span
                        class="flex items-center justify-center bg-dodgeroll-gold w-7 h-7 rounded-full text-white text-sm"
                    >
                        {{ index + 1 }}
                    </span>
                    <span class="flex-1">{{ instruction }}</span>
                </li>
            </ul>
        </div>
    </section>
</template>
