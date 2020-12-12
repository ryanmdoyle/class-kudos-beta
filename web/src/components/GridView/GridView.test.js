import { render } from '@redwoodjs/testing'

import GridView from './GridView'

describe('GridView', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<GridView />)
    }).not.toThrow()
  })
})
