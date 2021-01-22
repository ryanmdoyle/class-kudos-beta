import { render } from '@redwoodjs/testing'

import StudentGroupPage from './StudentGroupPage'

describe('StudentGroupPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<StudentGroupPage />)
    }).not.toThrow()
  })
})
