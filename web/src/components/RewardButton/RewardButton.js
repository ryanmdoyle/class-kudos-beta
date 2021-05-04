/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { toast } from '@redwoodjs/web/toast'

const RewardButton = ({
  reward,
  groupId,
  userId,
  availablePoints,
  newRedeemed,
  sendEmail,
  loading,
}) => {
  const claimReward = (response) => {
    const redeemedInput = {
      userId: userId,
      groupId: groupId,
      name: reward?.name,
      cost: reward?.cost,
    }
    if (response) {
      redeemedInput.response = response
    }

    newRedeemed({
      variables: {
        input: redeemedInput,
      },
    })

    sendEmail({
      variables: {
        input: {
          userId: userId,
          groupId: groupId,
          rewardId: reward?.id,
          value: reward?.cost,
        },
      },
    })
  }

  return (
    <div
      className={`h-24 w-24 white-box m-1 overflow-hidden flex flex-col justify-between items-center ${
        availablePoints >= reward?.cost
          ? 'hover:ring-2 ring-purple-500'
          : 'cursor-not-allowed opacity-70'
      }`}
      onClick={() => {
        let response = null
        if (reward.responseRequired === true) {
          response = window.prompt(reward.responsePrompt)
        }
        if (response === '') {
          toast.error('You must enter a response!')
        }
        if (availablePoints < reward?.cost) {
          toast.error('You do not have enough points to claim that reward!')
        }
        if (!loading && availablePoints >= reward?.cost) {
          reward.responseRequired
            ? response !== null && response !== ''
              ? claimReward(response)
              : toast.error('Redmeption canceled')
            : claimReward()
        }
      }}
    >
      <span
        className={`${
          loading || availablePoints < reward?.cost
            ? 'text-gray-400'
            : 'text-gray-500'
        } text-center text-sm`}
      >
        {reward?.name || '?'}
      </span>
      <span
        className={`${
          loading || availablePoints < reward?.cost
            ? 'text-gray-400'
            : 'text-red-400'
        } text-center text-sm font-bold`}
      >
        - {reward?.cost || '?'}
      </span>
    </div>
  )
}

export default RewardButton
