import { render } from '@redwoodjs/testing'

import Give from './Give'

describe('Give', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Give width='100' />)
    }).not.toThrow()
  })
})
