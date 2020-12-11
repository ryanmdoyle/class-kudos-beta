import { render } from '@redwoodjs/testing'

import RecentFeedbackListCard from './RecentFeedbackListCard'

describe('RecentFeedbackListCard', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<RecentFeedbackListCard />)
    }).not.toThrow()
  })
})
