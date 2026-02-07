<template>
    <article class="w-full min-h-80 flex flex-col gap-4 mx-8 p-6 bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md">
        <div class="flex flex-col gap-2">
            <h2 class="text-2xl font-bold text-gray-900">{{ union.name }}</h2>
            <p class="text-lg text-gray-700">{{ union.full_name }}</p>
        </div>

        <div v-if="union.campus || union.abbreviation" class="flex flex-wrap gap-4 text-sm text-gray-600">
            <div v-if="union.campus" class="flex items-center gap-1">
                <span class="font-semibold">Campus:</span>
                <span>{{ union.campus }}</span>
            </div>

            <div v-if="union.abbreviation" class="flex items-center gap-1">
                <span class="font-semibold">Abbreviation:</span>
                <span>{{ union.abbreviation }}</span>
            </div>
        </div>

        <div v-if="filtered_icon_array.length" class="flex flex-wrap gap-4">
            <a 
                v-for="icon in filtered_icon_array" 
                :href="icon.url" 
                target="_blank" 
                rel="noopener noreferrer"
                class="!size-7"
            >
                <Icon :icon="icon.img" class="size-full" />
            </a>
        </div>

        <div v-if="union.institutions && union.institutions.length > 0" class="mt-2">
            <h3 class="text-sm font-semibold text-gray-700 mb-3">Institutions:</h3>
            <div class="flex flex-wrap gap-3">
                <InstitutionCardComponent 
                    v-for="institution in union.institutions" 
                    :key="institution.id"
                    :institution="institution"
                />
            </div>
        </div>
    </article>
</template>

<script setup lang="ts">
import type { PropType } from 'vue';
import { Icon } from '@iconify/vue';
import type Union from '~~/types/union';
import type IconType from '~~/types/icon';
import type FilteredIconType from '~~/types/filtered-icon';
import InstitutionCardComponent from '~/components/institution-card/component.vue';

const { union } = defineProps({
    union: {
        type: Object as PropType<Union>,
        required: true
    }
});

const icon_array: IconType[] = [
    {
        url: union.website,
        img: 'streamline-plump:web'
    },
    {
        url: union.facebook,
        img: 'logos:facebook'
    },
    {
        url: union.twitter,
        img: 'streamline-logos:x-twitter-logo-block'
    },
    {
        url: union.instagram,
        img: 'skill-icons:instagram'
    },
]

const filtered_icon_array: FilteredIconType[] = icon_array.filter(
    (icon): icon is FilteredIconType => icon.url !== null
)
</script>
