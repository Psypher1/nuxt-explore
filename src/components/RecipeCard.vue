<script setup>
defineProps({
    recipe: Object,
});
</script>

<template>
    <article class="shadow-md rounded-md">
        <NuxtImg
            class="rounded-t-md"
            format="png"
            sizes="100vw sm:50vw"
            densities="x1"
            :src="recipe.image"
            :alt="recipe.name"
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
</template>
