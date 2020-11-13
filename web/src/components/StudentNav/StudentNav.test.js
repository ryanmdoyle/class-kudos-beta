import { render } from '@redwoodjs/testing'

import StudentNav from './StudentNav'

describe('StudentNav', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<StudentNav />)
    }).not.toThrow()
  })
})
