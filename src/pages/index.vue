<template>
  <DefaultLayout :hasContent="true">
    <template v-slot:header>
      <div class="header text-center">
        <h1 ref="heading" class="text-2xl font-bold">Hi, I'm Roman</h1>
        <p>A fullstack developer based in <span class="text-brand-orange">Malta</span></p>
      </div>
    </template>
    <template v-slot:content>
      <div class="content">
        <ExperienceList />
      </div>
    </template>
  </DefaultLayout>
</template>

<script setup lang="ts">
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import ExperienceList from '@/components/ExperienceList.vue'

import { onMounted } from 'vue'
import { scrambleText } from '@/utils/animation.utils'
import { useTemplateRef } from 'vue'

const heading = useTemplateRef<HTMLElement | null>('heading')

onMounted(() => {
  scrambleText(heading.value!, 0.9)
})
</script>
