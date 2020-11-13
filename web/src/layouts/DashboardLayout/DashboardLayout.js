import { Link, routes } from '@redwoodjs/router'

const DashboardLayout = ({ children }) => {
  return (
    <div className="w-full h-screen flex">
      <div className="w-64 h-full bg-white xl:w-1/5 py-6 px-2 flex flex-col items-center">
        <Link to={routes.welcome()}>
          <span className="font-bold text-purple-700 text-2xl">
            Class Karma
          </span>
        </Link>
      </div>
      <div className="w-full h-full bg-gray-100 xl:w-4/5 py-6 px-2">
        {children}
      </div>
    </div>
  )
}

export default DashboardLayout
