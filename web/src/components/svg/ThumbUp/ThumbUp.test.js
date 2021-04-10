import { render } from '@redwoodjs/testing'

import ThumbUp from './ThumbUp'

describe('ThumbUp', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ThumbUp />)
    }).not.toThrow()
  })
})
