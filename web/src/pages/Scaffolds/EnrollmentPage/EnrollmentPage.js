import EnrollmentsLayout from 'src/layouts/Scaffolds/EnrollmentsLayout'
import EnrollmentCell from 'src/components/Scaffolds/EnrollmentCell'

const EnrollmentPage = ({ id }) => {
  return (
    <EnrollmentsLayout>
      <EnrollmentCell id={id} />
    </EnrollmentsLayout>
  )
}

export default EnrollmentPage
