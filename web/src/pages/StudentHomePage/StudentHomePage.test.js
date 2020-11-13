import { render } from '@redwoodjs/testing'

import StudentHomePage from './StudentHomePage'

describe('StudentHomePage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<StudentHomePage />)
    }).not.toThrow()
  })
})
