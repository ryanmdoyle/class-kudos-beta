import { render } from '@redwoodjs/testing'

import ProfileImageCircle from './ProfileImageCircle'

describe('ProfileImageCircle', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ProfileImageCircle />)
    }).not.toThrow()
  })
})
