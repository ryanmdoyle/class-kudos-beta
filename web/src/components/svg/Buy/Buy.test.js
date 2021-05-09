import { render } from '@redwoodjs/testing'

import Buy from './Buy'

describe('Buy', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Buy width='100' />)
    }).not.toThrow()
  })
})
