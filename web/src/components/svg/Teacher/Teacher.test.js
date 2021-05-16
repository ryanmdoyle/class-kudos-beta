import { render } from '@redwoodjs/testing'

import Teacher from './Teacher'

describe('Teacher', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Teacher />)
    }).not.toThrow()
  })
})
