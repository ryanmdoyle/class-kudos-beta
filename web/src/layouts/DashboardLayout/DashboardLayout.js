import { Link, routes } from '@redwoodjs/router'

import StudentNav from 'src/components/StudentNav'

const DashboardLayout = ({ children }) => {
  return (
    <div className="w-full h-screen flex">
      <div className="w-64 h-full bg-white xl:w-1/5 py-6 px-2 flex flex-col items-center">
        <Link to={routes.welcome()}>
          <div className="w-full flex justify-center">
            <img className="w-16 h-16" src="ClassKarmaLogo.svg"></img>
          </div>
          <span className="block font-bold text-purple-600 text-2xl mb-6">
            Class Karma
          </span>
        </Link>
        <StudentNav />
      </div>
      <div className="w-full h-full bg-gray-100 xl:w-4/5 py-6 px-2">
        {children}
      </div>
    </div>
  )
}

export default DashboardLayout
