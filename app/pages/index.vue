<template>
    <main class="w-full min-h-screen flex flex-col items-center gap-6 sm:gap-10 px-4 sm:px-10 my-20 sm:my-20 overflow-x-hidden">
        <h1 class="text-4xl font-bold text-center">University UCCF Christian Unions</h1>

        <section class="grid grid-cols-1 sm:grid-cols-2 gap-5 justify-center items-center">
            <UnionCardComponent v-for="union in data" :key="union.id" :union="union" />
        </section>
    </main>
</template>

<script setup lang="ts">
import fetchUnions from '~/composables/useApiData';

const data = await fetchUnions()
</script>
