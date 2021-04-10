import RibbonMedal from 'src/components/svg/RibbonMedal/RibbonMedal'
import ThumbUp from 'src/components/svg/ThumbUp/ThumbUp'
import ThumbDown from 'src/components/svg/ThumbDown/ThumbDown'

const ListViewRecentItem = ({ name, value, createdAt, activityType }) => {
  const date = new Date(createdAt).toLocaleDateString()
  const feedbackStyle =
    activityType === 'Feedback'
      ? value > 0
        ? 'text-green-500'
        : 'text-red-500'
      : null
  const redeemed = activityType === 'Redeemed'
  const posFeedback = activityType === 'Feedback' && value > 0
  const negFeedback = activityType === 'Feedback' && value < 0
  return (
    <li className="h-12 w-full white-box flex items-center justify-between px-4 mb-2">
      <div className="flex items-center justify-self-start">
        <span className="mr-2">
          {redeemed && <RibbonMedal />}
          {posFeedback && (
            <span className="text-green-500">
              <ThumbUp />
            </span>
          )}
          {negFeedback && (
            <span className="text-red-500">
              <ThumbDown />
            </span>
          )}
        </span>
        <span
          className={`${feedbackStyle} ${
            redeemed ? 'text-red-500' : null
          } font-bold text-center w-10`}
        >
          {redeemed ? '-' : null}
          {value}
        </span>
        <span className="text-normal ml-2">{name}</span>
      </div>
      <div className="justify-self-end">
        {date && <span className="text-gray-500 font-light">{date}</span>}
      </div>
    </li>
  )
}

export default ListViewRecentItem
