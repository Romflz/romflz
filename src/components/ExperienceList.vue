<template>
  <div class="flex items-center justify-center">
    <ul class="experience-list flex flex-wrap">
      <li v-for="experience in workExperiences" :key="experience.id" class="experience-item w-1/3 aspect-square odd:bg-brand-orange-200">
        <div class="company-info">
          <img v-if="experience.logo" :src="experience.logo" :alt="`${experience.company} logo`" class="company-logo" />
          <div class="company-details">
            <h3 class="job-title">{{ experience.title }}</h3>
            <span class="company-name">{{ experience.company }}</span>
            <span class="employment-period">
              {{ formatEmploymentPeriod(experience.period) }}
            </span>
          </div>
        </div>
        <div class="tags-container">
          <span v-for="tag in experience.tags" :key="tag" class="tag">
            {{ tag }}
          </span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { formatEmploymentPeriod } from '@/utils/generic'
import type { WorkExperience } from '@/types/experiences'

// Work experiences data
const workExperiences: WorkExperience[] = [
  {
    id: 'exp-1',
    title: 'Senior Frontend Developer',
    company: 'Tech Solutions Ltd',
    logo: '/logos/tech-solutions.svg',
    tags: ['tech', 'saas', 'startup'],
    period: {
      from: 2022,
      to: 2024,
    },
  },
  {
    id: 'exp-2',
    title: 'Full Stack Developer',
    company: 'Gaming International',
    logo: '/logos/gaming-intl.svg',
    tags: ['igaming', 'tech'],
    period: {
      from: 2020,
      to: 2022,
    },
  },
  {
    id: 'exp-3',
    title: 'Frontend Developer',
    company: 'Digital Agency Co',
    logo: '/logos/digital-agency.svg',
    tags: ['agency', 'branding', 'tech'],
    period: {
      from: 2019,
      to: 2020,
    },
  },
  {
    id: 'exp-4',
    title: 'Junior Developer',
    company: 'StartupXYZ',
    tags: ['startup', 'tech', 'e-commerce'],
    period: {
      from: 2018,
    },
  },
]
</script>
