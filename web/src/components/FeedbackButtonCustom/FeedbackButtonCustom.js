import { toast } from '@redwoodjs/web/toast'
import { useModal } from 'src/context/ModalContext'

import Pencil from 'src/components/svg/Pencil/Pencil'
import FeedbackCustomForm from 'src/components/FeedbackCustomForm/FeedbackCustomForm'

const FeedbackButtonCustom = ({
  totalUserPoints,
  studentId,
  behaviorId,
  groupId,
  newFeedback,
  newFeedbacks,
  selected,
  selecting,
  loading,
}) => {
  const { openModal } = useModal()
  const giveFeedback = (name, value) => {
    // adjustedValue reduces negative values to totalUserPoints to prevent negative total user points
    const adjustedValue = totalUserPoints + value < 0 ? -totalUserPoints : value
    newFeedback({
      variables: {
        input: {
          userId: studentId,
          behaviorId: behaviorId,
          groupId: groupId,
          name: name,
          value: adjustedValue,
        },
      },
    })
  }
  const giveFeedbacks = (name, value) => {
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
        input: feedbacks,
      },
    })
  }

  const wontReturnNegativeTotal = (value) => {
    if (totalUserPoints === 0 && value > 0) return true
    if (totalUserPoints > 0) return true // giveFeedback will auto-adjust neg values before query
    return false
  }

  const handleAwardSave = (name, value) => {
    if (!wontReturnNegativeTotal(value))
      toast.error('User already has zero kudos.')
    if (!loading && !selecting && wontReturnNegativeTotal(value)) {
      giveFeedback(name, value)
    }
    if (!loading && selecting && wontReturnNegativeTotal(value) && value > 0) {
      giveFeedbacks(name, value)
    }
  }

  return (
    <button
      className={`h-24 w-36 white-box m-1 overflow-hidden flex flex-col justify-center items-center
      ${loading && 'opacity-70 cursor-not-allowed'}
      ${!loading && 'hover:ring-2'} ring-purple-500`}
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
