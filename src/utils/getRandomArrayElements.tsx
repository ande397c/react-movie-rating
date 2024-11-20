import { TMovie } from '@/types/movie'

export const getRandomArrayElements = (array: TMovie[], num: number) => {
  const shuffled = [...array].sort(() => 0.5 - Math.random())
  return shuffled.slice(0, num)
}
