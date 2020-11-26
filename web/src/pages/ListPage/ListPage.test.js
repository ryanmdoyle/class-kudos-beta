import { render } from '@redwoodjs/testing'

import ListPage from './ListPage'

describe('ListPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ListPage />)
    }).not.toThrow()
  })
})
