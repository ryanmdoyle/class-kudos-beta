import FeedbacksLayout from 'src/layouts/Scaffolds/FeedbacksLayout'
import FeedbacksCell from 'src/components/Scaffolds/FeedbacksCell'

import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

// const DELETE_FEEDBACKS = gql`
//   mutation DeleteFeedbacks {
//     deleteGroupPoints {
//       count
//     }
//     deleteFeedbacks {
//       count
//     }
//   }
// `

const FeedbacksPage = () => {

  // const [deleteAll, { loading }] = useMutation(DELETE_FEEDBACKS, {
  //   refetchQueries: [
  //     {
  //       query: recentUserFeedbackOfGroupQuery,
  //       variables: { userId: userId, groupId: groupId },
  //     },
  //     { query: studentListQuery, variables: { id: groupId } },
  //   ],
  //   onCompleted: () => {
  //     toast.success('Added feedback!', { className: 'rw-flash-success' })
  //     if (isOpen) close() // close modal for custom values
  //   },
  //   onError: () => {
  //     toast.error('Oops, there was a problem. Please try again.')
  //   },
  // })

  return (
    <FeedbacksLayout>
    {/* <button className="bg-red-500 p-2 rounded m-2" onClick={deleteAll}>Delete all!</button> */}
      <FeedbacksCell />
    </FeedbacksLayout>
  )
}

export default FeedbacksPage
