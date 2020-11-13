import { useMutation, useFlash } from '@redwoodjs/web'
import { navigate, routes } from '@redwoodjs/router'
import RedeemedForm from 'src/components/Scaffolds/RedeemedForm'

import { QUERY } from 'src/components/Scaffolds/RedeemedsCell'

const CREATE_REDEEMED_MUTATION = gql`
  mutation CreateRedeemedMutation($input: CreateRedeemedInput!) {
    createRedeemed(input: $input) {
      id
    }
  }
`

const NewRedeemed = () => {
  const { addMessage } = useFlash()
  const [createRedeemed, { loading, error }] = useMutation(
    CREATE_REDEEMED_MUTATION,
    {
      onCompleted: () => {
        navigate(routes.scaffoldsRedeemeds())
        addMessage('Redeemed created.', { classes: 'rw-flash-success' })
      },
      // This refetches the query on the list page. Read more about other ways to
      // update the cache over here:
      // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
      refetchQueries: [{ query: QUERY }],
      awaitRefetchQueries: true,
    }
  )

  const onSave = (input) => {
    createRedeemed({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Redeemed</h2>
      </header>
      <div className="rw-segment-main">
        <RedeemedForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewRedeemed
