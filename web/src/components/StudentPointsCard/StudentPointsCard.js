import UserPointsCell from 'src/components/cells/UserPointsCell/UserPointsCell'

const StudentPointsCard = ({ student }) => {
  const { id, firstName, lastName } = student || {}
  return (
    <div className="h-36 flex-grow-0 flex-shrink-0 white-box mt-1 mb-4 flex flex-col relative">
      <h1 className="text-3xl font-display mb-4">
        {firstName} {lastName}
      </h1>
      <div className="flex justify-end absolute bottom-2 right-4">
        <span className="font-display text-8xl text-green mr-8">
          {id && <UserPointsCell userId={id} />}
        </span>
      </div>
    </div>
  )
}

export default StudentPointsCard
