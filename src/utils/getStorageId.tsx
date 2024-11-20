export const getStorageId = () => {
  const scoreId = localStorage.getItem('score_id')

  if (!scoreId) return

  return parseInt(scoreId)
}
