import { render } from '@redwoodjs/testing'

import SiteHeader from './SiteHeader'

describe('SiteHeader', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<SiteHeader />)
    }).not.toThrow()
  })
})
