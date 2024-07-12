interface GetRandomArrayElementsProps<T> {
  array: T[]
  num: number
}

export const getRandomArrayElements = <T,>({
  array,
  num
}: GetRandomArrayElementsProps<T>): T[] => {
  const shuffled = [...array].sort(() => 0.5 - Math.random())
  return shuffled.slice(0, num)
}
