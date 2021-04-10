import { render } from '@redwoodjs/testing'

import ThumbDown from './ThumbDown'

describe('ThumbDown', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ThumbDown />)
    }).not.toThrow()
  })
})
