import { Link, routes } from '@redwoodjs/router'

import Redeemeds from 'src/components/Scaffolds/Redeemeds'

export const QUERY = gql`
  query REDEEMEDS {
    redeemeds {
      id
      userId
      name
      cost
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No redeemeds yet. '}
      <Link to={routes.scaffoldsNewRedeemed()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Success = ({ redeemeds }) => {
  return <Redeemeds redeemeds={redeemeds} />
}
