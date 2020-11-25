import { render } from '@redwoodjs/testing'

import ClassGroupItem from './ClassGroupItem'

describe('ClassGroupItem', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ClassGroupItem />)
    }).not.toThrow()
  })
})
