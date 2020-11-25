import { Link, routes } from '@redwoodjs/router'

const ClassListPage = () => {
  return (
    <>
      <h1>ClassListPage</h1>
      <p>
        Find me in <code>./web/src/pages/ClassListPage/ClassListPage.js</code>
      </p>
      <p>
        My default route is named <code>classList</code>, link to me with `
        <Link to={routes.classList()}>ClassList</Link>`
      </p>
    </>
  )
}

export default ClassListPage
