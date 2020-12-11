const StudentPointsCard = ({ userId, name, points }) => {
  return (
    <div className="h-48 white-box mt-1 mb-4 flex flex-col relative">
      <h1 className="text-3xl font-display mb-4">{name}</h1>
      <div className="flex justify-end absolute bottom-2 right-4">
        <span className="font-display text-9xl text-green-500 mr-8">
          {points}
        </span>
        <div>
          <div className="w-12 h-12 rounded-full bg-green-500 flex justify-center items-center mb-4">
            <span className="text-white text-4xl">+</span>
          </div>
          <div className="w-12 h-12 rounded-full bg-red-500 flex justify-center items-center">
            <span className="text-white text-4xl">-</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StudentPointsCard
