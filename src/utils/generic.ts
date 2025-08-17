import type { EmploymentPeriod } from '@/types/experiences'

export const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

export const formatEmploymentPeriod = (period: EmploymentPeriod): string => {
  if (!period.to) {
    // Only year provided
    return period.from.toString()
  }

  // From - To format
  return `${period.from} - ${period.to}`
}
