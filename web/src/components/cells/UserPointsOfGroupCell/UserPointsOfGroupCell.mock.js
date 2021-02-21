// Define your own mock data here:
export const standard = (/* vars, { ctx, req } */) => ({
  feedbackOfUserForGroup: [
    {
      __typename: 'Feedback',
      id: '51544114-588f-4fb6-9991-43aa3117669f',
      behavior: {
        __typename: 'Behavior',
        id: '50e52916-c2f5-4979-a2d1-8ba4558559e4',
        value: 1,
      },
    },
    {
      __typename: 'Feedback',
      id: 'eb1e1d35-6a51-48d6-8054-988486d1629a',
      behavior: {
        __typename: 'Behavior',
        id: '50e52916-c2f5-4979-a2d1-8ba4558559e4',
        value: 1,
      },
    },
    {
      __typename: 'Feedback',
      id: '829ce3cb-a03c-403e-9dd7-53279ebfb782',
      behavior: {
        __typename: 'Behavior',
        id: '50e52916-c2f5-4979-a2d1-8ba4558559e4',
        value: 1,
      },
    },
  ],
})
