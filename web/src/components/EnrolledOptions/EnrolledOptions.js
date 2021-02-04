import EnrollmentsOfGroupCell from 'src/components/cells/EnrollmentsOfGroupCell/EnrollmentsOfGroupCell'

const EnrolledOptions = ({ groupId }) => {
  return (
    <div className="white-box mt-4">
      <h2 className="text-xl font-display mb-2">Enrolled</h2>
      <EnrollmentsOfGroupCell groupId={groupId} />
    </div>
  )
}

export default EnrolledOptions
