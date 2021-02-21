import { render } from '@redwoodjs/testing'

import StudentGroupCardLoader from './StudentGroupCardLoader'

describe('StudentGroupCardLoader', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<StudentGroupCardLoader />)
    }).not.toThrow()
  })
})
