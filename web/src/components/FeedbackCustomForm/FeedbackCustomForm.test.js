import { render } from '@redwoodjs/testing'

import FeedbackCustomForm from './FeedbackCustomForm'

describe('FeedbackCustomForm', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<FeedbackCustomForm />)
    }).not.toThrow()
  })
})
