import { render } from '@redwoodjs/testing'

import StudentDeleteEnrollment from './StudentDeleteEnrollment'

describe('StudentDeleteEnrollment', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<StudentDeleteEnrollment />)
    }).not.toThrow()
  })
})
