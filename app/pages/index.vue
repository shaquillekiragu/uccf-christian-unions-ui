<template>
    <main class="w-screen min-h-screen flex flex-col items-center gap-6 sm:gap-10 my-20 sm:my-20 overflow-x-hidden">
        <h1 class="text-4xl font-bold text-center">UCCF Christian Unions</h1>

        <section class="w-full grid grid-cols-2 gap-5 justify-center items-center">
            <UnionCardComponent v-for="union in data" :key="union.id" :union="union" />
        </section>
    </main>
</template>

<script setup lang="ts">
import fetchUnions from '~/composables/useApiData';

const data = await fetchUnions()
</script>
