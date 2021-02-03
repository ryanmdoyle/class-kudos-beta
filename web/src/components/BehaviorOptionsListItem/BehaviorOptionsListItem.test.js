import { render } from '@redwoodjs/testing'

import BehaviorOptionsListItem from './BehaviorOptionsListItem'

describe('BehaviorOptionsListItem', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<BehaviorOptionsListItem />)
    }).not.toThrow()
  })
})
