import { render } from '@redwoodjs/testing'

import SubNav from './SubNav'

describe('SubNav', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<SubNav />)
    }).not.toThrow()
  })
})
