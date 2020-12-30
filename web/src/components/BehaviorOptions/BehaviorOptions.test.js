import { render } from '@redwoodjs/testing'

import BehaviorOptions from './BehaviorOptions'

describe('BehaviorOptions', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<BehaviorOptions />)
    }).not.toThrow()
  })
})
