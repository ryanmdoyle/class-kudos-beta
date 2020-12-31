import { useState } from 'react'
import SubNav from 'src/components/SubNav/SubNav'
import DashboardLayout from 'src/layouts/DashboardLayout/DashboardLayout'
import ListView from 'src/components/ListView/ListView'
import GridView from 'src/components/GridView/GridView'
import RedeemedView from 'src/components/RedeemedView/RedeemedView'
import FeedbackView from 'src/components/FeedbackView/FeedbackView'
import OptionsView from 'src/components/OptionsView/OptionsView'

const GroupPage = ({ groupId }) => {
  const [view, setView] = useState('feedback')

  const viewList = () => {
    setView('list')
  }
  const viewGrid = () => {
    setView('grid')
  }
  const viewFeedback = () => {
    setView('feedback')
  }
  const viewRedeemed = () => {
    setView('redeemed')
  }
  const viewOptions = () => {
    setView('options')
  }
  return (
    <DashboardLayout>
      <SubNav
        view={view}
        viewList={viewList}
        viewGrid={viewGrid}
        viewFeedback={viewFeedback}
        viewRedeemed={viewRedeemed}
        viewOptions={viewOptions}
      />
      {view === 'list' && <ListView groupId={groupId} />}
      {view === 'grid' && <GridView groupId={groupId} />}
      {view === 'feedback' && <FeedbackView groupId={groupId} />}
      {view === 'redeemed' && <RedeemedView groupId={groupId} />}
      {view === 'options' && <OptionsView groupId={groupId} />}
    </DashboardLayout>
  )
}

export default GroupPage
