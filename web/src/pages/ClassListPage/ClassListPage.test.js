import { render } from '@redwoodjs/testing'

import ClassListPage from './ClassListPage'

describe('ClassListPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ClassListPage />)
    }).not.toThrow()
  })
})
