/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useAuth } from '@redwoodjs/auth'
import { navigate, routes } from '@redwoodjs/router'

const LoginButton = () => {
  const { logIn } = useAuth()

  return (
    <button
      className="mx-4 text-center text-white font-medium bg-purple-600 hover:bg-purple-500 rounded-md py-2 px-4 cursor-pointer"
      onClick={async () => {
        await logIn()
        navigate(routes.login())
      }}
    >
      Log In
    </button>
  )
}

export default LoginButton
