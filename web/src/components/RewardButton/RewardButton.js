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
        if (availablePoints < reward?.cost) {
          toast.error('You do not have enough points to claim that reward!')
        }
        if (!loading && availablePoints >= reward?.cost) {
          reward.responseRequired ? claimReward(response) : claimReward()
        }
      }}
    >
      {/* <span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-award"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke={loading ? 'gray' : 'currentColor'}
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <circle cx="12" cy="9" r="6" />
          <polyline
            points="9 14.2 9 21 12 19 15 21 15 14.2"
            transform="rotate(-30 12 9)"
          />
          <polyline
            points="9 14.2 9 21 12 19 15 21 15 14.2"
            transform="rotate(30 12 9)"
          />
        </svg>
      </span> */}
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
