import { render } from '@redwoodjs/testing'

import RecentActivityListCard from './RecentActivityListCard'

describe('RecentActivityListCard', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<RecentActivityListCard />)
    }).not.toThrow()
  })
})
