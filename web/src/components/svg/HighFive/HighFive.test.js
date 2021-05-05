import { render } from '@redwoodjs/testing'

import HighFive from './HighFive'

describe('HighFive', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<HighFive />)
    }).not.toThrow()
  })
})
