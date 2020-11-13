import Feedback from 'src/components/Scaffolds/Feedback'

export const QUERY = gql`
  query FIND_FEEDBACK_BY_ID($id: String!) {
    feedback: feedback(id: $id) {
      id
      type
      createdAt
      userId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Feedback not found</div>

export const Success = ({ feedback }) => {
  return <Feedback feedback={feedback} />
}
