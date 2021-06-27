import EnrollmentsOfGroupCell from 'src/components/cells/EnrollmentsOfGroupCell/EnrollmentsOfGroupCell'

const EnrolledOptions = ({ groupId }) => {
  return (
    <div className="white-box mt-4">
    <div className="flex justify-between mb-4 h-8 items-center">
      <h2 className="text-xl font-display">Enrolled</h2>
      {/* <button
          className="button-green"
          onClick={() => {
            addBehavior()
          }}
        >
          Add Behavior
        </button> */}
    </div>
      <EnrollmentsOfGroupCell groupId={groupId} />
    </div>
  )
}

export default EnrolledOptions
