import { render } from '@redwoodjs/testing'

import Manage from './Manage'

describe('Manage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Manage />)
    }).not.toThrow()
  })
})
