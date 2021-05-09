import { render } from '@redwoodjs/testing'

import AwardFeedbackCard from './AwardFeedbackCard'
import { standard } from './AwardFeedbackCard.mock'

describe('AwardFeedbackCard', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AwardFeedbackCard
        groupId={standard().groupId}
        userId={standard().userId}
        behaviorsOfGroup={standard().behaviorsOfGroup}
        firstName={standard().firstName}
        selecting={standard().selecting}
        selected={standard().selected}
        setSelecting={standard().setSelecting}
        setSelected={standard().setSelected}
      />)
    }).not.toThrow()
  })
})
