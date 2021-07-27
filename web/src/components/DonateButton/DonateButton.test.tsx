import { render } from '@redwoodjs/testing'

import DonateButton from './DonateButton'

describe('DonateButton', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<DonateButton />)
    }).not.toThrow()
  })
})
