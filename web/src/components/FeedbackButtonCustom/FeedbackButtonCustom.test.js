import { render } from '@redwoodjs/testing'

import FeedbackButtonCustom from './FeedbackButtonCustom'

describe('FeedbackButtonCustom', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<FeedbackButtonCustom />)
    }).not.toThrow()
  })
})
