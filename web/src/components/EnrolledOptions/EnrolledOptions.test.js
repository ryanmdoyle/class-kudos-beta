import { render } from '@redwoodjs/testing'

import EnrolledOptions from './EnrolledOptions'

describe('EnrolledOptions', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<EnrolledOptions />)
    }).not.toThrow()
  })
})
