import { toast } from '@redwoodjs/web/toast'

import ThumbUp from 'src/components/svg/ThumbUp/ThumbUp'
import ThumbDown from 'src/components/svg/ThumbDown/ThumbDown'

const FeedbackButton = ({
  behavior,
  isSelectingMultiple,
  selectedStudents,
  groupId,
  newFeedback,
  loading,
  newFeedbacks,
  loadings,
}) => {
  const thisGroupIndex = selectedStudents[0]?.groupPoints.findIndex(
    (group) => group.groupId === groupId
  )
  const userGroupPoints =
    selectedStudents[0]?.groupPoints[thisGroupIndex]?.points
  const giveFeedback = () => {
    // adjustedValue reduces negative values to totalUserPoints to prevent negative total user points
    const adjustedValue =
      userGroupPoints + behavior.value < 0 ? -userGroupPoints : behavior.value
    newFeedback({
      variables: {
        createFeedbackInput: {
          userId: selectedStudents[0]?.id,
          behaviorId: behavior.id,
          groupId: groupId,
          name: behavior.name,
          value: adjustedValue,
        },
      },
    })
  }
  const giveFeedbacks = () => {
    const userIds = selectedStudents.map((user) => user.id)
    newFeedbacks({
      variables: {
        createFeedbacksInput: {
          userIds: userIds,
          behaviorId: behavior.id,
          groupId: groupId,
          name: behavior.name,
          value: behavior.value,
        },
      },
    })
  }

  const wontReturnNegativeTotal = () => {
    if (userGroupPoints === 0 && behavior.value > 0) return true
    if (userGroupPoints > 0) return true // giveFeedback will auto-adjust neg values before query
    return false
  }

  return (
    <button
      className={`h-24 w-36 white-box m-1 overflow-hidden flex flex-col justify-center items-center
      ${
        (loading ||
          loadings ||
          (isSelectingMultiple && selectedStudents.length === 0) ||
          (userGroupPoints === 0 && behavior.value < 0) ||
          (isSelectingMultiple && behavior.value < 0)) &&
        'opacity-70 cursor-not-allowed'
      }
      ${!loading && 'hover:ring-2'} ring-purple-500`}
      onClick={() => {
        if (!wontReturnNegativeTotal())
          toast.error('User already has zero kudos.')
        if (!loading && !isSelectingMultiple && wontReturnNegativeTotal()) {
          giveFeedback()
        }
        // only allow positive feedbacks (when giving many feedbacks)
        if (
          !loadings &&
          isSelectingMultiple &&
          selectedStudents.length > 0 &&
          behavior.value > 0
        ) {
          giveFeedbacks()
        }
      }}
    >
      {behavior.value > 0 && (
        <span className="text-green-500">
          <ThumbUp loading={loading} />
        </span>
      )}
      {behavior.value < 0 && (
        <span className="text-red-500">
          <ThumbDown loading={loading} />
        </span>
      )}
      <span className="text-gray-500 text-center text-sm">{behavior.name}</span>
      <span
        className={`${
          behavior.value > 0 ? 'text-green-500' : 'text-red-500'
        } font-bold text-center text-sm`}
      >
        {behavior.value}
      </span>
    </button>
  )
}

export default FeedbackButton
