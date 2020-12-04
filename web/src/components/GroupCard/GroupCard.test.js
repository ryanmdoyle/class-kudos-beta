import { render } from '@redwoodjs/testing'

import GroupCard from './GroupCard'

describe('GroupCard', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<GroupCard />)
    }).not.toThrow()
  })
})
