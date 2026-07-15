import { describe, it, expect } from 'vitest'
import { getHighestRating } from '../src/features/game/utils/getHighestRating'

const MOVIES = [
  {
    id: 864,
    title: 'Cape Fear',
    release_date: '1962',
    rating: 7.7
  },
  {
    id: 48,
    title: 'Back to the Future',
    release_date: '1985',
    rating: 8.5
  },
  {
    id: 986,
    title: 'Escape from Alcatraz',
    release_date: '1979',
    rating: 7.6
  }
]

describe('getHighestRating', () => {
  it('returns the highest rating from an array of movies', () => {
    expect(getHighestRating(MOVIES)).toBe(8.5)
  })
})
