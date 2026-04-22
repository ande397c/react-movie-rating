import { describe, it, expect, vi, afterEach } from 'vitest'
import { getRandomArrayElements } from '../src/utils/getRandomArrayElements'

const MOVIES = [
  { id: 1, title: 'A', release_date: '2000', rating: 7 },
  { id: 2, title: 'B', release_date: '2001', rating: 8 },
  { id: 3, title: 'C', release_date: '2002', rating: 9 },
  { id: 4, title: 'D', release_date: '2003', rating: 6 }
]

describe('getRandomArrayElements', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('returns the requested number of elements', () => {
    const result = getRandomArrayElements(MOVIES, 2)
    expect(result).toHaveLength(2)
  })

  it('returns only elements from the original array', () => {
    const result = getRandomArrayElements(MOVIES, 3)

    result.forEach((movie) => {
      expect(MOVIES).toContainEqual(movie)
    })
  })

  it('throws if requested number exceeds array size', () => {
    expect(() => getRandomArrayElements(MOVIES, 10)).toThrow(
      'Requested number of elements exceeds array size'
    )
  })
})
