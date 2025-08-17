<template>
  <header class="bg-white py-6 px-8 text-gray-600">
    <div class="flex items-center justify-end">
      <nav>
        <ul class="flex space-x-4">
          <li>
            <RouterLink to="/" class="nav-link"><span ref="homeLink">/Home</span></RouterLink>
          </li>
          <li>
            <RouterLink to="/portfolio" class="nav-link"><span ref="portfolioLink">/Portfolio</span></RouterLink>
          </li>
          <li>
            <RouterLink to="/blog" class="nav-link"><span ref="blogLink">/Blog</span></RouterLink>
          </li>
          <li>
            <RouterLink to="/contact" class="nav-button"><span ref="contactLink">/Contact</span></RouterLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { scrambleText } from '@/utils/animation.utils'
import { useTemplateRef } from 'vue'

import { delay } from '@/utils/generic'

const homeLink = useTemplateRef<HTMLElement | null>('homeLink')
const portfolioLink = useTemplateRef<HTMLElement | null>('portfolioLink')
const blogLink = useTemplateRef<HTMLElement | null>('blogLink')
const contactLink = useTemplateRef<HTMLElement | null>('contactLink')

onMounted(async () => {
  scrambleText(homeLink.value!, 0.3)
  await delay(150)

  scrambleText(portfolioLink.value!, 0.3)
  await delay(150)

  scrambleText(blogLink.value!, 0.3)
  await delay(150)

  scrambleText(contactLink.value!, 0.3)
})
</script>
