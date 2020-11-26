const GridStudentSquare = () => {
  return (
    <div className="w-32 h-32 white-box flex flex-col justify-center items-center relative m-2">
      <span className="text-green-400 font-sm absolute right-2 top-2">17</span>
      <img src="/profile.jpg" className="h-16 w-16 rounded-full mb-2"></img>
      <span className="text-gray-500 text-light">First Last</span>
    </div>
  )
}

export default GridStudentSquare
