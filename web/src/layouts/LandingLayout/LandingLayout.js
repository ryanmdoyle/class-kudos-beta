import SiteHeader from 'src/components/SiteHeader/SiteHeader'

const LandingLayout = ({ children }) => {
  return (
    <div className="w-full bg-white">
      <SiteHeader />
      <div className="pt-8 px-4 max-w-screen-lg m-auto">{children}</div>
    </div>
  )
}

export default LandingLayout
