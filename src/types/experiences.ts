export interface EmploymentPeriod {
  from: number // year as number
  to?: number // optional year as number
}

export type IndustryTag = 'branding' | 'tech' | 'igaming' | 'fintech' | 'e-commerce' | 'saas' | 'agency' | 'startup' | 'enterprise'

export interface WorkExperience {
  id: string
  title: string
  company: string
  logo?: string
  tags: IndustryTag[]
  period: EmploymentPeriod
}
