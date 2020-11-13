import FeedbacksLayout from 'src/layouts/Scaffolds/FeedbacksLayout'
import EditFeedbackCell from 'src/components/Scaffolds/EditFeedbackCell'

const EditFeedbackPage = ({ id }) => {
  return (
    <FeedbacksLayout>
      <EditFeedbackCell id={id} />
    </FeedbacksLayout>
  )
}

export default EditFeedbackPage
