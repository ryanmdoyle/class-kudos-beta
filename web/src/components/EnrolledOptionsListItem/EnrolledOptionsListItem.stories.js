import EnrolledOptionsListItem from './EnrolledOptionsListItem'
import { standard } from './EnrolledOptionsListItem.mock'

export const generated = () => {
  return <EnrolledOptionsListItem {...standard()} />
}

export default { title: 'Components/EnrolledOptionsListItem' }
