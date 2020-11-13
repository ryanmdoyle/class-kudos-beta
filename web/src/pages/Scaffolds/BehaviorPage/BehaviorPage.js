import BehaviorsLayout from 'src/layouts/Scaffolds/BehaviorsLayout'
import BehaviorCell from 'src/components/Scaffolds/BehaviorCell'

const BehaviorPage = ({ id }) => {
  return (
    <BehaviorsLayout>
      <BehaviorCell id={id} />
    </BehaviorsLayout>
  )
}

export default BehaviorPage
