import StudentNav from 'src/components/StudentNav/StudentNav'
import SiteHeader from 'src/components/SiteHeader/SiteHeader'
import { useAuth } from '@redwoodjs/auth'

const DashboardLayout = ({ children }) => {
  const { currentUser } = useAuth()
  console.log('User in Layout', currentUser)
  return (
    <div className="w-full h-screen">
      <SiteHeader />
      <div className="flex w-full h-full-minusNav">
        <nav className="w-1/5 h-full bg-white lg:w-dashboard">
          <StudentNav />
        </nav>
        <main className="w-4/5 h-full bg-gray-100 lg:w-content overflow-scroll">
          {children}
        </main>
      </div>
    </div>
  )
}

export default DashboardLayout
