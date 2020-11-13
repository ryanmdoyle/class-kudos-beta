import { render } from '@redwoodjs/testing'

import TeacherNav from './TeacherNav'

describe('TeacherNav', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<TeacherNav />)
    }).not.toThrow()
  })
})
