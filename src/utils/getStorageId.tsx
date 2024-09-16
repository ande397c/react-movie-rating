export const getStorageId = () => {
  const id = localStorage.getItem('id')

  if (!id) {
    return
  }

  try {
    return JSON.parse(id)
  } catch (error) {
    console.error('Error parsing JSON:', error)
    return null
  }
}
