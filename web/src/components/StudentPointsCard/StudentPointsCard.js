const StudentPointsCard = ({ student }) => {
  const { id, firstName, lastName, feedback } = student || {}
  const points = feedback
    ? feedback.reduce((accumulator, currentFeedback) => {
        return accumulator + currentFeedback.behavior.value
      }, 0)
    : null
  return (
    <div className="h-48 white-box mt-1 mb-4 flex flex-col relative">
      <h1 className="text-3xl font-display mb-4">
        {firstName} {lastName}
      </h1>
      <div className="flex justify-end absolute bottom-2 right-4">
        <span className="font-display text-9xl text-green mr-8">{points}</span>
        {/* <div className="w-12 flex flex-col justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-12 h-12 text-green hover:text-green-500"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
              clipRule="evenodd"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-12 h-12 text-red hover:text-red-600"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 000 2h6a1 1 0 100-2H7z"
              clipRule="evenodd"
            />
          </svg>
        </div> */}
      </div>
    </div>
  )
}

export default StudentPointsCard
