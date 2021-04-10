import { toast } from '@redwoodjs/web/toast'

import RibbonMedal from 'src/components/svg/RibbonMedal/RibbonMedal'

const FeedbackButton = ({
  name,
  value,
  totalUserPoints,
  studentId,
  behaviorId,
  groupId,
  newFeedback,
  loading,
}) => {
  const giveFeedback = () => {
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

  const wontReturnNegativeTotal = () => {
    if (totalUserPoints === 0 && value > 0) return true
    if (totalUserPoints > 0) return true // giveFeedback will auto-adjust neg values before query
    return false
  }

  return (
    <div
      className={`h-24 w-36 white-box m-1 overflow-hidden flex flex-col justify-center items-center
      ${
        (loading || (totalUserPoints === 0 && value < 0)) &&
        'opacity-70 cursor-not-allowed'
      }
      ${!loading && 'hover:ring-2'} ring-purple-500`}
      onClick={() => {
        if (!wontReturnNegativeTotal())
          toast.error('User already has zero points.')
        if (!loading && wontReturnNegativeTotal()) {
          giveFeedback()
        }
      }}
    >
      <span>
        <RibbonMedal loading={loading} />
      </span>
      <span className="text-gray-500 text-center text-sm">{name}</span>
      <span
        className={`${
          value > 0 ? 'text-green-500' : 'text-red-500'
        } font-bold text-center text-sm`}
      >
        {value}
      </span>
    </div>
  )
}

export default FeedbackButton
