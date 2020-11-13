import { render } from '@redwoodjs/testing'

import NavItem from './NavItem'

describe('NavItem', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<NavItem />)
    }).not.toThrow()
  })
})
