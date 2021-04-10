import { render } from '@redwoodjs/testing'

import RibbonMedal from './RibbonMedal'

describe('RibbonMedal', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<RibbonMedal />)
    }).not.toThrow()
  })
})
