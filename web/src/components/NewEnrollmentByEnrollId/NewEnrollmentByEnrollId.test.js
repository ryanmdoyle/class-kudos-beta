import { render } from '@redwoodjs/testing'

import NewEnrollmentByEnrollId from './NewEnrollmentByEnrollId'

describe('NewEnrollmentByEnrollId', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<NewEnrollmentByEnrollId />)
    }).not.toThrow()
  })
})
