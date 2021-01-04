import FeedbackPointsCell from 'src/components/cells/FeedbackPointsCell/FeedbackPointsCell'

const StudentPointsCard = ({ student, points }) => {
  const { id, firstName, lastName } = student || {}

  return (
    <div className="h-48 white-box mt-1 mb-4 flex flex-col relative">
      <h1 className="text-3xl font-display mb-4">
        {firstName} {lastName}
      </h1>
      <div className="flex justify-end absolute bottom-2 right-4">
        <span className="font-display text-9xl text-green mr-8">
          <FeedbackPointsCell userId={id} loadingValue={points} />
        </span>
      </div>
    </div>
  )
}

export default StudentPointsCard
