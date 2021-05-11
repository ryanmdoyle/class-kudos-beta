import BehaviorOptionsListItem from 'src/components/BehaviorOptionsListItem/BehaviorOptionsListItem'
import LoadingOptionsListItem from 'src/components/LoadingOptionsListItem/LoadingOptionsListItem'

export const QUERY = gql`
  query BehaviorsListQuery($groupId: String!) {
    behaviorsOfGroup(groupId: $groupId) {
      id
      name
      value
    }
  }
`

export const Loading = () => <LoadingOptionsListItem />

export const Empty = () => (
  <div className="text-gray-400">No behaviors created.</div>
)

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ behaviorsOfGroup, groupId }) => {
  return (
    <ul className="w-full">
      {behaviorsOfGroup?.map((behavior) => (
        <BehaviorOptionsListItem
          key={behavior.id}
          id={behavior.id}
          name={behavior.name}
          value={behavior.value}
          groupId={groupId}
        />
      ))}
    </ul>
  )
}
