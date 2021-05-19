import { render } from '@redwoodjs/testing'

import StudentHomeButton from './StudentHomeButton'

describe('StudentHomeButton', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<StudentHomeButton />)
    }).not.toThrow()
  })
})
