import { render } from '@redwoodjs/testing'

import AdminNav from './AdminNav'

describe('AdminNav', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AdminNav />)
    }).not.toThrow()
  })
})
