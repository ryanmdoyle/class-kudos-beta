import { render } from '@redwoodjs/testing'

import ListViewStudentItem from './ListViewStudentItem'

describe('ListViewStudentItem', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ListViewStudentItem />)
    }).not.toThrow()
  })
})
