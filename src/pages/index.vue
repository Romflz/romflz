<template>
  <DefaultLayout :hasContent="true">
    <template v-slot:header>
      <div class="header text-center">
        <h1 ref="heading" class="text-2xl font-bold">Hi, I'm Roman</h1>
        <p>A fullstack developer based in Malta</p>
        <p>Checkout <span ref="portfolioLink" class="text-brand-orange" @mouseover="scrambleItem">/portfolio</span> section</p>
      </div>
    </template>
  </DefaultLayout>
</template>

<script setup lang="ts">
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import { onMounted } from 'vue'
import { scrambleText } from '@/utils/animation.utils'
import { useTemplateRef } from 'vue'

const heading = useTemplateRef<HTMLElement | null>('heading')
const portfolioLink = useTemplateRef<HTMLElement | null>('portfolioLink')

const scrambleItem = () => {
  scrambleText(portfolioLink.value!, 0.6)
}

onMounted(() => {
  scrambleText(heading.value!, 0.9)
})
</script>
