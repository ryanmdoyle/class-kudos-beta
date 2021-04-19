import { render } from '@redwoodjs/testing'

import EditGroupForm from './EditGroupForm'

describe('EditGroupForm', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<EditGroupForm />)
    }).not.toThrow()
  })
})
