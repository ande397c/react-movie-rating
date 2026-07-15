import { TMovie } from '@/features/game/types/movie'
import { getRandomArrayElements } from './getRandomArrayElements'

const DIFFERENCE_THRESHOLD = 0.5

export const randomizeArray = (array: TMovie[]) => {
  let randomElements: TMovie[] = []
  randomElements = getRandomArrayElements(array, 2)
  let wrongValues

  do {
    randomElements = getRandomArrayElements(array, 2)
    wrongValues =
      randomElements[0].rating === randomElements[1].rating ||
      Math.abs(randomElements[0].rating - randomElements[1].rating) <
        DIFFERENCE_THRESHOLD
  } while (wrongValues)

  return randomElements
}
