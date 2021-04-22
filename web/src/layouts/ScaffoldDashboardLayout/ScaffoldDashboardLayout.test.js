import { render } from '@redwoodjs/testing'

import ScaffoldDashboardLayout from './ScaffoldDashboardLayout'

describe('ScaffoldDashboardLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ScaffoldDashboardLayout />)
    }).not.toThrow()
  })
})
