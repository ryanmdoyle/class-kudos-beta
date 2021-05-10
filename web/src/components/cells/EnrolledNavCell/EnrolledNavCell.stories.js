import { Loading, Empty, Failure, Success } from './EnrolledNavCell'
import { standard } from './EnrolledNavCell.mock'

export const loading = () => {
  return Loading ? <Loading /> : null
}

export const empty = () => {
  return Empty ? <Empty /> : null
}

export const failure = () => {
  return Failure ? <Failure error={new Error('Oh no')} /> : null
}

export const success = () => {
  return Success ? (
    <div className='w-48'>
      <Success {...standard()} />
    </div>
  ) : null
}

export default { title: 'Cells/EnrolledNavCell' }
