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
    <button
      className={`h-24 w-48 white-box m-1 overflow-hidden flex flex-col justify-between items-center ${
        availablePoints >= reward?.cost
          ? 'hover:ring-2 ring-purple-500'
          : 'cursor-not-allowed opacity-70'
      }`}
      onClick={() => {
        let response = null
        if (availablePoints < reward?.cost) { // not enough points, throw error
          toast.error('You do not have enough points to claim that reward!')
        } else { // if enough points...
          // prompt is needed
          if (reward.responseRequired === true && availablePoints > reward?.cost) {
            response = window.prompt(reward.responsePrompt)
          }
          if (response === '') {
            toast.error('You must enter a response!')
          }
          // claim or cancel based on reponse
          if (!loading && availablePoints >= reward?.cost) {
            reward.responseRequired
              ? response !== null && response !== ''
                ? claimReward(response)
                : toast.error('Redmeption canceled')
              : claimReward()
          }
        }
      }}
    >
      <span
        className={`${
          loading || availablePoints < reward?.cost
            ? 'text-gray-500'
            : 'text-gray-700'
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
    </button>
  )
}

export default RewardButton
