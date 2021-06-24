import { render } from '@redwoodjs/testing'

import StudentPage from './StudentPage'

describe('StudentPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<StudentPage />)
    }).not.toThrow()
  })
})
