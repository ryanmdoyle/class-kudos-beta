import Behavior from 'src/components/Scaffolds/Behavior'

export const QUERY = gql`
  query FIND_BEHAVIOR_BY_ID($id: String!) {
    behavior: behavior(id: $id) {
      id
      name
      value
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Behavior not found</div>

export const Success = ({ behavior }) => {
  return <Behavior behavior={behavior} />
}
