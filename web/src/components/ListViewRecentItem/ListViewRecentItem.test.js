import { render } from '@redwoodjs/testing'

import ListViewRecentItem from './ListViewRecentItem'

describe('ListViewRecentItem', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ListViewRecentItem />)
    }).not.toThrow()
  })
})
