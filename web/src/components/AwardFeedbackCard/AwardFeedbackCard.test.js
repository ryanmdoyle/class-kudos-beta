import { render } from '@redwoodjs/testing'

import AwardFeedbackCard from './AwardFeedbackCard'

describe('AwardFeedbackCard', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AwardFeedbackCard />)
    }).not.toThrow()
  })
})
