import { render } from '@redwoodjs/testing'

import ReuseBehaviors from './ReuseBehaviors'

describe('ReuseBehaviors', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ReuseBehaviors />)
    }).not.toThrow()
  })
})
