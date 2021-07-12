import { groupPoints } from './groupPoints'
import type { StandardScenario } from './groupPoints.scenarios'

describe('groupPoints', () => {
  scenario('returns all groupPoints', async (scenario: StandardScenario) => {
    const result = await groupPoints()

    expect(result.length).toEqual(Object.keys(scenario.groupPoint).length)
  })
})
