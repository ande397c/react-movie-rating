export const getQualityPoster = (poster: string) => {
  const moviePoster =
    poster.substring(0, poster.lastIndexOf('._') + 1) +
    'V1_SY1000_CR0,0,674,1000_AL_.jpg'
  return moviePoster
}
