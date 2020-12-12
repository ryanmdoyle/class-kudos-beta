import { render } from '@redwoodjs/testing'

import RedeemedView from './RedeemedView'

describe('RedeemedView', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<RedeemedView />)
    }).not.toThrow()
  })
})
