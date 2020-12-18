import { useMutation, useFlash } from '@redwoodjs/web'
import { navigate, routes } from '@redwoodjs/router'
import BehaviorForm from 'src/components/Scaffolds/BehaviorForm'

import { QUERY } from 'src/components/Scaffolds/BehaviorsCell'

const CREATE_BEHAVIOR_MUTATION = gql`
  mutation CreateBehaviorMutation($input: CreateBehaviorInput!) {
    createBehavior(input: $input) {
      id
    }
  }
`

const NewBehavior = () => {
  const { addMessage } = useFlash()
  const [createBehavior, { loading, error }] = useMutation(
    CREATE_BEHAVIOR_MUTATION,
    {
      onCompleted: () => {
        navigate(routes.scaffoldsBehaviors())
        addMessage('Behavior created.', { classes: 'rw-flash-success' })
      },
    }
  )

  const onSave = (input) => {
    createBehavior({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Behavior</h2>
      </header>
      <div className="rw-segment-main">
        <BehaviorForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewBehavior
