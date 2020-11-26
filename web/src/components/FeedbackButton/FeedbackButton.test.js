import { render } from '@redwoodjs/testing'

import FeedbackButton from './FeedbackButton'

describe('FeedbackButton', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<FeedbackButton />)
    }).not.toThrow()
  })
})
