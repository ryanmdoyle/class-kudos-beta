import { Link, routes } from '@redwoodjs/router'

const StudentPageLink = ({ userId, text }) => {
  return <Link to={routes.student({ userId: userId })}>{text}</Link>
}

export default StudentPageLink
