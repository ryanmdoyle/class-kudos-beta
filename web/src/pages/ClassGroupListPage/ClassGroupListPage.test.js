import { render } from '@redwoodjs/testing'

import ClassGroupListPage from './ClassGroupListPage'

describe('ClassGroupListPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ClassGroupListPage />)
    }).not.toThrow()
  })
})
