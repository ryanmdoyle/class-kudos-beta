import { render } from '@redwoodjs/testing'

import NewGroupButton from './NewGroupButton'

describe('NewGroupButton', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<NewGroupButton />)
    }).not.toThrow()
  })
})
