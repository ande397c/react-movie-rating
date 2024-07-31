import { Movie } from '@/types/movie'
// interface GetRandomArrayElementsProps {
//   array: Movie[]
//   num: number
// }

export const getRandomArrayElements = (array: Movie[], num: number) => {
  const shuffled = [...array].sort(() => 0.5 - Math.random())
  return shuffled.slice(0, num)
}
