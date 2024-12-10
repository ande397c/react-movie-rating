export const getQualityPoster = (poster: string) => {
  if (poster.includes('@._V1')) {
    // Replace original media-amazon poster with quality one
    const moviePoster =
      poster.substring(0, poster.lastIndexOf('._') + 1) +
      'V1_SY1000_CR0,0,674,1000_AL_.jpg'

    return moviePoster
  }
  // If poster is not from media-amazon return original
  return poster
}
