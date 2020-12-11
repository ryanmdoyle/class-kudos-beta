import ListViewRecentItem from '../../components/ListViewRecentItem/ListViewRecentItem'

const RecentFeedbackListCard = () => {
  return (
    <div className="white-box mb-4 max-h-96 overflow-scroll">
      <h2 className="font-display text-lg mb-2">Recent Feedback for _______</h2>
      <ul>
        <ListViewRecentItem />
        <ListViewRecentItem />
        <ListViewRecentItem />
        <ListViewRecentItem />
        <ListViewRecentItem />
        <ListViewRecentItem />
        <ListViewRecentItem />
        <ListViewRecentItem />
        <ListViewRecentItem />
        <ListViewRecentItem />
        <ListViewRecentItem />
        <ListViewRecentItem />
      </ul>
    </div>
  )
}

export default RecentFeedbackListCard
