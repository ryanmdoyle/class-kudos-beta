import { render } from '@redwoodjs/testing'

import AllEnrolledList from './AllEnrolledList'

describe('AllEnrolledList', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AllEnrolledList />)
    }).not.toThrow()
  })
})
