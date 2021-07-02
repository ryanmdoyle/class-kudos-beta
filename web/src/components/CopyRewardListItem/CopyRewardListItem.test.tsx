import { render } from '@redwoodjs/testing'

import CopyRewardListItem from './CopyRewardListItem'

describe('CopyRewardListItem', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<CopyRewardListItem />)
    }).not.toThrow()
  })
})
