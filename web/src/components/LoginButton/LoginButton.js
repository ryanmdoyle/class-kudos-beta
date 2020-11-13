import { useAuth } from '@redwoodjs/auth'
import { navigate } from '@redwoodjs/router'

const LoginButton = () => {
  const { isAuthenticated, logIn, logOut } = useAuth()

  return (
    <div
      className="mx-4 text-center text-white font-medium bg-purple-700 rounded-md py-2 px-4"
      onClick={async () => {
        if (isAuthenticated) {
          await logOut()
          navigate('/')
        } else {
          await logIn()
        }
      }}
    >
      <span>{isAuthenticated ? 'Log Out' : 'Log In'}</span>
    </div>
  )
}

export default LoginButton
