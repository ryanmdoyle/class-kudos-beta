import { render } from '@redwoodjs/testing'

import FeedbackView from './FeedbackView'

describe('FeedbackView', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<FeedbackView />)
    }).not.toThrow()
  })
})
