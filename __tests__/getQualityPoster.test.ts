import { describe, it, expect } from 'vitest'
import { getQualityPoster } from '../src/features/game/utils/getQualityPoster'

describe('getQualityPoster', () => {
  it('returns original poster since media is not amazon', () => {
    const NON_AMAZON_POSTER =
      'https://www.movieposters.com/cdn/shop/products/13c2f41cfb4aaf7cec73f1d3a5cce5b8_fb7c19d9-03df-4df8-80ee-824c691ffdb8_grande.jpg?v=1573587292'

    const result = getQualityPoster(NON_AMAZON_POSTER)

    expect(result).toBe(NON_AMAZON_POSTER)
  })

  it('replaces Amazon poster with high quality version', () => {
    const AMAZON_POSTER =
      'https://m.media-amazon.com/images/M/MV5BMjZiOTNlMzYtZWYwZS00YWJjLTk5NDgtODkwNjRhMDI0MjhjXkEyXkFqcGdeQXVyMjgyNjk3MzE@._V1_UY98_CR1,0,67,98_AL_.jpg'

    const result = getQualityPoster(AMAZON_POSTER)

    expect(result).toBe(
      'https://m.media-amazon.com/images/M/MV5BMjZiOTNlMzYtZWYwZS00YWJjLTk5NDgtODkwNjRhMDI0MjhjXkEyXkFqcGdeQXVyMjgyNjk3MzE@.V1_SY1000_CR0,0,674,1000_AL_.jpg'
    )
  })
})
