import GroupCard from './GroupCard'

import { standard } from './GroupCard.mock'

export const generated = () => {
  return <GroupCard {...standard()} />
}

export default { title: 'Components/GroupCard' }
