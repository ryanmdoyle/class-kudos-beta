import BehaviorButtons from './BehaviorButtons'

import { standard } from './BehaviorButtons.mock'

export const Single = () => {
  const mock = { ...standard() }
  mock.behaviors = [
    {
      __typename: 'Behavior',
      id: '8cd971ab-fd60-4bba-b52d-96d83c0f8a63',
      name: 'Helping',
      value: 1,
    },
  ]
  return <BehaviorButtons {...mock} />
}

export const Multiple = () => {
  return <BehaviorButtons {...standard()} />
}

export default { title: 'Components/BehaviorButtons' }
