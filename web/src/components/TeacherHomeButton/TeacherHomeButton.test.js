import { render } from '@redwoodjs/testing'

import TeacherHomeButton from './TeacherHomeButton'

describe('TeacherHomeButton', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<TeacherHomeButton />)
    }).not.toThrow()
  })
})
