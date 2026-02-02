<template>
    <main class="w-screen min-h-screen flex flex-col items-center my-10">
        <h1 class="text-4xl font-bold text-center">UCCF Christian Unions</h1>

        <section class="w-full">
            {{ data }}
        </section>
    </main>
</template>

<script setup lang="ts">
import fetchUnions from '~/composables/useApiData';

const data = fetchUnions()
</script>
