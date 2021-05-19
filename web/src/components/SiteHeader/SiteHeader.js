/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { Link, routes } from '@redwoodjs/router'
import { useAuth } from '@redwoodjs/auth'

import { useModal } from 'src/context/ModalContext'
import LoginButton from '../LoginButton/LoginButton'
import LogoutButton from '../LogoutButton/LogoutButton'
import EditUserCell from 'src/components/cells/EditUserCell'

const SiteHeader = () => {
  const { isAuthenticated, currentUser } = useAuth()
  const { openModal } = useModal()

  const openProfile = () => {
    openModal(<EditUserCell id={currentUser.id} />)
  }

  return (
    <header className="w-full h-16 flex bg-purple-800 px-4 py-3 justify-between items-center">
      <Link to={routes.home()}>
        <div className="flex items-center">
          <img src="/ClassKudos.svg" alt="profile" className="w-12 h-12"></img>
          <span className="text-xl text-white font-display">Class Kudos</span>
        </div>
      </Link>
      <div className="flex items-center">
        {isAuthenticated && (
          <>
            <span className="text-normal text-white font-body pr-3">
              {`${currentUser?.firstName} ${currentUser?.lastName}`}
            </span>
            <img
              src={currentUser?.profileImage}
              alt="user profile"
              className="w-10 h-10 rounded-full transform scale-100 hover:scale-125"
              onClick={() => {
                openProfile()
              }}
            ></img>
          </>
        )}
        {isAuthenticated && <LogoutButton />}
        {!isAuthenticated && <LoginButton />}
      </div>
    </header>
  )
}

export default SiteHeader
