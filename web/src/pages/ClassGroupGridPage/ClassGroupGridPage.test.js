import { render } from '@redwoodjs/testing'

import ClassGroupGridPage from './ClassGroupGridPage'

describe('ClassGroupGridPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ClassGroupGridPage />)
    }).not.toThrow()
  })
})
