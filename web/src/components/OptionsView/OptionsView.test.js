import { render } from '@redwoodjs/testing'

import OptionsView from './OptionsView'

describe('OptionsView', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<OptionsView />)
    }).not.toThrow()
  })
})
