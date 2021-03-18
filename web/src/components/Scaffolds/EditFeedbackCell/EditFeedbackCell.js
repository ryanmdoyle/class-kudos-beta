import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'
import FeedbackForm from 'src/components/Scaffolds/FeedbackForm'

export const QUERY = gql`
  query FIND_FEEDBACK_BY_ID($id: String!) {
    feedback: feedback(id: $id) {
      id
      createdAt
      userId
      behaviorId
      groupId
    }
  }
`
const UPDATE_FEEDBACK_MUTATION = gql`
  mutation UpdateFeedbackMutation($id: String!, $input: UpdateFeedbackInput!) {
    updateFeedback(id: $id, input: $input) {
      id
      createdAt
      userId
      behaviorId
      groupId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Success = ({ feedback }) => {
  const [updateFeedback, { loading, error }] = useMutation(
    UPDATE_FEEDBACK_MUTATION,
    {
      onCompleted: () => {
        navigate(routes.scaffoldsFeedbacks())
        toast.success('Feedback updated.', { classes: 'rw-flash-success' })
      },
    }
  )

  const onSave = (input, id) => {
    updateFeedback({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit Feedback {feedback.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <FeedbackForm
          feedback={feedback}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
