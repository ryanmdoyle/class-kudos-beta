import { useMutation, useFlash } from '@redwoodjs/web'
import { navigate, routes } from '@redwoodjs/router'
import FeedbackForm from 'src/components/Scaffolds/FeedbackForm'

import { QUERY } from 'src/components/Scaffolds/FeedbacksCell'

const CREATE_FEEDBACK_MUTATION = gql`
  mutation CreateFeedbackMutation($input: CreateFeedbackInput!) {
    createFeedback(input: $input) {
      id
    }
  }
`

const NewFeedback = () => {
  const { addMessage } = useFlash()
  const [createFeedback, { loading, error }] = useMutation(
    CREATE_FEEDBACK_MUTATION,
    {
      onCompleted: () => {
        navigate(routes.scaffoldsFeedbacks())
        addMessage('Feedback created.', { classes: 'rw-flash-success' })
      },
      // This refetches the query on the list page. Read more about other ways to
      // update the cache over here:
      // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
      refetchQueries: [{ query: QUERY }],
      awaitRefetchQueries: true,
    }
  )

  const onSave = (input) => {
    createFeedback({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Feedback</h2>
      </header>
      <div className="rw-segment-main">
        <FeedbackForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewFeedback
