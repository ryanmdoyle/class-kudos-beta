import { toast } from '@redwoodjs/web/toast'
import { useModal } from 'src/context/ModalContext'

import Pencil from 'src/components/svg/Pencil/Pencil'
import FeedbackCustomForm from 'src/components/FeedbackCustomForm/FeedbackCustomForm'

const FeedbackButtonCustom = ({
  isSelectingMultiple,
  selectedStudents,
  groupId,
  newFeedback,
  newFeedbacks,
  loadings,
}) => {
  const { openModal } = useModal()

  const thisGroupIndex = selectedStudents[0]?.groupPoints.findIndex(
    (group) => group.groupId === groupId
  )

  const userGroupPoints =
    selectedStudents[0]?.groupPoints[thisGroupIndex]?.points

  const giveFeedback = (name, value) => {
    // adjustedValue reduces negative values to userGroupPoints to prevent negative total user points
    const adjustedValue = userGroupPoints + value < 0 ? -userGroupPoints : value
    newFeedback({
      variables: {
        createFeedbackInput: {
          userId: selectedStudents[0]?.id,
          groupId: groupId,
          name: name,
          value: adjustedValue,
        },
      },
    })
  }

  const giveFeedbacks = (name, value) => {
    const userIds = selectedStudents.map((user) => user.id)
    newFeedbacks({
      variables: {
        createFeedbacksInput: {
          userIds: userIds,
          groupId: groupId,
          name: name,
          value: value,
        },
      },
    })
  }

  const wontReturnNegativeTotal = (value) => {
    if (userGroupPoints === 0 && value > 0) return true
    if (userGroupPoints > 0) return true // giveFeedback will auto-adjust neg values before query
    return false
  }

  const handleAwardSave = (name, value) => {
    if (!wontReturnNegativeTotal(value))
      toast.error('User already has zero kudos.')
    if (!loadings && !isSelectingMultiple && wontReturnNegativeTotal(value)) {
      giveFeedback(name, value)
    }
    if (
      !loadings &&
      isSelectingMultiple &&
      wontReturnNegativeTotal(value) &&
      value > 0
    ) {
      giveFeedbacks(name, value)
    }
  }

  return (
    <button
      className={`h-24 w-36 white-box m-1 overflow-hidden flex flex-col justify-center items-center
      ${loadings && 'opacity-70 cursor-not-allowed'}
      ${!loadings && 'hover:ring-2'} ring-purple-500`}
      onClick={() => {
        openModal(
          <>
            <h2 className="text-xl font-bold">Custom Feedback</h2>
            <FeedbackCustomForm handleAwardSave={handleAwardSave} />
          </>
        )
      }}
    >
      <span className="text-purple-400">
        <Pencil />
      </span>

      <span className="text-gray-500 text-center text-sm">Custom Value</span>
    </button>
  )
}

export default FeedbackButtonCustom
