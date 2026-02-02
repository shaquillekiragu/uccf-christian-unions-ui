<template>
    <article class="w-full max-w-4xl mx-8 rounded-lg border border-gray-200 shadow-sm hover:shadow-md p-6 bg-white">
        <div class="flex flex-col gap-4">
            <div class="flex flex-col gap-2">
                <h2 class="text-2xl font-bold text-gray-900">{{ name }}</h2>
                <p class="text-lg text-gray-700">{{ full_name }}</p>
            </div>

            <div class="flex flex-wrap gap-4 text-sm text-gray-600">
                <div v-if="campus" class="flex items-center gap-1">
                    <span class="font-semibold">Campus:</span>
                    <span>{{ campus }}</span>
                </div>
                <div v-if="abbreviation" class="flex items-center gap-1">
                    <span class="font-semibold">Abbreviation:</span>
                    <span>{{ abbreviation }}</span>
                </div>
            </div>

            <div class="flex flex-wrap gap-4">
                <a 
                    v-if="website" 
                    :href="website" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    class="text-blue-600 hover:text-blue-800 underline text-sm"
                >
                    <Icon name="streamline-plump:web" class="!w-5 !h-5 bg-black text-black" />
                </a>
                <a 
                    v-if="facebook" 
                    :href="facebook" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    class="text-blue-600 hover:text-blue-800 underline text-sm"
                >
                    <Icon name="ic:baseline-facebook" class="!w-5 !h-5 bg-black text-black" />
                </a>
                <a 
                    v-if="twitter" 
                    :href="twitter" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    class="text-blue-600 hover:text-blue-800 underline text-sm"
                >
                    <Icon name="ic:baseline-twitter" class="!w-5 !h-5 bg-black text-black" />
                </a>
                <a 
                    v-if="instagram" 
                    :href="instagram" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    class="text-blue-600 hover:text-blue-800 underline text-sm"
                >
                    <Icon name="ic:baseline-instagram" class="!w-5 !h-5 bg-black text-black" />
                </a>
                <a 
                    v-if="url" 
                    :href="url" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    class="text-blue-600 hover:text-blue-800 underline text-sm"
                >
                    More Info
                </a>
            </div>

            <div v-if="institutions && institutions.length > 0" class="mt-2">
                <h3 class="text-sm font-semibold text-gray-700 mb-3">Institutions:</h3>

                <div class="flex flex-wrap gap-3">
                    <InstitutionCardComponent 
                        v-for="institution in institutions" 
                        :key="institution.id"
                        :institution="institution"
                    />
                </div>
            </div>
        </div>
    </article>
</template>

<script setup lang="ts">
import type { PropType } from 'vue';
import { toRefs } from 'vue';
import type Union from '~~/types/union';
import InstitutionCardComponent from '~/components/institution-card/component.vue';

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
