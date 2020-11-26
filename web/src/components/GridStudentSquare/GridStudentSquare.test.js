import { render } from '@redwoodjs/testing'

import GridStudentSquare from './GridStudentSquare'

describe('GridStudentSquare', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<GridStudentSquare />)
    }).not.toThrow()
  })
})
