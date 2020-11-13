import { render } from '@redwoodjs/testing'

import TeacherHomePage from './TeacherHomePage'

describe('TeacherHomePage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<TeacherHomePage />)
    }).not.toThrow()
  })
})
