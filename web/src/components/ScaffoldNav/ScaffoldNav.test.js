import { render } from '@redwoodjs/testing'

import ScaffoldNav from './ScaffoldNav'

describe('ScaffoldNav', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ScaffoldNav />)
    }).not.toThrow()
  })
})
