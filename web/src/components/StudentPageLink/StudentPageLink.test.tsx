import { render } from '@redwoodjs/testing'

import StudentPageLink from './StudentPageLink'

describe('StudentPageLink', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<StudentPageLink />)
    }).not.toThrow()
  })
})
