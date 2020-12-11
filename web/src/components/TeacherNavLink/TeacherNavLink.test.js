import { render } from '@redwoodjs/testing'

import TeacherNavLink from './TeacherNavLink'

describe('TeacherNavLink', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<TeacherNavLink />)
    }).not.toThrow()
  })
})
