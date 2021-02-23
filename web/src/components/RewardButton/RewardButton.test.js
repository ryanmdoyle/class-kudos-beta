import { render } from '@redwoodjs/testing'

import RewardButton from './RewardButton'

describe('RewardButton', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<RewardButton />)
    }).not.toThrow()
  })
})
