import { render } from '@redwoodjs/testing'

import RewardOptionsListItem from './RewardOptionsListItem'

describe('RewardOptionsListItem', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<RewardOptionsListItem />)
    }).not.toThrow()
  })
})
