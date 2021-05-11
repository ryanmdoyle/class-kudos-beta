import { render } from '@redwoodjs/testing'

import LogoutButton from './LogoutButton'

describe('LogoutButton', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<LogoutButton />)
    }).not.toThrow()
  })
})
