import { render } from '@redwoodjs/testing'

import CopyBehaviorListItem from './CopyBehaviorListItem'

describe('CopyBehaviorListItem', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<CopyBehaviorListItem />)
    }).not.toThrow()
  })
})
