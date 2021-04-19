import { render } from '@redwoodjs/testing'

import NewGroupForm from './NewGroupForm'

describe('NewGroupForm', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<NewGroupForm />)
    }).not.toThrow()
  })
})
