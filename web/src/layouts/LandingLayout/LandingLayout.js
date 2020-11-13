const {
  default: LoginButton,
} = require('src/components/LoginButton/LoginButton')

const LandingLayout = ({ children }) => {
  return (
    <div className="w-full h-full">
      <nav className="w-full h-20 bg-white flex justify-center">
        <div className="w-2/3 h-full flex justify-center items-center">
          <div className="mx-4 text-center">
            <span className="font-bold text-2xl">Class Karma!</span>
          </div>
          <div className="mx-4 text-center">
            <span>Item</span>
          </div>
          <div className="mx-4 text-center">
            <span>Item</span>
          </div>
          <div className="mx-4 text-center">
            <span>Item</span>
          </div>
          <LoginButton />
        </div>
      </nav>
      <div className="pt-8 px-4">{children}</div>
    </div>
  )
}

export default LandingLayout
