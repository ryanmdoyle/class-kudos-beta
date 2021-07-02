import { render } from '@redwoodjs/testing'

import ReuseRewards from './ReuseRewards'

describe('ReuseRewards', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ReuseRewards />)
    }).not.toThrow()
  })
})
