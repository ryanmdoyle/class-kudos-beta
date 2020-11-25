import { Link, routes } from '@redwoodjs/router'
import { useAuth } from '@redwoodjs/auth'
import LoginButton from '../LoginButton/LoginButton'

const SiteHeader = () => {
  const { isAuthenticated, currentUser } = useAuth()

  return (
    <header className="w-full h-16 flex bg-purple-800 px-4 py-3 justify-between items-center">
      <Link to={routes.welcome()}>
        <div className="flex items-center">
          <img src="/ClassKarma.svg" className="w-12 h-12"></img>
          <span className="text-xl text-white font-display">Class Karma</span>
        </div>
      </Link>
      <div className="flex items-center">
        {isAuthenticated && (
          <>
            <span className="text-normal text-white font-body pr-3">
              {currentUser.email}
            </span>
            <img
              src="/profile.jpg"
              className="w-10 h-10 rounded-full transform scale-100 hover:scale-125"
            ></img>
          </>
        )}
        <LoginButton />
      </div>
    </header>
  )
}

export default SiteHeader
