import { render } from '@redwoodjs/testing'

import ChooseRolePage from './ChooseRolePage'

describe('ChooseRolePage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ChooseRolePage />)
    }).not.toThrow()
  })
})
