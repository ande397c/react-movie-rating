import { TMovie } from '@/types/movie'

export const getRandomArrayElements = (
  array: TMovie[],
  num: number
): TMovie[] => {
  if (num > array.length) {
    throw new Error('Requested number of elements exceeds array size')
  }

  const arr = [...array]
  for (let i = arr.length - 1; i > arr.length - 1 - num; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1))
    ;[arr[i], arr[randomIndex]] = [arr[randomIndex], arr[i]]
  }

  return arr.slice(-num)
}
