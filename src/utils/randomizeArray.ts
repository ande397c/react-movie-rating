import { TMovie } from '@/types/movie'
import { getRandomArrayElements } from './getRandomArrayElements'

export const randomizeArray = (array: TMovie[]) => {
  let randomElements: TMovie[] = []
  randomElements = getRandomArrayElements(array, 2)
  let wrongValues

  do {
    randomElements = getRandomArrayElements(array, 2)
    wrongValues =
      randomElements[0].rating === randomElements[1].rating ||
      Math.abs(randomElements[0].rating - randomElements[1].rating) < 0.2
  } while (wrongValues)

  return randomElements
}
