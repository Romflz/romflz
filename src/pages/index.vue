<template>
  <DefaultLayout :hasContent="true">
    <template v-slot:header>
      <div class="header text-center">
        <h1 ref="heading" class="text-2xl font-bold">Hi, I'm Roman</h1>
        <p>
          A fullstack developer based in
          <span class="text-brand-orange">Malta</span>
        </p>
      </div>
    </template>
    <template v-slot:content>
      <div class="content max-w-4xl m-auto">
        <AboutBlock class="mb-6" />
        <ExperienceList />
      </div>
    </template>
  </DefaultLayout>
</template>

<script setup lang="ts">
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import ExperienceList from '@/components/ExperienceList.vue'
import AboutBlock from '@/components/AboutBlock.vue'

import { onMounted } from 'vue'
import { scrambleText } from '@/utils/animation.utils'
import { useTemplateRef } from 'vue'
import { useHead } from '@unhead/vue'

const heading = useTemplateRef<HTMLElement | null>('heading')

useHead({
  meta: [
    { property: 'og:title', content: 'Home - Romflz.com' },
    { property: 'og:description', content: 'Welcome to Romflz.com' },
  ],
})

onMounted(() => {
  scrambleText(heading.value!, 0.9)
})
</script>
