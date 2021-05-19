import { navigate, routes } from '@redwoodjs/router'

const TeacherHomeButton = () => {
  return (
    <div className="flex h-12 py-2 mb-2 hover:bg-purple-100 rounded-md justify-center align-items cursor-pointer">
        <div
          className="w-full flex justify-center align-items"
          onClick={() => {
            navigate(routes.teacherHome())
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            />
          </svg>
          <span className="text-md font-display ml-2 leading-loose">
            Teacher Home
          </span>
        </div>
      </div>
  )
}

export default TeacherHomeButton
