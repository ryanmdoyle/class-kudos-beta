import { useAuth } from '@redwoodjs/auth'
import { Toaster } from '@redwoodjs/web/toast'
import { usePageLoadingContext } from '@redwoodjs/router'

import { ModalProvider } from 'src/context/ModalContext'
import TeacherNav from 'src/components/TeacherNav/TeacherNav'
import StudentNav from 'src/components/StudentNav/StudentNav'
import ScaffoldNav from 'src/components/ScaffoldNav/ScaffoldNav'
import SiteHeader from 'src/components/SiteHeader/SiteHeader'
import Modal from 'src/components/Modal/Modal'
import PageLoader from 'src/components/PageLoader/PageLoader'
import DonateButton from 'src/components/DonateButton/DonateButton'

const DashboardLayout = ({ children }) => {
  const { hasRole } = useAuth()
  const { loading } = usePageLoadingContext

  return (
    <ModalProvider>
      <Modal />
      <Toaster timeout={4000} />
      <div className="w-full h-screen relative overflow-auto">
        <SiteHeader />
        <div className="flex w-full h-full-minusNav bg-gray-100">
          <nav className="w-1/5 h-full bg-white lg:w-dashboard relative">
            {hasRole('teacher') && <TeacherNav />}
            {hasRole('student') && <StudentNav />}
            {/* {hasRole('super_admin') && <ScaffoldNav />} */}
            {hasRole('teacher') && (
              <div className="flex w-full justify-center absolute bottom-2">
                <DonateButton />
              </div>
            )}
          </nav>
          <main className="w-4/5 h-full bg-gray-100 lg:w-content overflow-auto relative">
            {loading && <PageLoader />}
            {children}
          </main>
        </div>
      </div>
    </ModalProvider>
  )
}

export default DashboardLayout
