import FeedbackButton from './FeedbackButton'

import { standard } from './FeedbackButton.mock'

export const generated = () => {
  return <FeedbackButton {...standard()} />
}

export default { title: 'Components/FeedbackButton' }
