import { render } from '@redwoodjs/testing'

import StudentNavLink from './StudentNavLink'

describe('StudentNavLink', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<StudentNavLink />)
    }).not.toThrow()
  })
})
