import NavItem from 'src/components/NavItem'
import LoginButton from '../LoginButton/LoginButton'

const StudentNav = () => {
  return (
    <div className="w-full h-full flex flex-col justify-between">
      <ul className="w-full">
        <NavItem icon={'💰'} text={'Points Earned'} />
        <NavItem icon={'💸'} text={'Points Spent'} />
        <NavItem icon={'🛍️'} text={'Store'} />
      </ul>
      <div className="w-full h-32 flex flex-col justify-between items-center">
        <img className="h-16 w-16 mx-auto rounded-full" src="profile.jpg"></img>
        <div className="w-32">
          <LoginButton />
        </div>
      </div>
    </div>
  )
}

export default StudentNav
