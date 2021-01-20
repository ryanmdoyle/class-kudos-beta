import { render } from '@redwoodjs/testing'

import EnrollmentByEnrollIdForm from './EnrollmentByEnrollIdForm'

describe('EnrollmentByEnrollIdForm', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<EnrollmentByEnrollIdForm />)
    }).not.toThrow()
  })
})
