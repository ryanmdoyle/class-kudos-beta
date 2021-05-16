import { render } from '@redwoodjs/testing'

import Student from './Student'

describe('Student', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Student />)
    }).not.toThrow()
  })
})
