import SiteHeader from 'src/components/SiteHeader/SiteHeader'

const LandingLayout = ({ children }) => {
  return (
    <div className="w-full h-full">
      <SiteHeader />
      <div className="pt-8 px-4">{children}</div>
    </div>
  )
}

export default LandingLayout
