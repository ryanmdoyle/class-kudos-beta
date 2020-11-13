import { render } from '@redwoodjs/testing'

import ProtectedPage from './ProtectedPage'

describe('ProtectedPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ProtectedPage />)
    }).not.toThrow()
  })
})
