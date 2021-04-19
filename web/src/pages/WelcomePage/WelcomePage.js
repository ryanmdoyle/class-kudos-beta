import { Link, routes, Redirect } from '@redwoodjs/router'
import { useAuth } from '@redwoodjs/auth'

import LandingLayout from '../../layouts/LandingLayout'
import WelcomeGuy from 'src/components/svg/WelcomeGuy/WelcomeGuy'

const WelcomePage = () => {
  const { isAuthenticated } = useAuth()
  if (isAuthenticated) return <Redirect to={routes.login()} />
  return (
    <LandingLayout>
      <h1 className="text-center text-5xl font-bold pb-4">
        Give Kudos, Get Happy Students.
      </h1>
      <section className="w-full h-full flex mt-6">
        <div className="flex-shrink-0">
          <WelcomeGuy width="200" />
        </div>
        <div className="ml-10">
          <h2 className="font-display text-2xl mb-4">
            Welcome to Class Kudos!
          </h2>
          <p className="text-xl">
            Behavior management websites are too bloated and opinionated.
            <p>Social media built-in?</p>
            <p>Digital "walls" of classroom work?</p>
            <p>You just want to give some kudos!</p>
          </p>
        </div>
      </section>
      <section className="grid grid-cols-3 gap-4 mt-8">
        <div>
          <h2 className="font-display text-2xl mb-4">Teacher Gives Kudos</h2>
        </div>
        <div>
          <h2 className="font-display text-2xl mb-4">Students Buy Rewards</h2>
        </div>
        <div>
          <h2 className="font-display text-2xl mb-4">Teacher Manges Rewards</h2>
        </div>
      </section>
    </LandingLayout>
  )
}

export default WelcomePage
