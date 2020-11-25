import { Link, routes } from '@redwoodjs/router'

const ClassGroupFeedbackPage = () => {
  return (
    <>
      <h1>ClassGroupFeedbackPage</h1>
      <p>
        Find me in{' '}
        <code>
          ./web/src/pages/ClassGroupFeedbackPage/ClassGroupFeedbackPage.js
        </code>
      </p>
      <p>
        My default route is named <code>classGroupFeedback</code>, link to me
        with `<Link to={routes.classGroupFeedback()}>ClassGroupFeedback</Link>`
      </p>
    </>
  )
}

export default ClassGroupFeedbackPage
