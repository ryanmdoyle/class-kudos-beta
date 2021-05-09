import AwardFeedbackCard from './AwardFeedbackCard'
import { standard } from './AwardFeedbackCard.mock'

export const Generated = (args) => {
  return (
    <div {...args}>
      <AwardFeedbackCard
        groupId={standard().groupId}
        userId={ standard().userId}
        behaviorsOfGroup={  standard().behaviorsOfGroup}
        firstName={ standard().firstName}
        selecting={ standard().selecting}
        selected={ standard().selected}
        setSelecting={ standard().setSelecting}
        setSelected={ standard().setSelected}
      />
    </div>
  )
}

export const Small = Generated.bind({});
Small.args = { className: 'max-w-screen-sm' };

export const Medium = Generated.bind({});
Medium.args = { ...Small.args, className: 'max-w-screen-md' };

export const Large = Generated.bind({});
Large.args = { ...Small.args, className: 'max-w-screen-lg' };

export const XLarge = Generated.bind({});
XLarge.args = { ...Small.args, className: 'max-w-screen-xl' };

export const selecting = () => {
  return <AwardFeedbackCard
    groupId={ standard().groupId }
    userId={ standard().userId }
    behaviorsOfGroup={  standard().behaviorsOfGroup }
    firstName={ standard().firstName }
    selecting={ true }
    selected={ standard().selected }
    setSelecting={ standard().setSelecting }
    setSelected={ standard().setSelected }
  />
}

export default { title: 'Components/AwardFeedbackCard' }
