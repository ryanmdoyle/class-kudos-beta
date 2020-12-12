import { render } from '@redwoodjs/testing'

import GroupFeedback from './GroupFeedback'

describe('GroupFeedback', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<GroupFeedback />)
    }).not.toThrow()
  })
})
