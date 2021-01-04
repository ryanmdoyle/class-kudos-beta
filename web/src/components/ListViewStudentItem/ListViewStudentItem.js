import FeedbackPointsCell from 'src/components/cells/FeedbackPointsCell/FeedbackPointsCell'

const ListViewStudentItem = ({ student, onClick }) => {
  const { id, firstName, lastName, feedback } = student
  let points = 0
  feedback.forEach((feedback) => (points += feedback.behavior.value))
  return (
    <li
      className="h-12 w-full white-box hover:ring-2 ring-purple-500 flex items-center justify-between mb-2"
      onClick={() => {
        onClick()
      }}
    >
      <div className="flex items-center">
        <img src="/profile.jpg" className="h-6 w-6 rounded-full mr-2"></img>
        <span className="text-normal">
          {firstName ? `${firstName} ${lastName}` : 'Anonymous'}
        </span>
      </div>
      <div>
        <span className="justify-self-end text-green-500 font-bold">
          <FeedbackPointsCell
            userId={id}
            loadingValue={feedback.reduce((accumulator, currentFeedback) => {
              return accumulator + currentFeedback.behavior.value
            }, 0)}
          />
        </span>
      </div>
    </li>
  )
}

export default ListViewStudentItem
