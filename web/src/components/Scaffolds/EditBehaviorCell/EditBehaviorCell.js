import { useMutation, useFlash } from '@redwoodjs/web'
import { navigate, routes } from '@redwoodjs/router'
import BehaviorForm from 'src/components/Scaffolds/BehaviorForm'

export const QUERY = gql`
  query FIND_BEHAVIOR_BY_ID($id: String!) {
    behavior: behavior(id: $id) {
      id
      name
      value
      groupId
    }
  }
`
const UPDATE_BEHAVIOR_MUTATION = gql`
  mutation UpdateBehaviorMutation($id: String!, $input: UpdateBehaviorInput!) {
    updateBehavior(id: $id, input: $input) {
      id
      name
      value
      groupId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Success = ({ behavior }) => {
  const { addMessage } = useFlash()
  const [updateBehavior, { loading, error }] = useMutation(
    UPDATE_BEHAVIOR_MUTATION,
    {
      onCompleted: () => {
        navigate(routes.scaffoldsBehaviors())
        addMessage('Behavior updated.', { classes: 'rw-flash-success' })
      },
    }
  )

  const onSave = (input, id) => {
    updateBehavior({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit Behavior {behavior.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <BehaviorForm
          behavior={behavior}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
