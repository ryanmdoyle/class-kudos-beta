import { render } from '@redwoodjs/testing'

import GroupList from './GroupList'

describe('GroupList', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<GroupList />)
    }).not.toThrow()
  })
})
