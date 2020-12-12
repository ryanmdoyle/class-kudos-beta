import GroupListCell from 'src/components/cells/GroupListCell/GroupListCell'

const ListView = ({ groupId }) => {
  return (
    <div className="w-full h-sub-full p-4 grid grid-cols-12 gap-4">
      <GroupListCell id={groupId} />
    </div>
  )
}

export default ListView
