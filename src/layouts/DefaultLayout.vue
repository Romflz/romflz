<template>
  <div class="h-full w-full flex flex-col">
    <Header class="flex-shrink-0 z-10"></Header>
    <main ref="mainContainer" class="flex-1 bg-white overflow-y-auto no-scrollbar z-5 px-6 flex flex-col">
      <div ref="scrollTrigger" class="h-full flex-shrink-0 flex items-center justify-center relative">
        <div ref="headerContainer">
          <slot name="header" />
        </div>
        <span v-if="props.hasContent" :class="{ 'opacity-0': hasScrolled }" class="absolute bottom-0 text-gray-500 transition-opacity duration-300 ease-in-out animate-bounce">
          scroll
        </span>
      </div>
      <slot name="content" />
    </main>
    <Footer class="flex-shrink-0 z-10"></Footer>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, nextTick, useTemplateRef } from 'vue'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import gsap from 'gsap'

import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

const props = defineProps<{
  hasContent?: boolean
}>()

const mainContainer = useTemplateRef<HTMLElement | null>('mainContainer')
const scrollTrigger = useTemplateRef<HTMLElement | null>('scrollTrigger')
const headerContainer = useTemplateRef<HTMLElement | null>('headerContainer')

const hasScrolled = ref(false)

let st: ScrollTrigger | null = null
let headerFadeTween: gsap.core.Tween | null = null

onMounted(async () => {
  await nextTick()
await nextTick()
  if (!mainContainer.value || !scrollTrigger.value || !headerContainer.value) {
    return
  }

  st = ScrollTrigger.create({
    scroller: mainContainer.value,
    trigger: scrollTrigger.value,
    start: 'top top-=10px',
    onToggle: (self) => {
      hasScrolled.value = self.isActive
    },
  })

  headerFadeTween = gsap.to(headerContainer.value, {
    opacity: 0,
    y: -100,
    ease: 'none',
    scrollTrigger: {
      scroller: mainContainer.value,
      trigger: scrollTrigger.value,
      start: 'top top',
      end: '20% top',
      scrub: true,
    },
  })
})

onBeforeUnmount(() => {
  if (st) {
    st.kill()
    st = null
  }

  if (headerFadeTween) {
    headerFadeTween.kill()
    headerFadeTween = null
  }
})
</script>
