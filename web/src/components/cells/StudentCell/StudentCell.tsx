import type { FindStudentQuery } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { MetaTags } from '@redwoodjs/web'

import timeTag from 'src/lib/timeTag'
import ListViewRecentItem from 'src/components/ListViewRecentItem/ListViewRecentItem'
import StudentEnrollmentListItem from 'src/components/StudentEnrollmentListItem'

export const QUERY = gql`
  query FindStudentQuery($userId: String!) {
    student: user(id: $userId) {
      id
      firstName
      lastName
      points
      enrollments {
        id
        group {
          id
          name
        }
      }
      feedback {
        id
        name
        value
        createdAt
      }
      redeemed {
        id
        name
        cost
        createdAt
      }
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ student }: CellSuccessProps<FindStudentQuery>) => {
  const newArray = [...student.feedback, ...student.redeemed]
  const sorted = newArray
    ? newArray
        .slice()
        .sort(
          (a, b) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        )
    : null
  return (
    <>
      <MetaTags
        title={`Class Kudos - ${student?.firstName} ${student?.lastName}`}
        description={`Student page for ${student?.firstName} ${student?.lastName}`}
      />
      <div className="white-box mb-4 flex flex-col justify-between">
      <h1 className="font-display text-2xl mb-4">
        {student.firstName} {student.lastName}
      </h1>
      <span className="flex">
        <span className="text-5xl text-green font-bold">{student.points}</span>
        <span className="text-xl font-display self-end ml-2">Points</span>
      </span>
      </div>
      <div className="white-box mb-4">
        <h2 className="text-xl font-display mb-2">Enrollments</h2>
        <ul>
          {student.enrollments.map((enrollment) => (
            <StudentEnrollmentListItem key={enrollment.id} enrollment={enrollment} userId={student.id} firstName={student.firstName} />
          ))}
        </ul>
      </div>
      <div className="white-box mb-4">
        <h2 className="text-xl font-display mb-2">Recent Feedback</h2>
        <ul>
          {sorted.map((activity) => (
            <ListViewRecentItem
              name={activity.name}
              value={activity.__typename === 'Feedback' ? activity.value : activity.cost}
              createdAt={activity.createdAt}
              activityType={activity.__typename}
              key={activity.id}
            />
          ))}
        </ul>
      </div>
    </>
  )
}
