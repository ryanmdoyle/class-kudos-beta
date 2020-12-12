import GroupStudentListCell from 'src/components/cells/GroupStudentListCell/GroupStudentListCell'

const ListView = ({ groupId }) => {
  return (
    <div className="w-full h-sub-full p-4 grid grid-cols-12 gap-4">
      <GroupStudentListCell id={groupId} />
    </div>
  )
}

export default ListView
