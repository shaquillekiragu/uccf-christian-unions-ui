<template>
    <div class="px-3 py-2 bg-gray-50 rounded-lg border border-gray-200 hover:bg-gray-100">
        <div class="flex flex-col gap-1">
            <span class="font-semibold text-gray-900 text-sm">{{ name }}</span>
            <div class="flex flex-wrap gap-1 text-xs text-gray-600">
                <span v-if="region?.name">{{ region.name }},</span>
                <span v-if="postcode">{{ postcode }}</span>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue';
import { toRefs } from 'vue';
import type Institution from '~~/types/institution';

const { institution } = defineProps({
    institution: {
        type: Object as PropType<Institution>,
        required: true
    }
})

const {
    id,
    name,
    postcode,
    geocode,
    region
} = toRefs(institution);
</script>
