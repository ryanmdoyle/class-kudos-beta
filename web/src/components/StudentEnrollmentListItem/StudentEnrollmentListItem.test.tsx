import { render } from '@redwoodjs/testing'

import StudentEnrollmentListItem from './StudentEnrollmentListItem'

describe('StudentEnrollmentListItem', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<StudentEnrollmentListItem />)
    }).not.toThrow()
  })
})
