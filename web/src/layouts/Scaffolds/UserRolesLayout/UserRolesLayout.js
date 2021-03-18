import { Link, routes } from '@redwoodjs/router'
import { Toaster } from '@redwoodjs/web/toast'

const UserRolesLayout = (props) => {
  return (
    <div className="rw-scaffold">
      <Toaster timeout={1000} />
      <header className="rw-header">
        <h1 className="rw-heading rw-heading-primary">
          <Link to={routes.scaffoldsUserRoles()} className="rw-link">
            UserRoles
          </Link>
        </h1>
        <Link
          to={routes.scaffoldsNewUserRole()}
          className="rw-button rw-button-green"
        >
          <div className="rw-button-icon">+</div> New UserRole
        </Link>
      </header>
      <main className="rw-main">{props.children}</main>
    </div>
  )
}

export default UserRolesLayout
