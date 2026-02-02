<template>
    <main class="w-screen min-h-screen flex flex-col items-center gap-10 my-10">
        <h1 class="text-4xl font-bold text-center">UCCF Christian Unions</h1>

        <section class="w-full flex flex-col items-center">
            <UnionCardComponent v-for="union in data" :key="union.id" :union="union" />
        </section>
    </main>
</template>

<script setup lang="ts">
import fetchUnions from '~/composables/useApiData';

const data = await fetchUnions()
</script>
