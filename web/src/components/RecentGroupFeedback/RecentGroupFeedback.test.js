import { render } from '@redwoodjs/testing'

import RecentGroupFeedback from './RecentGroupFeedback'

describe('RecentGroupFeedback', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<RecentGroupFeedback />)
    }).not.toThrow()
  })
})
