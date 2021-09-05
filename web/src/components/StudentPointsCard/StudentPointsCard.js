const StudentPointsCard = ({ user }) => {
  const { firstName, lastName, points, groupPoints = [] } = user
  return (
    <div className="h-36 flex-grow-0 flex-shrink-0 white-box mt-1 mb-4 flex flex-col relative">
      <h1 className="text-3xl font-display mb-4">
        {firstName} {lastName}
      </h1>
      <div className="flex absolute bottom-2 right-4 items-end">
        <div className="mb-1">
          <span className="font-display text-6xl text-green mr-2">
            {groupPoints[0].points}
          </span>
          <span className="font-display text-3xl text-green mr-6">
            group kudos
          </span>
        </div>
      </div>
      <div className="flex absolute bottom-2 left-4 items-end">
        <span className="font-display text-5xl text-gray-400 mr-2">
          {points}
        </span>
        <span className="font-display text-xl text-gray-400 pb-1">
          total kudos
        </span>
      </div>
    </div>
  )
}

export default StudentPointsCard
