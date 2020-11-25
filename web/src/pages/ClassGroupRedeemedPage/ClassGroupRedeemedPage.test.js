import { render } from '@redwoodjs/testing'

import ClassGroupRedeemedPage from './ClassGroupRedeemedPage'

describe('ClassGroupRedeemedPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ClassGroupRedeemedPage />)
    }).not.toThrow()
  })
})
