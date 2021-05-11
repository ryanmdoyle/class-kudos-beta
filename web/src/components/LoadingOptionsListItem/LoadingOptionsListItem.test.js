import { render } from '@redwoodjs/testing'

import LoadingOptionsListItem from './LoadingOptionsListItem'

describe('LoadingOptionsListItem', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<LoadingOptionsListItem />)
    }).not.toThrow()
  })
})
