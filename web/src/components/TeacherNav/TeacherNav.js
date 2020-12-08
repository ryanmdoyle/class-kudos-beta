import GroupsOwnedCell from '../cells/GroupsOwnedCell/GroupsOwnedCell'

const TeacherNav = () => {
  return (
    <div className="w-full flex flex-col justify-between p-4">
      <span className="text-lg font-display mb-2">Classes</span>
      <GroupsOwnedCell groupType="primary" />
      <span className="text-lg font-display mb-2 mt-2">Groups</span>
      <GroupsOwnedCell groupType="secondary" />
    </div>
  )
}

export default TeacherNav
