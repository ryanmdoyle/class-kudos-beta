import { Link, routes } from '@redwoodjs/router'

const ClassGroupGridPage = () => {
  return (
    <>
      <h1>ClassGroupGridPage</h1>
      <p>
        Find me in{' '}
        <code>./web/src/pages/ClassGroupGridPage/ClassGroupGridPage.js</code>
      </p>
      <p>
        My default route is named <code>classGroupGrid</code>, link to me with `
        <Link to={routes.classGroupGrid()}>ClassGroupGrid</Link>`
      </p>
    </>
  )
}

export default ClassGroupGridPage
