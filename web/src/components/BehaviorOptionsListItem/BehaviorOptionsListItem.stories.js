import BehaviorOptionsListItem from './BehaviorOptionsListItem'

import { standard } from './BehaviorOptionsListItem.mock'

export const generated = () => {
  return <BehaviorOptionsListItem {...standard()} />
}

export default { title: 'Components/BehaviorOptionsListItem' }
