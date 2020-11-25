import { render } from '@redwoodjs/testing'

import ClassGroupFeedbackPage from './ClassGroupFeedbackPage'

describe('ClassGroupFeedbackPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ClassGroupFeedbackPage />)
    }).not.toThrow()
  })
})
