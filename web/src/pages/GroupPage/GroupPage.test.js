import { render } from '@redwoodjs/testing'

import GroupPage from './GroupPage'

describe('GroupPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<GroupPage />)
    }).not.toThrow()
  })
})
