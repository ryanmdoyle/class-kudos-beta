const NavItem = ({ icon, text }) => {
  return (
    <li className="w-32 h-24 hover:bg-purple-50 hover:shadow-md rounded-lg mx-auto shadow mb-6">
      <span className="block text-center text-4xl py-2">{icon}</span>
      <p className="text-center text-sm font-bold">{text}</p>
    </li>
  )
}

export default NavItem
