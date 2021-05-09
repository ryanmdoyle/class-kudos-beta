import { render } from '@redwoodjs/testing'

import BehaviorButtons from './BehaviorButtons'
import { standard } from './BehaviorButtons.mock'

describe('BehaviorButtons', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<BehaviorButtons selected={standard().selected} />)
    }).not.toThrow()
  })
})
