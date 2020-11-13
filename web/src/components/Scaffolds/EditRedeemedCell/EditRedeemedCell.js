import { useMutation, useFlash } from '@redwoodjs/web'
import { navigate, routes } from '@redwoodjs/router'
import RedeemedForm from 'src/components/Scaffolds/RedeemedForm'

export const QUERY = gql`
  query FIND_REDEEMED_BY_ID($id: String!) {
    redeemed: redeemed(id: $id) {
      id
      userId
      rewardId
      createdAt
    }
  }
`
const UPDATE_REDEEMED_MUTATION = gql`
  mutation UpdateRedeemedMutation($id: String!, $input: UpdateRedeemedInput!) {
    updateRedeemed(id: $id, input: $input) {
      id
      userId
      rewardId
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Success = ({ redeemed }) => {
  const { addMessage } = useFlash()
  const [updateRedeemed, { loading, error }] = useMutation(
    UPDATE_REDEEMED_MUTATION,
    {
      onCompleted: () => {
        navigate(routes.scaffoldsRedeemeds())
        addMessage('Redeemed updated.', { classes: 'rw-flash-success' })
      },
    }
  )

  const onSave = (input, id) => {
    updateRedeemed({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit Redeemed {redeemed.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <RedeemedForm
          redeemed={redeemed}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
