import { render } from '@redwoodjs/testing'

import ListView from './ListView'

describe('ListView', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ListView />)
    }).not.toThrow()
  })
})
