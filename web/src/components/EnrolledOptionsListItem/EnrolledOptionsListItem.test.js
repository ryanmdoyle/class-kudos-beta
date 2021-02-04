import { render } from '@redwoodjs/testing'

import EnrolledOptionsListItem from './EnrolledOptionsListItem'

describe('EnrolledOptionsListItem', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<EnrolledOptionsListItem />)
    }).not.toThrow()
  })
})
