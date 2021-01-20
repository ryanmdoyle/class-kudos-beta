import FeedbackPointsCell from 'src/components/cells/FeedbackPointsCell/FeedbackPointsCell'

<<<<<<< HEAD
const StudentPointsCard = ({ student }) => {
  const { id, firstName, lastName } = student || {}
=======
const StudentPointsCard = ({ student, points }) => {
  const { id, firstName, lastName } = student || {}

>>>>>>> 0494b32bcf1ff81a369446c3aae970ff023d2c0e
  return (
    <div className="h-36 white-box mt-1 mb-4 flex flex-col relative">
      <h1 className="text-3xl font-display mb-4">
        {firstName} {lastName}
      </h1>
      <div className="flex justify-end absolute bottom-2 right-4">
        <span className="font-display text-9xl text-green mr-8">
<<<<<<< HEAD
          {id && <FeedbackPointsCell userId={id} />}
=======
          <FeedbackPointsCell userId={id} loadingValue={points} />
>>>>>>> 0494b32bcf1ff81a369446c3aae970ff023d2c0e
        </span>
      </div>
    </div>
  )
}

export default StudentPointsCard
