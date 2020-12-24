import { render } from '@redwoodjs/testing'

import PageLoader from './PageLoader'

describe('PageLoader', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<PageLoader />)
    }).not.toThrow()
  })
})
