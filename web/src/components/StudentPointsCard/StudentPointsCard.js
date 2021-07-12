import StudentGroupPointsCell from 'src/components/cells/StudentGroupPointsCell/StudentGroupPointsCell'

const StudentPointsCard = ({ firstName, lastName, userId, groupId, totalPoints }) => {
  return (
    <div className="h-36 flex-grow-0 flex-shrink-0 white-box mt-1 mb-4 flex flex-col relative">
      <h1 className="text-3xl font-display mb-4">
        {firstName} {lastName}
      </h1>
        <div className="flex absolute bottom-2 left-4 items-end">
          <StudentGroupPointsCell userId={userId} groupId={groupId} />
        </div>
        <div className="flex absolute bottom-2 right-4 items-end">
          <span className="font-display text-7xl text-green mr-2">
            {totalPoints}
          </span>
          <span className="font-display text-3xl text-green pb-1">total kudos</span>
        </div>
    </div>
  )
}

export default StudentPointsCard
