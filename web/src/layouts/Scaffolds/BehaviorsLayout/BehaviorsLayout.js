import { Link, routes } from '@redwoodjs/router'
import { Toaster } from '@redwoodjs/web/toast'

const BehaviorsLayout = (props) => {
  return (
    <div className="rw-scaffold">
      <Toaster timeout={1000} />
      <header className="rw-header">
        <h1 className="rw-heading rw-heading-primary">
          <Link to={routes.scaffoldsBehaviors()} className="rw-link">
            Behaviors
          </Link>
        </h1>
        <Link
          to={routes.scaffoldsNewBehavior()}
          className="rw-button rw-button-green"
        >
          <div className="rw-button-icon">+</div> New Behavior
        </Link>
      </header>
      <main className="rw-main">{props.children}</main>
    </div>
  )
}

export default BehaviorsLayout
