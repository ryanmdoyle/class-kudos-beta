const StudentGroupCardLoader = () => {
  return (
    <div className="w-100 h-24 white-box hover:shadow flex justify-between items-center mb-4 cursor-pointer animate-pulse">
      <div className="flex items-center">
        <img
          src="/ClassKudosLogo.svg"
          className="w-16 h-16 mr-4 rounded-full shadow-md"
        ></img>
        <div className="w-48 h-12 flex-col">
          <div className="h-6 bg-purple-400 rounded w-full mb-2"></div>
          <div className="h-4 bg-purple-400 rounded w-3/4"></div>
        </div>
      </div>
      <div className="flex flex-col">
        <svg
          className="w-8 h-t stroke-current stroke-2 text-gray-100 hover:text-purple-800 self-end"
          viewBox="0 0 24 24"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          data-setting="true"
        >
          <path
            stroke="none"
            d="M0 0h24v24H0z"
            fill="none"
            data-setting="true"
          />
          <path
            d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z"
            data-setting="true"
          />
          <circle cx="12" cy="12" r="3" data-setting="true" />
        </svg>
      </div>
    </div>
  )
}

export default StudentGroupCardLoader
