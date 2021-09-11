import { toast } from '@redwoodjs/web/toast'

const RewardButton = ({
  reward,
  groupId,
  userId,
  totalPoints,
  groupPoints,
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
      className={`w-full white-box m-1 overflow-hidden flex flex-row justify-between items-center z-0 ${
        groupPoints >= reward?.cost
          ? 'hover:ring-2 ring-purple-500'
          : 'cursor-not-allowed opacity-70'
      } ${loading && 'cursor-wait'}`}
      onClick={() => {
        let response = null
        if (groupPoints < reward?.cost) {
          // not enough points, throw error
          toast.error('You do not have enough kudos to claim that reward!')
        } else {
          // if enough points...
          // prompt is needed
          if (reward.responseRequired === true && groupPoints >= reward?.cost) {
            response = window.prompt(reward.responsePrompt)
          }
          if (response === '') {
            toast.error('You must enter a response!')
          }
          // claim or cancel based on reponse
          if (!loading && groupPoints >= reward?.cost) {
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
          loading || groupPoints < reward?.cost
            ? 'text-gray-500'
            : 'text-gray-700'
        } text-center text-sm`}
      >
        {reward?.name || '?'}
      </span>
      <span
        className={`${
          loading || groupPoints < reward?.cost
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
