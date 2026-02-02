<template>
    <article class="w-full mx-8 rounded-lg border">

    </article>
</template>

<script setup lang="ts">
import type { PropType } from 'vue';
import { toRefs } from 'vue';
import type Union from '~~/types/union';

const { union } = defineProps({
    union: {
        type: Object as PropType<Union>,
        required: true
    }
})

const {
    id,
    name,
    full_name,
    campus,
    abbreviation,
    url,
    website,
    facebook,
    twitter,
    instagram,
    institutions
} = toRefs(union);
</script>
