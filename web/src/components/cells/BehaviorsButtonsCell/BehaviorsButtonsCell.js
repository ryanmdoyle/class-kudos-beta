import FeedbackButton from 'src/components/FeedbackButton/FeedbackButton'
export const QUERY = gql`
  query BehaviorsButtonsQuery($groupId: String!) {
    group(id: $groupId) {
      id
      behaviors {
        id
        name
        value
      }
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ group, studentId }) => {
  if (!group) return <Empty />
  return group.behaviors.map((behavior) => (
    <FeedbackButton
      name={behavior.name}
      studentId={studentId}
      behaviorId={behavior.id}
      key={behavior.id}
    />
  ))
}
