const GridStudentSquare = ({
  userId,
  name,
  profileImage,
  points,
  selected,
  handleSelect,
}) => {
  return (
    <div
      className={`w-32 h-32 white-box flex flex-col justify-center items-center relative m-2 hover:ring-2 ring-purple-500 ${
        selected.includes(userId) ? 'ring-2 ring-purple-500' : null
      }`}
      onClick={() => {
        handleSelect(userId)
      }}
    >
      <span className="text-green-400 font-sm absolute right-2 top-2">
        {points || '–'}
      </span>
      <img src={profileImage} className="h-16 w-16 rounded-full mb-2"></img>
      <span className="text-gray-500 text-light">{name || 'Anonymous'}</span>
    </div>
  )
}

export default GridStudentSquare
