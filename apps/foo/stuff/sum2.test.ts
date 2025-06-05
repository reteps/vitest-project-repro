import { expect, test } from 'vitest'
import { sum2 } from './sum2.js'

test('adds 2 + 2 to equal 3', () => {
  expect(sum2(2, 2)).toBe(4)
})