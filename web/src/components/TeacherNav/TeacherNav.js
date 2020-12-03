import PrimaryGroupsOwnedCell from '../cells/PrimaryGroupsOwnedCell/PrimaryGroupsOwnedCell'
import SecondaryGroupsOwnedCell from '../cells/SecondaryGroupsOwnedCell/SecondaryGroupsOwnedCell'

const TeacherNav = () => {
  return (
    <div className="w-full flex flex-col justify-between p-4">
      <span className="text-lg font-display mb-2">Classes</span>
      <PrimaryGroupsOwnedCell />
      <span className="text-lg font-display mb-2 mt-2">Groups</span>
      <SecondaryGroupsOwnedCell />
    </div>
  )
}

export default TeacherNav
