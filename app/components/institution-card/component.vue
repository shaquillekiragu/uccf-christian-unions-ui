<template>
    <div class="px-3 py-2 bg-gray-50 rounded-lg border border-gray-200 hover:bg-gray-100">
        <div class="flex flex-col gap-1">
            <span class="font-semibold text-gray-900 text-sm">{{ institution.name }}</span>
            <div class="flex flex-wrap gap-1 text-xs text-gray-600">
                <span v-if="institution.postcode">{{ institution.postcode }},</span>
                <span v-if="institution.postcode && institution.region?.name">{{ region_name }}</span>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue';
import type Institution from '~~/types/institution';

const { institution } = defineProps({
    institution: {
        type: Object as PropType<Institution>,
        required: true
    }
});

const is_in_england: boolean = institution.region.name !== 'Scotland' && institution.region.name !== 'Wales'
const region_name: string = is_in_england ? institution.region.name + ', England' : institution.region.name
</script>
