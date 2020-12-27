import { render } from '@redwoodjs/testing'

import BehaviorButtons from './BehaviorButtons'

describe('BehaviorButtons', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<BehaviorButtons />)
    }).not.toThrow()
  })
})
