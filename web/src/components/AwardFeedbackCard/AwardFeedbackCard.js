import FeedbackButton from 'src/components/FeedbackButton/FeedbackButton'

const AwardFeedbackCard = () => {
  return (
    <div className="white-box mb-4">
      <h2 className="font-display text-lg">Award Feedback</h2>
      <div className="h-full w-full flex flex-wrap justify-center content-start">
        <FeedbackButton />
        <FeedbackButton />
        <FeedbackButton />
        <FeedbackButton />
        <FeedbackButton />
        <FeedbackButton />
        <FeedbackButton />
        <FeedbackButton />
      </div>
    </div>
  )
}

export default AwardFeedbackCard
