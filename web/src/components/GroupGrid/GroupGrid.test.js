import { render } from '@redwoodjs/testing'

import GroupGrid from './GroupGrid'

describe('GroupGrid', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<GroupGrid />)
    }).not.toThrow()
  })
})
