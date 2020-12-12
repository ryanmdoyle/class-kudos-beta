import { render } from '@redwoodjs/testing'

import GroupRedeemed from './GroupRedeemed'

describe('GroupRedeemed', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<GroupRedeemed />)
    }).not.toThrow()
  })
})
