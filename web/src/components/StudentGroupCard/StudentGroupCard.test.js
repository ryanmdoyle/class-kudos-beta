import { render } from '@redwoodjs/testing'

import StudentGroupCard from './StudentGroupCard'

describe('StudentGroupCard', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<StudentGroupCard />)
    }).not.toThrow()
  })
})
