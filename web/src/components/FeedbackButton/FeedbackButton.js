import { toast } from '@redwoodjs/web/toast'

import ThumbUp from 'src/components/svg/ThumbUp/ThumbUp'
import ThumbDown from 'src/components/svg/ThumbDown/ThumbDown'

const FeedbackButton = ({
  name,
  value,
  totalUserPoints,
  userGroupPoints,
  studentId,
  behaviorId,
  groupId,
  newFeedback,
  newFeedbacks,
  selected,
  selecting,
  loading,
  loadings,
}) => {
  const giveFeedback = () => {
    // adjustedValue reduces negative values to totalUserPoints to prevent negative total user points
    const adjustedValue = userGroupPoints + value < 0 ? -userGroupPoints : value
    newFeedback({
      variables: {
        createFeedbackInput: {
          userId: studentId,
          behaviorId: behaviorId,
          groupId: groupId,
          name: name,
          value: adjustedValue,
        },
      },
    })
  }
  const giveFeedbacks = () => {
    const feedbacks = selected.map((userId) => {
      return {
        userId: userId,
        behaviorId: behaviorId,
        groupId: groupId,
        name: name,
        value: value,
      }
    })
    newFeedbacks({
      variables: {
        feedbackInput: feedbacks,
      },
    })
  }

  const wontReturnNegativeTotal = () => {
    if (userGroupPoints === 0 && value > 0) return true
    if (userGroupPoints > 0) return true // giveFeedback will auto-adjust neg values before query
    return false
  }

  return (
    <button
      className={`h-24 w-36 white-box m-1 overflow-hidden flex flex-col justify-center items-center
      ${
        (loading ||
          loadings ||
          (selecting && selected.length === 0) ||
          (userGroupPoints === 0 && value < 0) ||
          (selecting && value < 0)) &&
        'opacity-70 cursor-not-allowed'
      }
      ${!loading && 'hover:ring-2'} ring-purple-500`}
      onClick={() => {
        if (!wontReturnNegativeTotal())
          toast.error('User already has zero kudos.')
        if (!loading && !selecting && wontReturnNegativeTotal()) {
          giveFeedback()
        }
        // only allow positive feedbacks (when giving many feedbacks)
        if (!loadings && selecting && selected.length > 0 && value > 0) {
          giveFeedbacks()
        }
      }}
    >
      {value > 0 && (
        <span className="text-green-500">
          <ThumbUp loading={loading} />
        </span>
      )}
      {value < 0 && (
        <span className="text-red-500">
          <ThumbDown loading={loading} />
        </span>
      )}
      <span className="text-gray-500 text-center text-sm">{name}</span>
      <span
        className={`${
          value > 0 ? 'text-green-500' : 'text-red-500'
        } font-bold text-center text-sm`}
      >
        {value}
      </span>
    </button>
  )
}

export default FeedbackButton
