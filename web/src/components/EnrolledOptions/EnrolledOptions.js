import EnrolledListCell from 'src/components/cells/EnrolledListCell/EnrolledListCell'

const EnrolledOptions = ({ groupId }) => {
  return (
    <div className="white-box mt-4">
      <h2 className="text-xl font-display mb-2">Enrolled</h2>
      <EnrolledListCell groupId={groupId} />
    </div>
  )
}

export default EnrolledOptions
