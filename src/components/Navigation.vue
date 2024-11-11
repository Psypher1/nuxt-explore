<script setup></script>

<template>
    <header class="py-4 border-b shadow">
        <nav class="max-w-screen-xl mx-auto px-8 flex items-center">
            <NuxtLink to="/" class="flex gap-1 items-center">
                <NuxtImg
                    width="56px"
                    densities="x1"
                    src="/images/icon.png"
                    alt=" a green icon"
                />
                <!-- format="avif" -->

                <span class="text-2xl font-semibold">Nuxtcipes</span>
            </NuxtLink>
            <ul class="flex gap-6 ml-auto text-xl capitalize">
                <li>
                    <NuxtLink to="/">Home</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/about">About</NuxtLink>
                </li>
            </ul>
        </nav>
    </header>
</template>
