export type DeviceTypes = 'Android' | 'iOS' | 'PC'

export const detectDevice = (): DeviceTypes => {
  const userAgent = navigator.userAgent
  if (/Android/i.test(userAgent)) {
    return 'Android'
  }
  if (/iPhone|iPad|iPod/i.test(userAgent)) {
    return 'iOS'
  }
  return 'PC'
}
