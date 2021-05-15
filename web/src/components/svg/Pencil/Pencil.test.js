import { render } from '@redwoodjs/testing'

import Pencil from './Pencil'

describe('Pencil', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Pencil />)
    }).not.toThrow()
  })
})
