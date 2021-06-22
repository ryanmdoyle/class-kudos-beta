import { render } from '@redwoodjs/testing'

import AllEnrolledPage from './AllEnrolledPage'

describe('AllEnrolledPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AllEnrolledPage />)
    }).not.toThrow()
  })
})
