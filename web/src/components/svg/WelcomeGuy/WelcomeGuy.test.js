import { render } from '@redwoodjs/testing'

import WelcomeGuy from './WelcomeGuy'

describe('WelcomeGuy', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<WelcomeGuy />)
    }).not.toThrow()
  })
})
