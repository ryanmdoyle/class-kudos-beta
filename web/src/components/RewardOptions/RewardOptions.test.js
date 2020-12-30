import { render } from '@redwoodjs/testing'

import RewardOptions from './RewardOptions'

describe('RewardOptions', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<RewardOptions />)
    }).not.toThrow()
  })
})
