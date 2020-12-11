import { render } from '@redwoodjs/testing'

import StudentPointsCard from './StudentPointsCard'

describe('StudentPointsCard', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<StudentPointsCard />)
    }).not.toThrow()
  })
})
