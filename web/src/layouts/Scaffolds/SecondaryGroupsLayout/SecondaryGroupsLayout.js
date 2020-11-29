import { Link, routes } from '@redwoodjs/router'
import { Flash } from '@redwoodjs/web'

const SecondaryGroupsLayout = (props) => {
  return (
    <div className="rw-scaffold">
      <Flash timeout={1000} />
      <header className="rw-header">
        <h1 className="rw-heading rw-heading-primary">
          <Link to={routes.scaffoldsSecondaryGroups()} className="rw-link">
            SecondaryGroups
          </Link>
        </h1>
        <Link
          to={routes.scaffoldsNewSecondaryGroup()}
          className="rw-button rw-button-green"
        >
          <div className="rw-button-icon">+</div> New SecondaryGroup
        </Link>
      </header>
      <main className="rw-main">{props.children}</main>
    </div>
  )
}

export default SecondaryGroupsLayout
