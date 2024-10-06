export const getStorageTimestamp = () => {
  const timestamp = localStorage.getItem('timestamp')

  if (!timestamp) {
    return
  }

  try {
    const epochTime = parseInt(timestamp, 10)
    if (isNaN(epochTime)) {
      throw new Error('Invalid timestamp')
    }

    const date = new Date(epochTime * 1000)
    const isoString = date.toISOString()
    const formatted = isoString.replace('Z', '+00:00')

    return formatted
  } catch (error) {
    console.error('Error processing timestamp:', error)
    return null
  }
}
