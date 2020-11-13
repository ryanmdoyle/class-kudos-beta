import FeedbacksLayout from 'src/layouts/Scaffolds/FeedbacksLayout'
import FeedbackCell from 'src/components/Scaffolds/FeedbackCell'

const FeedbackPage = ({ id }) => {
  return (
    <FeedbacksLayout>
      <FeedbackCell id={id} />
    </FeedbacksLayout>
  )
}

export default FeedbackPage
