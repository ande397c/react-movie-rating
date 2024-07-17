export const getStorageName = () => {
  const name = localStorage.getItem('name')
  if (!name) {
    return
  }
  return name
}
