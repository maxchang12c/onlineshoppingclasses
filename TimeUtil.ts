export function getAgeFromDOB (dob: Date): number {
  const diffInTime = Math.abs(dob.valueOf() - new Date().valueOf())
  const diffInYears = Math.ceil(diffInTime / (1000 * 60 * 60 * 24 * 365))
  return diffInYears
}

export function getUTCTimeStamp (date: Date): number {
  return Math.floor(date.valueOf() / 1000)
}
