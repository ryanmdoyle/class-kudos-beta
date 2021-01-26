import { render } from '@redwoodjs/testing'

import NewEnrollmentButton from './NewEnrollmentButton'

describe('NewEnrollmentButton', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<NewEnrollmentButton />)
    }).not.toThrow()
  })
})
